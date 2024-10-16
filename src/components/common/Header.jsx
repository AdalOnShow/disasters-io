import { Link } from "react-router-dom";
import Nav from "./Nav.jsx";
import { useState } from "react";
import MobileNav from "./MobileNav.jsx";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen)
    return (
        <header className="z-50 bg-secondary/50 border-b-[1px] border-secondary py-4 lg:py-0 px-2">
            <div className="container mx-auto flex justify-between items-center max-w-[1268px]">
                <div className="">
                    <Link to={"/"}>
                        <img src={"../src/assets/nav/logo.png"} alt="" className="max-w-[131px]" />
                    </Link>
                </div>
                <div className="hidden lg:flex">
                    <Nav />
                </div>
                <div className="hidden lg:flex items-center justify-start gap-4">
                    <img src={"../src/assets/nav/notification.png"} alt="" className="size-6 md:size-10 cursor-pointer" />
                    <img src={"../src/assets/nav/avatar.png"} alt="" className="size-10 cursor-pointer" />
                    <div>
                        <h4 className="font-semibold text-base text-body">Usman Zafar</h4>
                        <p className="text-body text-sm">usmanzafar@gmail.com</p>
                    </div>
                </div>
                <button onClick={toggleMenu}
                    className="flex lg:hidden bg-body rounded-md focus:outline-none"
                    aria-label={"Toggle Menu"}>
                    <img src={isOpen ? "../src/assets/nav/close.svg" : "../src/assets/nav/menu.svg"} alt="toggle" className="size-10" />
                </button>
            </div>
            {isOpen && <MobileNav toggleMenu={toggleMenu} />}
        </header>
    )
}
export default Header
