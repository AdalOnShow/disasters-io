import { NavLink } from "react-router-dom";
import { links } from "../../lib/data/index.js";

const Nav = () => {
    return (
        <nav className="flex gap-8">
            {links.map((link, index) => {
                return <NavLink key={index} to={link.href}
                    className={({ isActive }) => isActive ? "font-bold text-[14px] text-black border-b-[3px] border-black pt-8 pb-7" : "text-[#A1A1AA] pt-8 pb-7 font-normal text-[14px] hover:text-black"}>
                    {link.name}
                </NavLink>
            })}
        </nav>
    )
}
export default Nav
