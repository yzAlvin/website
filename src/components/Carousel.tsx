"use client"

import { Carousel as ACarousel } from '@trendyol-js/react-carousel';

const Dot = (selected: boolean) =>
    <svg className={selected ? `h-2 fill-black mr-2` : `h-2 fill-slate-400 mr-2`} xmlns="http://www.w3.org/2000/svg" viewBox="7.8 7.8 4.4 4.4"><path d="M7.8 10a2.2 2.2 0 0 0 4.4 0 2.2 2.2 0 0 0-4.4 0z" /></svg>

export default function Carousel() {
    return (
        <div className="rounded-xl rounded bg-white relative text-center p-4 flex-col lg:w-1/2 w-10/12">
            <ACarousel show={1} slide={1} swiping={true} swipeOn={0.5} navigation={Dot} className="flex items-center justify-center text-center">
            <div className="mb-6">
                <img src='/couple.jpeg' alt={'photo'} className="rounded-lg grayscale drop-shadow-2xl h-96 w-full object-cover" />
                <div className="mt-8" >
                    <h2 className="mb-4 font-bold text-xl text-slate-900">Photo Share</h2>

                    <p className="mb-6 px-4 text-slate-800">We are so happy you are celebrating with us and we would love to see your lovely faces!</p>

                    <a href="http://google.com">
                        <div className="border rounded-lg xl:w-1/3 w-2/3 mx-auto p-2 text-slate-900 transition bg-gray-200 hover:bg-gray-400">
                            Upload Your Photos!
                        </div>
                    </a>
                </div>
            </div>
            <div className="mb-6">
                <img src='/couple.jpeg' alt={'photo'} className="rounded-lg grayscale drop-shadow-2xl h-96 w-full object-cover" />
                <div className="mt-8" >
                    <h2 className="mb-4 font-bold text-xl text-slate-900">BOOM</h2>

                    <p className="mb-6 px-4 text-slate-800">WHATEVER</p>

                    <a href="http://google.com">
                        <div className="border rounded-lg xl:w-1/3 w-2/3 mx-auto p-2 text-slate-900 transition bg-gray-200 hover:bg-gray-400">
                            Do something else!
                        </div>
                    </a>
                </div>
            </div>
            </ACarousel>
        </div>
    )
}
