

const TopBlockInfo = ({ title, isPro = false }: { title: string, isPro?: boolean, }) => {

    return (
        <div className="grid grid-cols-1 gap-4">
            <div className="flex flex-col gap-3">
                <div className="flex items-center ">
                    <h3 className="text-2xl! font-semibold tracking-tight">
                        {title}
                    </h3>
                    <span className="size-1 rounded-full bg-gray-300 dark:bg-white/30 mx-3"></span>
                    <div className="flex items-center gap-2">
                        {!isPro && <span className="py-0.5 px-2.5 rounded-md text-gray-500 bg-gray-200 dark:bg-white/20 dark:text-white/50 text-sm font-medium">Free</span>}
                    </div>
                </div>
                <p>
                    {title} components are a collection of Shadon UI components that are designed to help you create stunning and user-friendly marketing websites.
                </p>
            </div>
        </div>
    );
};

export default TopBlockInfo;
