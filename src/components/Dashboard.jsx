import Heading from "./common/Heading.jsx";
import HeadingButtons from "./common/HeadingButtons.jsx";
import { cards } from "../lib/data/index.js";
import ChatBox from "./ChatBox.jsx";
import { useState } from "react";

const Dashboard = () => {
    const [isChatBoxOpen, setIsChatBoxOpen] = useState(false)
    const toggleBox = () => setIsChatBoxOpen((prev) => !prev)
    return (
        <section>
            <Heading upTitle="Welcome back" title="Dashboard">
                <HeadingButtons buttonTitle="Cypher AI" />
            </Heading>
            <div className="container mx-auto max-w-[1300px] pt-10">
                <div className="flex flex-wrap justify-center xl:justify-start items-center gap-8 md:gap-4 ">
                    {
                        cards.map(({ image, title, des, price }, i) => (
                            <div key={i} className="max-w-[306px]">
                                <div className="max-h-[253px] relative">
                                    <img src={image} alt="card image"
                                        className="w-full h-full object-cover" />
                                    <div
                                        className="absolute top-3 right-3 flex items-center justify-center gap-2 font-bold text-xs text-[#18181B] bg-white p-2.5 rounded-[40px]">
                                        <img src={"../src/assets/dashboard/rain.png"} alt="" />
                                        Blizzard
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

            <div className="fixed bottom-16 right-16">
                <button
                    onClick={toggleBox}
                    className={`${isChatBoxOpen ? "bg-white" : "bg-primary"} md:size-16 xl:size-[77px] flex items-center justify-center rounded-full text-4xl md:text-[45px] xl:text-[55px] drop-shadow-2xl`}>
                    <img src={isChatBoxOpen ? "../src/assets/dashboard/cross.png" : "../src/assets/dashboard/c.png"} alt="" />
                </button>
            </div>
            {
                isChatBoxOpen && <ChatBox />
            }
        </section>
    )
}
export default Dashboard
