// @ts-nocheck
"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { useState } from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import 'filepond/dist/filepond.min.css';

export default function Carousel() {
  const PhotosButton = () => {
      const [files, setFiles] = useState([]);

      const uploadToS3 = async (url: string, file: File) => {
        return await fetch(url, {
          method: "PUT",
          headers: {
            "Content-Type": "multipart/form-data"
          },
          body: file
        })
      }

      // @ts-ignore
      const handleFilePondUpload = async (fieldName, file, metadata, load, error, progress, abort) => {
        const { url } = await fetch("/wedding/photos", {
          method: "POST",
          headers: {
          "Content-Type": "application/json"
          },
          body: JSON.stringify({ imageName: file.name })
        }).then(res => res.json())

        const data = await uploadToS3(url, file)
        // @ts-ignore
        load(data.Key);

        const imageUrl = url.split('?')[0]
        console.log(imageUrl)
      }

    const HACK_hideFilePondCancelCSS = `
    .filepond--action-abort-item-processing {
    visibility: hidden;
    }
    `
    return (
          <Dialog>
            <DialogTrigger className="border rounded-lg xl:w-1/3 w-2/3 mx-auto p-2 text-slate-900 transition bg-gray-200 hover:bg-gray-400">Share Photos</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                <DialogTitle>Photos</DialogTitle>
                <DialogDescription>
                    <p className="mb-2">Uploading photos can be a bit slow!</p>
                    <br/>
                    <style>
                      {HACK_hideFilePondCancelCSS}
                    </style>
                    <FilePond
                        files={files}
                        onupdatefiles={setFiles}
                        allowMultiple={true}
                        maxFiles={999}
                        server={{process: handleFilePondUpload, revert: null}}
                        name="files"
                        labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
                        labelTapToCancel=''
                        credits={false}
                        allowRemove={false}
                        allowRevert={false}
                    />
                </DialogDescription>
                </DialogHeader>
            </DialogContent>
          </Dialog>
    )
  }

  const DonateButton = () => {
    return (
          <Dialog>
              <DialogTrigger className="border rounded-lg xl:w-1/3 w-2/3 mx-auto p-2 text-slate-900 transition bg-gray-200 hover:bg-gray-400">Registry</DialogTrigger>
              <DialogContent>
                  <DialogHeader>
                  <DialogTitle>Registry</DialogTitle>
                  <DialogDescription>
                      <p>Your presence at our wedding is the greatest gift we could ask for. Should you wish to honor us with a gift, a contribution towards our future together would be sincerely appreciated.</p>
                      <br/>
                      <p><span className="font-bold">Account Name:</span> Joy and Alvin</p>
                      <p><span className="font-bold">BSB:</span> 303-432</p>
                      <p><span className="font-bold">Account Number:</span> 1469476</p>
                  </DialogDescription>
                  </DialogHeader>
              </DialogContent>
          </Dialog>
    )
  }

    return (
        <div className="rounded-xl rounded bg-white relative text-center p-4 flex-col lg:w-1/2 w-10/12">

          <div className="mb-6">
            <img src='/couple_2.jpeg' alt={'photo'} className="rounded-lg grayscale drop-shadow-2xl h-96 w-full object-cover" />
            <div className="mt-8" >
                <h2 className="mb-4 font-bold text-xl text-slate-900">Alvin and Joy&rsquo;s Wedding</h2>

                <p className="mb-6 px-4 text-slate-800">Thanks</p>

                <div className="gap-4 flex flex-col">
                  <div>
                    <PhotosButton />
                  </div>
                  <div>
                    <DonateButton />
                  </div>
                </div>
            </div>
          </div>
        </div>
    )
}
