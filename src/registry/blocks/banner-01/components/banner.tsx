import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Icon } from "@iconify/react";


export default function banner() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <Card className="p-7 bg-indigo-500 dark:bg-indigo-500 pb-0 max-w-[500px] mx-auto my-auto">
                <div className="grid grid-cols-12">
                    <div className="md:col-span-7 col-span-12">
                        <div className="flex gap-4 items-center">
                            <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center shrink-0 ">
                                <Icon
                                    icon="solar:course-up-outline"
                                    className="text-neutral-600"
                                    height={24}
                                />
                            </div>
                            <h5 className="text-xl text-white">Welcome Back David</h5>
                        </div>

                        <div className="flex  w-full xl:mt-12 sm:mt-12 lg:mt-6 mt-6">
                            <div className="border-e border-white/20 pe-4">
                                <p className="text-white opacity-75 text-sm mb-1">Budget</p>
                                <h2 className="text-white text-2xl">$98,450</h2>
                            </div>
                            <div className="ps-4">
                                <p className="text-white opacity-75 text-sm mb-1">Budget</p>
                                <h2 className="text-white text-2xl">$2,440</h2>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-5 col-span-12 md:ms-auto ms-auto me-auto">
                        <Image
                            src={"https://matdash-nextjs-main.vercel.app/images/backgrounds/welcome-bg.png"}
                            alt="background"
                            className="-mb-n5 rtl:scale-x-[-1] xl:max-w-[170px] lg:max-w-36 md:max-w-36 max-w-32 lg:ps-4 md:pt-0 pt-6"
                            width={1024}
                            height={195}
                        />
                    </div>
                </div>
            </Card>
        </div>
    );
}
