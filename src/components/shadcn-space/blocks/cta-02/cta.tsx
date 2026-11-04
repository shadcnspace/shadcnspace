import { Marquee } from "@/components/shadcn-space/animations/marquee";
import { Separator } from "@/components/ui/separator";

interface CTAProps {
    marqueeItems?: string[];
}

const defaultMarqueeItems = [
    "Find your dream home with our expert real estate agents!",
    "Browse thousands of listings in prime locations at great prices!",
    "Get a free property valuation—sell your home with confidence!",
    "Secure the best mortgage rates with our trusted loan partners!",
];

const CTA: React.FC<CTAProps> = ({ marqueeItems = defaultMarqueeItems }) => {
    return (
        <section>
            <div className='max-w-7xl mx-auto sm:px-16 px-4 sm:py-20 py-8'>
                <div className="relative rounded-t-2xl overflow-hidden min-h-96 bg-black/30 flex items-center justify-center">
                    <video
                        className="absolute top-0 left-0 -z-10 max-w-fit w-7xl"
                        autoPlay
                        loop
                        muted
                        aria-label="Video background showing luxurious real estate"
                    >
                        <source src="https://videos.pexels.com/video-files/7233782/7233782-hd_1920_1080_25fps.mp4" type="video/mp4" />
                    </video>

                    <div className="h-full w-full py-16 px-10">
                        <div className="flex flex-col items-center gap-8">
                            <h2 className='text-white sm:text-4xl text-3xl max-w-2xl text-center font-medium'>
                                Enter a realm where exquisite design and timeless luxury come together.
                            </h2>
                            <a href="#" className='bg-white dark:bg-black py-3.5 px-6 rounded-full text-primary hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black duration-300 font-medium text-sm'>
                                Get In Touch
                            </a>
                        </div>
                    </div>
                </div>
                <div className="w-full py-4 bg-teal-400 rounded-b-2xl overflow-hidden border-t border-black/5">
                    <Marquee className="[--duration:40s] [--gap:1.25rem] p-0" pauseOnHover>
                        {marqueeItems.map((item, index) => (
                            <div key={index} className="flex items-center gap-6">
                                <p className='text-gray-950 whitespace-nowrap text-sm'>
                                    {item}
                                </p>
                                <Separator className="w-8! bg-gray-950" />
                            </div>
                        ))}
                    </Marquee>
                </div>

            </div>
        </section>
    );
};

export default CTA;
