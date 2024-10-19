import IncidentsHeading from "./IncidentsHeading.jsx";
import { bestDescribes } from "../../lib/data/index.js";
import { useState } from "react";

const Step1 = () => {
    const [selected, setSelected] = useState(false)

    return (
        <section>
            <IncidentsHeading firstBtnLink="/incidents/new-incident" lastBtnLink="/incidents/new-incident/step-2" lastBtnName="Next step" steepBar={
                <div
                    className="flex h-full items-center justify-center overflow-hidden break-all rounded-full bg-primary w-[25%]" />} />

            <div className="container mx-auto max-w-[753px] pt-4 md:pt-6 lg:pt-10 px-8 md:px-0">
                <h1 className="font-bold text-xl md:text-2xl text-black">Which of these best describes the incident?</h1>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-[11px] pt-[25px]">
                    {
                        bestDescribes.map(({ img, text }, i) => (
                            <button
                                onClick={(i) => { setSelected((prev) => !prev) }}
                                key={i}
                                className={`flex justify-start items-center gap-[7.5px] bg-[#F4F4F5] hover:bg-secondary border border-secondary px-5 py-[22px] rounded-md transition-colors hover:scale-105 ${selected && "bg-primary"}`}>
                                <img src={img} alt={text} />
                                <p className={`text-sm text-body ${selected && "text-white"}`}>{text}</p>
                            </button>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
export default Step1
