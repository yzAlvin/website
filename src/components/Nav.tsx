import Link from "next/link"
import Image from "next/image"

export default function Nav() {
  return (
    <nav className="bg-gray-800 relative flex items-center justify-between">
      <>
        <Link className="mr-6" href="/">
          <Image src="https://res.cloudinary.com/alvinzhao/image/upload/v1650284210/thumbnail_vonbon_0cc482f532.png" alt='logo' width={50} height={50}/>
        </Link>
      </>

      <div className="w-full block flex-grow ">
        <Link className="mr-4 hover:text-violet-400" href="/blog/">
          <span>Blog</span>
        </Link>
        <Link className="mr-4 hover:text-violet-400" href="/projects/">
          <span>Projects</span>
        </Link>
      </div>
    </nav>
  )
}
