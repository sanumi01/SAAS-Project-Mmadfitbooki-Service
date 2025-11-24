<#
Safe PowerShell script to sync an S3 bucket into a Git repo folder and commit/push changes.

Usage:
  # preview (dry run)
  .\sync-s3-to-git.ps1 -BucketName mmad-fitbooki-service -DryRun

  # perform sync (no deletions)
  .\sync-s3-to-git.ps1 -BucketName mmad-fitbooki-service

  # perform sync and delete local files that are not in S3
  .\sync-s3-to-git.ps1 -BucketName mmad-fitbooki-service -Delete

Notes:
- Run from repository root or pass -RepoPath.
- Requires AWS CLI and Git in PATH and configured credentials.
#>

param(
    [string]$BucketName = 'mmad-fitbooki-service',
    [switch]$Delete,
    [switch]$DryRun,
    [switch]$NoPush,
    [string]$RepoPath = (Get-Location).Path
)

function Write-ErrExit {
    param($msg)
    Write-Host "ERROR: $msg" -ForegroundColor Red
    exit 1
}

Write-Host "S3 -> Git sync helper"
Write-Host "Bucket: $BucketName"
Write-Host "RepoPath: $RepoPath"

# Check required tools
if (-not (Get-Command aws -ErrorAction SilentlyContinue)) {
    Write-ErrExit "AWS CLI not found in PATH. Install and configure 'aws' first."
}
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-ErrExit "Git not found in PATH. Install Git before running this script."
}

# Ensure repo path exists and looks like a git repo
if (-not (Test-Path (Join-Path $RepoPath '.git'))) {
    Write-ErrExit "Target path '$RepoPath' does not look like a Git repo (missing .git). Run this from repo root or pass -RepoPath."
}

Push-Location -Path $RepoPath
try {
    # get current branch
    $currentBranch = (git rev-parse --abbrev-ref HEAD) -replace "`r","" -replace "`n",""
    Write-Host "Current git branch: $currentBranch"

    # check working tree for uncommitted changes
    $status = git status --porcelain
    if ($status) {
        $ts = Get-Date -Format 'yyyyMMdd-HHmmss'
        $backupBranch = "pre-s3-sync-$ts-branch"
        Write-Host "Working tree has uncommitted changes. Creating backup branch: $backupBranch"

        # stash changes then create a backup branch with the stashed work
        git stash push -u -m "pre-s3-sync-$ts" | Out-Null
        git checkout -b $backupBranch
        git stash pop --index | Out-Null
        git add -A
        try {
            git diff --cached --quiet
            $hasCommit = $LASTEXITCODE -ne 0
        } catch {
            $hasCommit = $false
        }
        if ($hasCommit) {
            git commit -m "WIP backup before S3 sync ($ts)" | Out-Null
            # push backup branch if origin exists
            $hasOrigin = $false
            try { git remote get-url origin | Out-Null; $hasOrigin = $true } catch {}
            if ($hasOrigin) {
                Write-Host "Pushing backup branch to origin/$backupBranch"
                git push -u origin $backupBranch
            } else {
                Write-Host "No remote 'origin' found; backup branch created locally: $backupBranch"
            }
        } else {
            Write-Host "No changes to commit on backup branch after popping stash."
        }

        # return to original branch
        git checkout $currentBranch
        Write-Host "Returned to branch: $currentBranch"
    }

    # Build aws sync arguments
    $awsArgs = @('s3','sync',"s3://$BucketName",$RepoPath,'--exact-timestamps')
    if ($Delete.IsPresent) { $awsArgs += '--delete' }
    if ($DryRun.IsPresent) { $awsArgs += '--dryrun' }

    Write-Host "Running: aws $($awsArgs -join ' ')"

    # run aws sync and print output
    try {
        $result = & aws @awsArgs 2>&1
        if ($result) { $result | ForEach-Object { Write-Host $_ } }
    } catch {
        Write-Host "Failed to run aws: $_" -ForegroundColor Red
        return
    }

    if ($DryRun.IsPresent) {
        Write-Host "Dry run completed. No commits will be made." -ForegroundColor Cyan
        return
    }

    # stage and commit changes if any
    git add -A
    try {
        git diff --cached --quiet
        if ($LASTEXITCODE -ne 0) { $stagedChanges = $true } else { $stagedChanges = $false }
    } catch {
        $stagedChanges = $false
    }

    if ($stagedChanges) {
        $ts2 = Get-Date -Format 'yyyy-MM-dd HH:mm:ss'
        git commit -m "Sync from s3://$BucketName ($ts2)"
        if (-not $NoPush.IsPresent) {
            $hasOrigin = $false
            try { git remote get-url origin | Out-Null; $hasOrigin = $true } catch {}
            if ($hasOrigin) {
                Write-Host "Pushing committed changes to origin/$currentBranch"
                git push origin $currentBranch
            } else {
                Write-Host "No remote 'origin' configured; commit created locally." -ForegroundColor Yellow
            }
        } else {
            Write-Host "NoPush specified - commit created locally but not pushed." -ForegroundColor Cyan
        }
    } else {
        Write-Host "No changes detected after sync. Nothing to commit." -ForegroundColor Green
    }

} finally {
    Pop-Location
}
