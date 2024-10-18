import IncidentsHeading from "./IncidentsHeading.jsx";

const Step3 = () => {
    return (
        <section>
            <IncidentsHeading firstBtnLink="/incidents/new-incident/step-2" lastBtnLink="/locations" lastBtnName="Finished" steepBar={
                <div
                    className="flex h-full items-center justify-center overflow-hidden break-all rounded-full bg-primary w-[75%]" />} />
        </section>
    )
}
export default Step3
