import Footer from "@/components/Footer"
import Carousel from "@/components/Carousel"

export default function WeddingPage() {
    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center">
            <div className="absolute bg-scroll bg-cover bg-[url('/couple.jpeg')] h-screen w-screen blur grayscale">
            </div>
            <Carousel />
            <Footer />
        </div>
    )
}
