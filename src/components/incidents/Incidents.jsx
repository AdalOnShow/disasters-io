import Heading from "../common/Heading.jsx";
import { NavLink } from "react-router-dom";
import { Button1, Button2 } from "../common/Buttons.jsx";
import Cards from "../common/Cards.jsx";

const Incidents = () => {
    return (
        <section>
            <Heading upTitle="Home - Incidents" title="Incidents">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-2 pt-4 sm:pt-0">
                    <div className="relative rounded-[6px] bg-[#FAFAFA]">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <img src={"/assets/search.svg"} alt="search" width={18} height={18} />
                        </div>
                        <input
                            type="text"
                            placeholder="Search incident"
                            className="w-36 md:w-[190px] rounded-md border-0 py-[13px] md:py-[11.8px] pl-8 text-body ring-1 ring-secondary placeholder:text-body focus:ring-2 focus:ring-primary text-xs md:text-sm md:leading-6"
                        />
                    </div>
                    <Button2>Sort By: Date modified</Button2>
                    <NavLink to={"/incidents/new-incident"}>
                        <Button1 icon element={"New Incident"} />
                    </NavLink>
                </div>
            </Heading>
            <Cards />
        </section>
    )
}
export default Incidents
