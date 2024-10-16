const Heading = ({ children, upTitle, title }) => {
    return (
        <section className="bg-secondary/50 py-6 md:py-10 px-2">
            <div className="container mx-auto max-w-[1268px]">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="text-[10px] md:text-xs text-body">{upTitle}</p>
                        <h1 className="font-bold text-xl md:text-[26px] text-black leading-[33px]">{title}</h1>
                    </div>
                    <div>
                        {children}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Heading
