
#!/bin/bash

# 💼 Mamaad Solution Deployment Script

S3_BUCKET="www.mamaadsolution-deploy"
CLOUDFRONT_ID="E33TC07R0FCTPK"
SOURCE_DIR="./site"

# 🔁 Sync to S3
echo "Syncing $SOURCE_DIR to S3 bucket: $S3_BUCKET..."
aws s3 sync $SOURCE_DIR s3://$S3_BUCKET --delete

# 🧹 Invalidate CloudFront Cache
echo "Creating CloudFront cache invalidation..."
aws cloudfront create-invalidation \
--distribution-id $CLOUDFRONT_ID \
--paths "/*"

echo "✅ Deploy complete! Site is updated and CDN cache is cleared."

