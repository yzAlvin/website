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

export async function POST(request: Request) {
    const { imageName }= await request.json()
    try {
        const url = await generateUploadUrl(imageName)
        return Response.json({ url })
    } catch (error) {
        console.error(error)
    } finally {
    }
}

function generateUploadUrl(fileName: string) {
    const imageName = `${Date.now()}-${fileName}`
    const command = new PutObjectCommand({ Bucket: process.env.S3_BUCKET_NAME!, Key: imageName });

    return getSignedUrl(client, command, { expiresIn: 7200 });
}
