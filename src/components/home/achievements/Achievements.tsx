export default function Achievements() {
    const data = [
        {
            title: "600K",
            description: "Creatives boosted their workflows using our products",
        },
        {
            title: "950K",
            description: "Our products have been downloaded by more than 950K developers.",
        },
        {
            title: "4.9/5",
            description: "Average rating for our products given by customers",
        },
    ]
    return (
        <div className=" grid grid-cols-12 gap-5" >
            {
                data.map((item, index) => (
                    <div key={index} className="lg:col-span-4 col-span-12 flex flex-col gap-8 items-start lg:pt-16 pt-14 border-t border-border">
                        <h3 className="text-[40px] font-semibold" >{item.title} <span className="text-[#FCEA4E] font-semibold relative -start-2" >+</span></h3>
                        <p className="text-lg lg:max-w-xs max-w-full">{item.description}</p>
                    </div>
                ))
            }
        </div>
    )
}