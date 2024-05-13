import { NextResponse as Response } from 'next/server'
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import {
  getSignedUrl,
} from "@aws-sdk/s3-request-presigner";
import 'dotenv/config'

const client = new S3Client({
    region: process.env.S3_BUCKET_REGION!,
    credentials: { accessKeyId: process.env.S3_USER_ACCESS_KEY_ID!, secretAccessKey: process.env.S3_USER_SECRET_ACCESS_KEY! },
});

export async function GET(request: Request) {
    try {
        const url= await generateUploadUrl()
        return Response.json({ url })
    } catch (error) {
        console.error(error)
    } finally {
    }
}

function generateUploadUrl() {
    const imageName = `someImageName-${Date.now()}`
    const command = new PutObjectCommand({ Bucket: process.env.S3_BUCKET_NAME!, Key: imageName });

    return getSignedUrl(client, command, { expiresIn: 3600 });
}
