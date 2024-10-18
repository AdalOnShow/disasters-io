import IncidentsHeading from "./IncidentsHeading.jsx";

const Step2 = () => {
    return (
        <section>
            <IncidentsHeading firstBtnLink="/incidents/new-incident/step-1" lastBtnLink="/incidents/new-incident/step-3" lastBtnName="Next step" steepBar={
                <div
                    className="flex h-full items-center justify-center overflow-hidden break-all rounded-full bg-primary w-[50%]" />} />

            <div className="container mx-auto max-w-[752px] pt-10 px-4">
                <div>
                    <h1 className="font-bold text-xl md:text-2xl text-black pb-3">Let’s give the incident a title?</h1>
                    <p className="text-xs md:text-sm text-body pb-6">Make a title that will easily identify the incidents</p>
                    <input type="text" placeholder="Add title here" className="h-[50px] bg-[#F4F4F5] w-full pl-2.5 rounded-md border border-secondary focus:outline-none placeholder:text-xs" />
                </div>
                <div className="pt-6">
                    <h1 className="font-bold text-xl md:text-2xl text-black pb-3">Describe what happened during the incident?</h1>
                    <p className="text-xs md:text-sm text-body pb-6">Share some information about the incident. The when, where, how. </p>
                    <textarea placeholder="Type here" className="h-[127px] bg-[#F4F4F5] px-2.5 py-5 w-full pl-2.5 rounded-md border border-secondary focus:outline-none placeholder:text-xs"></textarea>
                </div>
            </div>
        </section>
    )
}
export default Step2
