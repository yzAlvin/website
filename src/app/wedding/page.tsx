import Carousel from "../../components/Carousel"

export default function WeddingPage() {
    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <div className="absolute bg-scroll bg-cover bg-[url('/couple.jpeg')] h-screen w-screen blur grayscale">
            </div>
            <Carousel />
        </div>
    )
}
