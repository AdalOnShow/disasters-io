import IncidentsHeading from "./IncidentsHeading.jsx";

const Step2 = () => {
    return (
        <section>
            <IncidentsHeading firstBtnLink="/incidents/new-incident/step-1" lastBtnLink="/incidents/new-incident/step-3" lastBtnName="Next step" steepBar={
                <div
                    className="flex h-full items-center justify-center overflow-hidden break-all rounded-full bg-primary w-[50%]" />} />
        </section>
    )
}
export default Step2
