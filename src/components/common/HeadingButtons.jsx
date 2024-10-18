import { Button2 } from "./Buttons.jsx";

// eslint-disable-next-line react/prop-types
const HeadingButtons = ({ children }) => {
    return (
        <div className="flex items-center justify-center gap-2">
            <div className="relative rounded-[6px] bg-[#FAFAFA]">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <img src={"../src/assets/search.svg"} alt="search" width={18} height={18} />
                </div>
                <input
                    type="text"
                    placeholder="Search incident"
                    className="w-36 md:w-[190px] rounded-md border-0 py-[13px] md:py-[11.8px] pl-8 text-body ring-1 ring-secondary placeholder:text-body focus:ring-2 focus:ring-primary text-xs md:text-sm md:leading-6"
                />
            </div>
            <Button2>Sort By: Date modified</Button2>
            {children}
        </div>
    )
}
export default HeadingButtons
