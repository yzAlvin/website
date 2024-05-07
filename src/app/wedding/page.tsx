export default function WeddingPage() {
    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <div className="absolute bg-scroll bg-cover bg-[url('/couple.jpeg')] h-screen w-screen blur grayscale">
            </div>
            <div className="rounded-xl rounded bg-white relative text-center p-4 flex-col lg:w-1/2 w-10/12">
                <img src='/couple.jpeg' alt={'photo'} className="rounded-lg grayscale drop-shadow-2xl h-96 w-full object-cover" />
                <div className="mt-8" >
                    <h2 className="mb-8 font-bold text-xl text-slate-900">Photo Share</h2>

                    <p className="mb-8 px-4 text-slate-800">We are so happy you are celebrating with us and we would love to see your lovely faces!</p>
                    
                    <a href="http://google.com">
                        <div className="border rounded-lg xl:w-1/3 w-2/3 mx-auto mb-4 p-2 text-slate-900 transition bg-gray-300 hover:bg-gray-400">
                            Upload Your Photos!
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}
