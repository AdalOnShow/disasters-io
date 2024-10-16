import { links } from "../../lib/data/index.js";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const MobileNav = ({ toggleMenu }) => {
    return (
        <nav
            className="lg:hidden fixed top-[70px] left-0 right-0 h-[80vh] bg-secondary py-4 px-2 flex gap-4 flex-col justify-start pt-8 items-center z-50">
            <div className="flex items-center justify-start gap-4 pb-4">
                <img src={"../src/assets/nav/notification.png"} alt="" className="size-10 cursor-pointer" />
                <img src={"../src/assets/nav/avatar.png"} alt="" className="size-10 cursor-pointer" />
                <div>
                    <h4 className="font-semibold text-base text-body">Usman Zafar</h4>
                    <p className="text-bodytext-sm">usmanzafar@gmail.com</p>
                </div>
            </div>
            {links.map((link, index) => {
                return <NavLink key={index} onClick={toggleMenu} to={link.href}
                    className={({ isActive }) => isActive ? "font-bold text-md text-black border-b-[3px] border-black mb-2" : "text-[#A1A1AA] mb-2 font-normal text-md hover:text-black"}>
                    {link.name}
                </NavLink>
            })}
        </nav>
    )
}
export default MobileNav
