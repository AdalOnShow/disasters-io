import IncidentsHeading from "./IncidentsHeading.jsx";
import { bestDescribes } from "../../lib/data/index.js";
import { useState } from "react";
import Item from "./Item.jsx";

const Step1 = () => {
    const [selected, setSelected] = useState()

    return (
        <section>
            <IncidentsHeading firstBtnLink="/incidents/new-incident" lastBtnLink="/incidents/new-incident/step-2" lastBtnName="Next step" steepBar={
                <div
                    className="flex h-full items-center justify-center overflow-hidden break-all rounded-full bg-primary w-[25%]" />} />

            <div className="container mx-auto max-w-[753px] pt-4 md:pt-6 lg:pt-10 px-2 sm:px-8 md:px-0">
                <h1 className="font-bold text-xl md:text-2xl text-black">Which of these best describes the incident?</h1>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-5 md:gap-[11px] pt-[25px]">
                    {
                        bestDescribes.map((item, i) => (
                            <Item key={i} {...item} onClick={() => setSelected(i)} isSelected={selected === i} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
export default Step1
