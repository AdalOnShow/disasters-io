// eslint-disable-next-line react/prop-types
const Heading = ({ children, upTitle, title }) => {
    return (
        <section className="bg-secondary/50 py-6 md:py-8 px-2">
            <div className="container mx-auto max-w-[1268px]">
                <div className="flex-row md:flex justify-between items-center">
                    <div className="text-center md:text-left">
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
