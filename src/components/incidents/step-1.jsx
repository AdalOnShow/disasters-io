import IncidentsHeading from "./IncidentsHeading.jsx";

const Step1 = () => {
    return (
        <section>
            <IncidentsHeading firstBtnLink="/incidents/new-incident" lastBtnLink="/incidents/new-incident/step-2" lastBtnName="Next step" steepBar={
                <div
                    className="flex h-full items-center justify-center overflow-hidden break-all rounded-full bg-primary w-[25%]" />} />
        </section>
    )
}
export default Step1
