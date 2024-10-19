// eslint-disable-next-line react/prop-types
export const Button1 = ({ element, icon, onClick }) => {
    return (
        <button onClick={onClick} className="bg-primary text-white py-3.5 md:py-4 px-[14px] md:px-[25px] rounded-[6px] font-bold text-[8px] md:text-[12px] flex justify-center items-center gap-2 hover:bg-primary/80 transition-colors">
            {icon ? <img src={"/assets/Plus.svg"} alt="icon" /> : ""}
            {element}
        </button>
    )
}
// eslint-disable-next-line react/prop-types
export const Button2 = ({ children, onClick }) => {
    return (
        <button onClick={onClick} className="bg-[#FAFAFA] text-body py-3.5 md:py-4 px-[5px] md:px-[12px] rounded-[6px] border border-[#E4E4E7] text-[8px] md:text-[12px] hover:bg-gray-200 transition-colors">
            {children}
        </button>
    )
}
