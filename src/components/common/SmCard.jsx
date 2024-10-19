const SmCard = () => {
    return (
        <div
            className="py-[15px] px-[10px] w-full bg-[#F4F4F5] rounded-[10px] mb-[15px] hover:scale-105 transition-all duration-200">
            <div className="flex justify-start items-center">
                <img src={"../../src/assets/location/smCard.png"} alt="building" />
                <div className="ml-[17px] ">
                    <h2 className="font-bold text-base text-black">Activity name</h2>
                    <p className="text-sm text-[#A1A1AA] my-1">Location name <span>.</span> 16.12212, -122.1424</p>
                    <h2 className="font-bold text-base text-black">$1,456,654.00</h2>
                </div>
            </div>
        </div>)
}
export default SmCard
