import Heading from "./common/Heading.jsx";
import HeadingButtons from "./common/HeadingButtons.jsx";
import { NavLink } from "react-router-dom";
import { Button1 } from "./common/Buttons.jsx";
import { locationCards } from "../lib/data/index.js";
import SmCard from "./common/SmCard.jsx";

const Locations = () => {
    return (
        <section>
            <Heading upTitle="Home - Incidents" title="Incidents">
                <HeadingButtons >
                    <NavLink to={"/incidents/new-incident"}>
                        <Button1 icon element={"New Incident"} />
                    </NavLink>
                </HeadingButtons>
            </Heading>

            <div className="container mx-auto max-w-[700px] lg:max-w-[1308px] pt-10 px-4 flex flex-col lg:flex-row items-start justify-center gap-[94px]">
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
                                className="grid grid-cols-3 gap-8 md:gap-4 ">
                                {
                                    locationCards.map(({ image, title, des, price }, i) => (
                                        <div key={i} className="max-w-[306px] hover:scale-105 transition-all">
                                            <div className="max-h-[214px] relative">
                                                <img src={image} alt="card image"
                                                    className="w-full h-full object-cover" />
                                                <div
                                                    className="absolute top-2 right-2 flex items-center justify-center gap-2 font-bold text-xs text-[#18181B] bg-white p-2.5 rounded-[40px]">
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

                <div className="max-w-[526px] order-1 lg:order-2">
                    <p className="text-sm text-body">Incident Map</p>
                    <img src="/assets/location/map.png" alt="map" className="my-5" />
                    <p className="text-sm text-body">Start 19.1232, -118.233 End 19.3245, -119.2323 </p>
                </div>

            </div>
        </section>
    )
}
export default Locations
