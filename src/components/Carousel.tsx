// @ts-nocheck
"use client"

import { Carousel as ACarousel } from '@trendyol-js/react-carousel';
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

const Dot = (selected: boolean) =>
    <svg className={selected ? `h-2 fill-black mx-1` : `h-2 fill-slate-400 mx-1`} xmlns="http://www.w3.org/2000/svg" viewBox="7.8 7.8 4.4 4.4"><path d="M7.8 10a2.2 2.2 0 0 0 4.4 0 2.2 2.2 0 0 0-4.4 0z" /></svg>

export default function Carousel() {
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
        <div className="rounded-xl rounded bg-white relative text-center p-4 flex-col lg:w-1/2 w-10/12">
            <ACarousel show={1} slide={1} swiping={true} swipeOn={0.2} navigation={Dot} className="flex items-center justify-center text-center">
            <div className="mb-6">
                <img src='/couple.jpeg' alt={'photo'} className="rounded-lg grayscale drop-shadow-2xl h-96 w-full object-cover select-none" />
                <div className="mt-8" >
                    <h2 className="mb-4 font-bold text-xl text-slate-900">Photo Share</h2>

                    <p className="mb-6 px-4 text-slate-800">We are so happy you are celebrating with us and we would love to see your lovely faces!</p>

                    <Dialog>
                        <DialogTrigger className="border rounded-lg xl:w-1/3 w-2/3 mx-auto p-2 text-slate-900 transition bg-gray-200 hover:bg-gray-400">Upload</DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                            <DialogTitle>You are too kind</DialogTitle>
                            <DialogDescription>
                                <p className="mb-2">Uploading photos can be a bit slow! Please be patient</p>
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
                </div>
            </div>
            <div className="mb-6">
                <img src='/couple.jpeg' alt={'photo'} className="rounded-lg grayscale drop-shadow-2xl h-96 w-full object-cover" />
                <div className="mt-8" >
                    <h2 className="mb-4 font-bold text-xl text-slate-900">Gifts</h2>

                    <p className="mb-6 px-4 text-slate-800">Gei Wo Qian Xie Xie</p>

                    <Dialog>
                        <DialogTrigger className="border rounded-lg xl:w-1/3 w-2/3 mx-auto p-2 text-slate-900 transition bg-gray-200 hover:bg-gray-400">Details</DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                            <DialogTitle>You are too kind</DialogTitle>
                            <DialogDescription>
                                <p>BSB: 032-136</p>
                                <p>Account Number: 1469576</p>
                            </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
            </ACarousel>
        </div>
    )
}
