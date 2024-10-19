import IncidentsHeading from "./IncidentsHeading.jsx";

const Step3 = () => {
    return (
        <section>
            <IncidentsHeading firstBtnLink="/incidents/new-incident/step-2" lastBtnLink="/locations" lastBtnName="Finished" steepBar={
                <div
                    className="flex h-full items-center justify-center overflow-hidden break-all rounded-full bg-primary w-[75%]" />} />

            <div className="container mx-auto max-w-[752px] pt-10 px-4">
                <div>
                    <h1 className="font-bold text-xl md:text-2xl text-black pb-3">Where’s the incident?</h1>
                    <p className="text-xs md:text-sm leading-[22px] text-body pb-6 max-w-[580px]">Enter a GPS, address. or pin point on the map. Try to be as accurate as possible, or click:Jurisdiction Wide</p>
                    <img src={"/assets/incidents/map.png"} alt="" />
                </div>
            </div>
        </section>
    )
}
export default Step3
