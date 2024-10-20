import { cards } from "../../lib/data/index.js";

const Cards = () => {
    return (
        <div className="container mx-auto max-w-[1300px] pt-10">
            <div className="flex flex-wrap justify-center xl:justify-start items-center gap-8 md:gap-4 ">
                {
                    cards.map(({ image, title, des, price }, i) => (
                        <div key={i} className="max-w-[306px] hover:scale-105 transition-all">
                            <div className="max-h-[253px] relative">
                                <img src={image} alt="card image"
                                    className="w-full h-full object-cover" />
                                <div
                                    className="absolute top-3 right-3 flex items-center justify-center gap-2 font-bold text-xs text-[#18181B] bg-white p-2.5 rounded-[40px]">
                                    <img src={"/assets/dashboard/rain.png"} alt="" />
                                    Blizzard
                                </div>
                            </div>
                            <div className="pt-4 pl-1">
                                <h2 className="font-bold text-base md:leading-[30px] text-black">{title}</h2>
                                <p className="text-sm text-body">{des}</p>
                                <h2 className="font-bold text-base md:leading-[30px] text-black">{price}</h2>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Cards
