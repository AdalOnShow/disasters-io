import Heading from "../common/Heading.jsx";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const IncidentsHeading = ({ firstBtnLink, lastBtnLink, lastBtnName, steepBar }) => {
    return (
        <Heading upTitle="Home - Incidents - New Incident" title="New Incident" cross>
            <div className="hidden md:flex sm:w-[100px] md:w-[250px] lg:w-[400px] xl:w-[527px]">
                <div
                    className="bg-[#E5E7EB] flex-start flex h-[5px] w-full overflow-hidden rounded-[10px]">
                    {steepBar}
                </div>
            </div>
            <div className="flex items-center justify-center gap-4 mt-4">
                <NavLink to={firstBtnLink}>
                    <button
                        className="bg-[#FAFAFA] text-body py-3.5 md:py-[17px] px-10 md:px-[45px] lg:px-[55px] rounded-[6px] border border-[#E4E4E7] text-[8px] md:text-[12px] hover:bg-gray-200 transition-colors">Back
                    </button>
                </NavLink>
                <NavLink to={lastBtnLink}>
                    <button
                        className="bg-primary text-white py-3.5 md:py-[17px] px-[18px] md:px-[25px] lg:px-[41px] rounded-[6px] font-bold text-[8px] md:text-[12px] flex justify-center items-center gap-2 hover:bg-primary/80 transition-colors">{lastBtnName}
                    </button>
                </NavLink>
            </div>
        </Heading>
    )
}
export default IncidentsHeading
