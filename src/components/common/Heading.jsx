import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Heading = ({ children, upTitle, title, cross }) => {
    return (
        <section className="bg-secondary/50 py-6 md:py-8 px-2">
            <div className="container mx-auto max-w-[1268px]">
                <div className="flex-row md:flex justify-between items-center">
                    <div className="flex justify-center items-center gap-4">
                        {cross &&
                            <NavLink to={"/incidents/new-incident"}>
                                <div className="flex items-center justify-center rounded-full size-[41px] bg-white p-[10px] cursor-pointer hover:drop-shadow-2xl transition-all">
                                    <img src={"../../src/assets/cross.png"} alt="cross" />
                                </div>
                            </NavLink>
                        }
                        <div className="text-center md:text-left">
                            <p className="text-[10px] md:text-xs text-body">{upTitle}</p>
                            <h1 className="font-bold text-xl md:text-[26px] text-black leading-[33px]">{title}</h1>
                        </div>
                    </div>
                    {children}
                </div>
            </div>
        </section>
    )
}
export default Heading
