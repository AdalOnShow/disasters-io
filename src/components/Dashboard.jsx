import Heading from "./common/Heading.jsx";
import HeadingButtons from "./common/HeadingButtons.jsx";
import ChatBox from "./ChatBox.jsx";
import { useState } from "react";
import { Button1 } from "./common/Buttons.jsx";
import Cards from "./common/Cards.jsx";

const Dashboard = () => {
    const [isChatBoxOpen, setIsChatBoxOpen] = useState(false)
    const toggleBox = () => setIsChatBoxOpen((prev) => !prev)
    return (
        <section>
            <Heading upTitle="Welcome back" title="Dashboard">
                <HeadingButtons>
                    <Button1 element={"Cypher AI"} />
                </HeadingButtons>
            </Heading>
            <Cards />
            <div className="fixed bottom-16 right-16">
                <button
                    onClick={toggleBox}
                    className={`${isChatBoxOpen ? "bg-white" : "bg-primary"} size-14 md:size-16 xl:size-[77px] flex items-center justify-center rounded-full text-2xl sm:text-4xl md:text-[45px] xl:text-[55px] drop-shadow-2xl focus:outline-none`}>
                    <img src={isChatBoxOpen ? "/assets/cross.png" : "/assets/dashboard/c.png"} alt="" />
                </button>
            </div>
            {
                isChatBoxOpen && <ChatBox />
            }
        </section>
    )
}
export default Dashboard
