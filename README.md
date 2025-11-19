# SAAS-Project-Mmadfitbooki-Service
Fitness Platform

## S3-to-Git sync (safe, CLI)

This repository includes a small PowerShell helper script `sync-s3-to-git.ps1` that safely syncs an S3 bucket into this repo folder and commits + pushes the result.

Key safety features:
- Verifies `aws` and `git` are installed.
- If the working tree has uncommitted changes, it stashes them and creates a timestamped backup branch containing those changes before syncing.
- Supports a dry-run mode so you can preview what `aws s3 sync` would do.

Default S3 bucket configured in the script: `mmad-fitbooki-service` (you can override via the `-BucketName` parameter).

Quick usage (PowerShell):

```powershell
# dry run (preview only)
.\sync-s3-to-git.ps1 -BucketName mmad-fitbooki-service -DryRun

# real sync (no delete)
.\sync-s3-to-git.ps1 -BucketName mmad-fitbooki-service

# real sync and allow deletions to mirror S3 to repo exactly
.\sync-s3-to-git.ps1 -BucketName mmad-fitbooki-service -Delete
```

Notes:
- Run this script from the repository root (or pass `-RepoPath` to point somewhere else).
- The script will commit and push to the current branch by default; if you want to review commits before pushing, run with `-NoPush` then push manually.
- Make sure your AWS credentials are configured locally (e.g., `aws configure` or environment variables) before running.

