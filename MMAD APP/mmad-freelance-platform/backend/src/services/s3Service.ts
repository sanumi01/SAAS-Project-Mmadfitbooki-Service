import AWS from 'aws-sdk';

class S3Service {
    private s3: AWS.S3;

    constructor() {
        this.s3 = new AWS.S3({
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            region: process.env.AWS_REGION,
        });
    }

    async uploadFile(bucketName: string, fileName: string, fileContent: Buffer | string): Promise<AWS.S3.PutObjectOutput> {
        const params = {
            Bucket: bucketName,
            Key: fileName,
            Body: fileContent,
        };

        return this.s3.upload(params).promise();
    }

    async getFile(bucketName: string, fileName: string): Promise<AWS.S3.GetObjectOutput> {
        const params = {
            Bucket: bucketName,
            Key: fileName,
        };

        return this.s3.getObject(params).promise();
    }
}

export default new S3Service();