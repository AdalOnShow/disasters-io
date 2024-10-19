const ChatBox = () => {
    return (
        <div className="z-50">
            <div className="fixed bottom-[150px] right-4 w-[280px] sm:w-[331px]">
                <div className="bg-[#F4F4F5] rounded-xl max-w-[331px] w-full">
                    <div className="p-2 sm:p-6 bg-primary text-white rounded-t-xl">
                        <p className="font-bold text-lg">Chat with Cypher</p>
                    </div>
                    <div className="h-[290px] sm:h-[320px] overflow-y-auto p-2 sm:p-4">
                        <div className="mb-4 ml-16 inline-block">
                            <p className="bg-[#3F3F46] text-white text-xs leading-[19px] rounded-[7px] py-2 px-4">Lorem
                                ipsum dolar sit general sac mascho werho</p>
                        </div>
                        <div className="mb-4 mr-16 inline-block">
                            <p className="bg-[#F4F4F5] text-body text-xs leading-[19px] rounded-[7px] py-2 px-4 border  border-[#E4E4E7]">Lorem
                                ipsum dolar sit general sac mascho werho</p>
                        </div>
                        <div className="mb-4 mr-16 inline-block">
                            <p className="bg-[#F4F4F5] text-body text-xs leading-[19px] rounded-[7px] py-2 px-4 border  border-[#E4E4E7]">Lorem
                                ipsum dolar sit general sac mascho werho</p>
                        </div>
                        <div className="mb-4 ml-16 inline-block">
                            <p className="bg-[#3F3F46] text-white text-xs leading-[19px] rounded-[7px] py-2 px-4">Lorem
                                ipsum dolar sit general sac mascho werho</p>
                        </div>
                    </div>
                    <div className="px-4">
                        <input
                            type="text"
                            placeholder="Enter your question..."
                            className="w-full rounded-md border border-[#E5E7EB] p-3 placeholder:text-body text-xs focus:outline-primary"
                        />
                        <div className="flex justify-between items-center py-2">
                            <div className="flex items-center justify-center cursor-pointer">
                                <img src={"/assets/dashboard/camera.svg"} alt="" />
                                <img src={"/assets/dashboard/photo.svg"} alt="" />
                                <img src={"/assets/dashboard/more.svg"} alt="" />
                            </div>
                            <button className="bg-primary text-white px-4 py-2 rounded-[15.5px] text-xs">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ChatBox
