import { Link } from "react-router-dom";
import Nav from "./Nav.jsx";

const Header = () => {
    return (
        <header className="w-full mx-auto bg-secondary/50 border-b-[1px] border-secondary py-4 lg:py-0 px-2">
            <div className="container mx-auto flex justify-between items-center">
                <div className="">
                    <Link to={"/"}>
                        <img src={"../src/assets/nav/logo.png"} alt="" className="max-w-28 lg:max-w-[131px]" />
                    </Link>
                </div>
                <div className="hidden lg:flex">
                    <Nav />
                </div>
                <div className="flex items-center justify-start gap-2 md:gap-4">
                    <img src={"../src/assets/nav/notification.png"} alt="" className="size-10 cursor-pointer" />
                    <img src={"../src/assets/nav/avatar.png"} alt="" className="size-6 lg:size-10 cursor-pointer" />
                    <div>
                        <h4 className="font-semibold text-sm md:text-base text-body">Usman Zafar</h4>
                        <p className="text-body text-xs md:text-sm">usmanzafar@gmail.com</p>
                    </div>
                </div>
                <div className="flex lg:hidden">
                    ham
                </div>
            </div>
        </header>
    )
}
export default Header
