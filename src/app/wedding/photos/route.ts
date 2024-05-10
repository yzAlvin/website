import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import {
  getSignedUrl,
} from "@aws-sdk/s3-request-presigner";

const client = new S3Client({
    region: "ap-southeast-2",
    credentials: { accessKeyId: '', secretAccessKey: '' },
});

export async function GET(request: Request) {
    try {
        const url= await generateUploadUrl()
        return Response.json({ url })
    } catch (error) {
    } finally {
    }
}

function generateUploadUrl() {
    const imageName = `someImageName-${Date.now()}`
    const command = new PutObjectCommand({ Bucket: "", Key: imageName });

    return getSignedUrl(client, command, { expiresIn: 3600 });
}
