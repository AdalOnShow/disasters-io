import { incidentsStarted } from "../../lib/data/index.js";

const NewIncident = () => {
    return (
        <div className="">
            <div className="bg-secondary/50 h-4"></div>
            <div className="container mx-auto mt-24 max-w-[815px] flex flex-col items-center justify-center gap-[33px]">
                <div className="text-center px-[120px]">
                    <h1 className="font-bold text-[32px] leading-[40px] text-black mb-4">Let’s get started</h1>
                    <p className="text-body text-base max-w-[468px] mx-auto">Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit gene</p>
                </div>
                <div className="w-[609px] flex justify-center items-center relative">
                    <div className="w-[598px] h-[3px] bg-secondary" />
                    <div className="w-full flex justify-between items-center absolute">
                        <div className="size-[29px] bg-secondary rounded-full" />
                        <div className="size-[29px] bg-secondary rounded-full" />
                        <div className="size-[29px] bg-secondary rounded-full" />
                    </div>
                </div>
                <div className="flex justify-between items-center gap-[55px]">
                    {
                        // eslint-disable-next-line no-unused-vars
                        incidentsStarted.map(({ img, title, des }, index) => (
                            <div key={index} className="w-[235px] h-[270px] bg-[#F4F4F5] rounded-[10px] p-5 hover:bg-secondary transition-colors duration-200">
                                <img src={img} alt="" className="size-[54px]" />

                                <div className="pt-[68px]">
                                    <h4 className="font-bold text-[20px] text-black">{title}</h4>
                                    <p className="text-sm text-body pt-5">{des}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="flex justify-center pt-[102px]">
                <button className="bg-primary text-white py-2.5 md:py-3 px-[20px] md:px-[30px] rounded-[6px] font-bold text-[8px] md:text-[12px] flex justify-center items-center gap-2 hover:bg-primary/80 transition-colors">Get started</button>
            </div>

        </div>
    )
}
export default NewIncident
