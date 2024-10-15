import {NavLink} from "react-router-dom";
import {links} from "../../lib/data/index.js";

const Nav = () => {
    return (
        <nav className="flex gap-8">
            {links.map((link, index) => {
                return <NavLink key={index} to={link.href}
                             className={({isActive})=>isActive ? "nav-active" : "not-active"}>
                    {link.name}
                </NavLink>
            })}
        </nav>
    )
}
export default Nav
