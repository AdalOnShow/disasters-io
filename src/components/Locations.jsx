import Heading from "./common/Heading.jsx";
import { NavLink } from "react-router-dom";
import { Button1, Button2 } from "./common/Buttons.jsx";
import { locationCards } from "../lib/data/index.js";
import SmCard from "./common/SmCard.jsx";

const Locations = () => {
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

            <div className="container mx-auto max-w-[700px] lg:max-w-[1308px] pt-10 px-4 flex flex-col lg:flex-row items-start justify-center gap-0 sm:gap-10 md:gap-[94px]">
                <div className="max-w-[680px] order-2 lg:order-1">
                    <div className="flex flex-col justify-center items-start">
                        <div className="flex items-center justify-center gap-[15px]">
                            <div className="flex justify-center items-center p-[9px] bg-[#F4F4F5] rounded-full">
                                <img src="/assets/location/location.svg" alt="location" />
                            </div>
                            <div>
                                <p className="text-sm text-[#6B7280]">Location</p>
                                <h2 className="font-bold text-xl text-black">Tulare County, Los Angles, CA 23415</h2>
                            </div>
                        </div>
                        <div className="flex items-center justify-center gap-[15px] pt-[45px]">
                            <div className="flex justify-center items-center p-[9px] bg-[#F4F4F5] rounded-full">
                                <img src="/assets/location/mony.svg" alt="location" />
                            </div>
                            <div>
                                <p className="text-sm text-[#6B7280]">Approx. Cost:</p>
                                <h2 className="font-bold text-xl text-black">$60,607,456.00</h2>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-[1px] my-10 bg-secondary" />

                    <div className="flex flex-col justify-center items-start">
                        <h4 className="font-bold text-sm pb-[15px]">Description</h4>
                        <p className="text-base text-body">Lorem ipsum dolar sit general sac mascho werhoLorem ipsum
                            dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum
                            dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum
                            dolar sit general sac mascho werho</p>
                    </div>

                    <div className="w-full h-[1px] my-10 bg-secondary" />

                    <div>
                        <div className="flex items-center justify-between">
                            <h2 className="font-bold text-sm">Locations</h2>
                            <a href="#" className="text-sm text-[#A1A1AA] hover:underline">See all</a>
                        </div>
                        <div className="container mx-auto max-w-[1300px] pt-[15px]">
                            <div
                                className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-4 ">
                                {
                                    locationCards.map(({ image, title, des, price }, i) => (
                                        <div key={i} className="max-w-[306px] hover:scale-105 transition-all">
                                            <div className="max-h-[214px] relative">
                                                <img src={image} alt="card image"
                                                    className="w-full h-full object-cover" />
                                                <div
                                                    className="absolute top-2 right-2 flex items-center justify-center gap-1 md:gap-2 font-bold text-xs text-[#18181B] bg-white p-1 md:p-2.5 rounded-[40px]">
                                                    <img src={"/assets/location/building.svg"} alt="" />
                                                    Building
                                                </div>
                                            </div>
                                            <div className="pt-4 pl-1">
                                                <h2 className="font-bold text-base md:leading-[30px] text-black">{title}</h2>
                                                <p className="text-sm text-body">{des}</p>
                                                <h2 className="font-bold text-base md:leading-[30px] text-black">{price}</h2>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-[1px] my-10 bg-secondary" />

                    <div>
                        <div className="pb-[15px] flex items-center justify-between">
                            <h2 className="font-bold text-sm">Activities</h2>
                            <a href="#" className="text-sm text-[#0A0A0A] underline">See all</a>
                        </div>
                        <div className="pt-[15px]">
                            <SmCard />
                            <SmCard />
                        </div>
                    </div>

                    <div className="w-full h-[1px] my-10 bg-secondary" />

                    <div>
                        <div className="pb-[15px] flex items-center justify-between">
                            <h2 className="font-bold text-sm">Documents</h2>
                            <a href="#" className="text-sm text-[#0A0A0A] underline">See all</a>
                        </div>
                        <div className="pt-[15px]">
                            <SmCard />
                            <SmCard />
                        </div>
                    </div>
                </div>

                <div className="max-w-[526px] mx-auto order-1 lg:order-2 px-8 md:px-0">
                    <p className="text-sm text-body">Incident Map</p>
                    <img src="/assets/location/map.png" alt="map" className="my-5" />
                    <p className="text-sm text-body">Start 19.1232, -118.233 End 19.3245, -119.2323 </p>
                </div>

            </div>
        </section>
    )
}
export default Locations
