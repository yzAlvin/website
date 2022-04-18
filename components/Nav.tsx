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
            <a className="navbar-item" href="https://yzalvin.dev">
                <img src="https://orangemushroom.files.wordpress.com/2020/02/direction25.img_.yumyumi.face_.2.0_new.png" alt='logo'/>
            </a>

            <button role="button" className="navbar-burger" aria-label="menu" aria-expanded="false"
                    data-target="navbarBasicExample" onClick={() => toggleNav()}>
                <HamburgerMenu/>
            </button>
        </div>

        <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
            <div className="navbar-start">
                <a href="/blog/" className="navbar-item has-text-light">
                   Blog
                </a>

                <a href="/projects/"  className="navbar-item has-text-light">
                   Projects
                </a>
            </div>
        </div>
    </nav>);
}