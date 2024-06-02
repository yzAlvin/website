import { NextResponse as Response } from "next/server";
import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";
import "dotenv/config";

const client = new S3Client({
  region: process.env.S3_BUCKET_REGION!,
  credentials: {
    accessKeyId: process.env.S3_USER_ACCESS_KEY_ID!,
    secretAccessKey: process.env.S3_USER_SECRET_ACCESS_KEY!,
  },
});

export async function GET(request: Request) {
  try {
    const images = await getRecentItems();
    return Response.json({ images });
  } catch (error) {
    console.error(error);
  } finally {
  }
}

async function getRecentItems(): Promise<string[]> {
  const bucketName = process.env.S3_BUCKET_NAME!;

  try {
    const listObjectsCommand = new ListObjectsV2Command({
      Bucket: bucketName,
    });

    const response = await client.send(listObjectsCommand);

    if (response.Contents) {
      const thousandItems = response.Contents.map((object) => object.Key!);
      const lastFive = thousandItems.slice(-5);
      return lastFive.map(
        (imageName) =>
          `https://${bucketName}.s3.${process.env.S3_BUCKET_REGION}.amazonaws.com/${imageName}`
      );
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error retrieving recent items:", error);
    return [];
  }
}
