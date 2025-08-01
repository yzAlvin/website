import Footer from "@/components/Footer"
import Carousel from "@/components/Carousel"

export default function WeddingPage() {
    return (
        <div className="h-screen w-screen flex flex-col items-center justify-center min-h-screen">
            <div className="absolute bg-scroll bg-repeat bg-[url('/couple.jpeg')] min-h-screen w-full blur grayscale">
            </div>
            <Carousel />
            <Footer />
        </div>
    )
}
