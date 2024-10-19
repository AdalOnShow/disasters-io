import { incidentsStarted } from "../../lib/data/index.js";
import { NavLink } from "react-router-dom";

const NewIncident = () => {
    return (
        <div>
            <div className="bg-secondary/50 h-4"></div>
            <div className="container mx-auto mt-8 sm:mt-11 md:mt-16 lg:mt-24 lg:max-w-[815px] flex flex-col items-center justify-center gap-[33px]">
                <div className="text-center px-12 sm:px-16 md:px-20 lg:px-[120px]">
                    <h1 className="font-bold text-lg sm:text-xl md:text-[25px] lg:text-[32px] leading-[40px] text-black mb-2 md:mb-4">Let’s get started</h1>
                    <p className="text-body text-xs sm:text-sm lg:text-base max-w-[400px] md:max-w-[468px] mx-auto">Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit gene</p>
                </div>
                <div className="max-w-[350px] sm:w-[400px] md:w-[500px] lg:w-[609px] flex justify-center items-center relative">
                    <div className="w-[330px] sm:w-[390px] md:w-[490px] lg:w-[598px] h-[3px] bg-secondary" />
                    <div className="w-full flex justify-between items-center absolute">
                        <div className="size-5 lg:size-[29px] bg-secondary rounded-full" />
                        <div className="size-5 lg:size-[29px] bg-secondary rounded-full" />
                        <div className="size-5 lg:size-[29px] bg-secondary rounded-full" />
                    </div>
                </div>
                <div className="flex flex-wrap justify-center md:justify-between items-center gap-4 sm:gap-8 md:gap-10 lg:gap-[55px]">
                    {
                        incidentsStarted.map(({ img, title, des }, index) => (
                            <div key={index} className="w-40 md:w-52 lg:w-[235px] h-52 md:h-60 lg:h-[270px] bg-[#F4F4F5] rounded-[10px] p-3 md:p-5 hover:bg-secondary transition-colors duration-200">
                                <img src={img} alt="" className="size-8 md:size-10 lg:size-[54px]" />

                                <div className="pt-4 md:pt-8 lg:pt-[68px]">
                                    <h4 className="font-bold text-lg
                                    lg:text-[20px] text-black">{title}</h4>
                                    <p className="text-xs sm:text-sm text-body pt-3 md:pt-5">{des}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <NavLink to={"/incidents/new-incident/step-1"}>
                <div className="flex justify-center pt-8 sm:pt-16 md:pt-20 lg:pt-[102px]">
                    <button className="bg-primary text-white py-2.5 md:py-3 px-[20px] md:px-[30px] rounded-[6px] font-bold text-[8px] md:text-[12px] flex justify-center items-center gap-2 hover:bg-primary/80 transition-colors">Get started</button>
                </div>
            </NavLink>

        </div>
    )
}
export default NewIncident
