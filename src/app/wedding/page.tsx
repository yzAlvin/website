export default function WeddingPage() {
    return (
        <div className="m-8 text-center items-center">
            <h1 className="mb-8 text-4xl font-bold">Alvin and Joy's Wedding</h1>
            <a href="http://google.com">
            <div className="border rounded-lg w-1/3 mx-auto mb-4 p-2 hover:bg-blue-800">
                Photos 
            </div>
            </a>
            <a href="http://google.com">
            <div className="border rounded-lg w-1/3 mx-auto mb-4 p-2 hover:bg-red-800">
                Crossword
            </div>
            </a>
            <a href="http://google.com">
            <div className="border rounded-lg w-1/3 mx-auto p-2 hover:bg-green-800">
                Some other thing
            </div>
            </a>
        </div>
    )
}