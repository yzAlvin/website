import Link from "next/link";
import Image from "next/image";
import {useState} from "react";

const HamburgerMenu = () => (<>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
    <span aria-hidden="true"></span>
</>)

export default function Nav() {
    const [isActive, setIsActive] = useState(false)

    const toggleNav = () => {
        setIsActive(!isActive)
    }

    return (<nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <Link href="/">
                <a  className="navbar-item" >
                    <Image src="https://res.cloudinary.com/alvinzhao/image/upload/v1650284210/thumbnail_vonbon_0cc482f532.png" alt='logo' width={50} height={50}/>
                </a>
            </Link>

            <button role="button" className="navbar-burger" aria-label="menu" aria-expanded="false"
                    data-target="navbarBasicExample" onClick={() => toggleNav()}>
                <HamburgerMenu/>
            </button>
        </div>

        <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
            <div className="navbar-start">
                <Link href="/blog/">
                   <a className="navbar-item has-text-light">Blog</a>
                </Link>

                <Link href="/projects/">
                    <a className="navbar-item has-text-light">Projects</a>
                </Link>
            </div>
        </div>
    </nav>);
}