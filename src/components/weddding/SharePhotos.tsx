// @ts-nocheck
"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { useState } from "react";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";

export default function SharePhotos() {
  const [files, setFiles] = useState([]);

  const uploadToS3 = async (url: string, file: File) => {
    return await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: file,
    });
  };

  // @ts-ignore
  const handleFilePondUpload = async (
    fieldName,
    file,
    metadata,
    load,
    error,
    progress,
    abort
  ) => {
    const { url } = await fetch("/wedding/photos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ imageName: file.name }),
    }).then((res) => res.json());

    const data = await uploadToS3(url, file);
    // @ts-ignore
    load(data.Key);

    const imageUrl = url.split("?")[0];
    console.log(imageUrl);
  };

  const HACK_hideFilePondCancelCSS = `
    .filepond--action-abort-item-processing {
    visibility: hidden;
    }
    `;

  const handleOpenChange = (isOpen) => {
    if (isOpen === false) {
        setFiles([])
    }
  }

  return (
    <Dialog onOpenChange={handleOpenChange}>
      <DialogTrigger className="border rounded-lg xl:w-1/3 w-2/3 mx-auto p-2 text-slate-900 transition bg-gray-200 hover:bg-gray-400">
        Share Photos
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Photos</DialogTitle>
          <DialogDescription>
            <p className="mb-2">Uploading photos can be a bit slow!</p>
            <div className="flex justify-center">
              <img src="usagyuun_many.webp" alt="" />
            </div>
            <br />
            <style>{HACK_hideFilePondCancelCSS}</style>
            <FilePond
              files={files}
              onupdatefiles={setFiles}
              allowMultiple={true}
              maxFiles={999}
              server={{ process: handleFilePondUpload, revert: null }}
              name="files"
              labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
              labelTapToCancel=""
              credits={false}
              allowRemove={false}
              allowRevert={false}
            />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
