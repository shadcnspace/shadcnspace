"use client";
import { Card } from "@/components/ui/card";
import { Icon } from "@iconify/react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
const ChartData: any = {
    series: [
        {
            name: "2023",
            data: [50, 60, 30, 55, 75, 60, 100, 120],
        },

        {
            name: "2022",
            data: [35, 45, 40, 50, 35, 55, 40, 45],
        },
        {
            name: "2024",
            data: [100, 75, 80, 40, 20, 40, 0, 25],
        },
    ],
    chart: {
        toolbar: {
            show: false,
        },
        type: "area",
        height: 310,
        fontFamily: "inherit",
        foreColor: "#adb0bb",
        width: "100%",
        stacked: false,
        offsetX: -10,
    },
    colors: ["var(--color-error)", "var(--color-secondary)", "var(--color-primary)"],
    plotOptions: {},
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: false,
    },
    stroke: {
        width: 2,
        curve: "monotoneCubic",
    },
    grid: {
        show: true,
        padding: {
            top: 0,
            bottom: 0,
        },
        borderColor: "rgba(0,0,0,0.05)",
        xaxis: {
            lines: {
                show: true,
            },
        },
        yaxis: {
            lines: {
                show: true,
            },
        },
    },
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 0,
            inverseColors: false,
            opacityFrom: 0.05,
            opacityTo: 0.01,
            stops: [100],
        },
    },
    xaxis: {
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug"],
    },
    markers: {
        strokeColor: [
            "var(--color-error)",
            "var(--color-secondary)",
            "var(--color-primary)",
        ],
        strokeWidth: 2,
    },
    tooltip: {
        theme: "dark",
    },
};
const Statistics = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center">
                <Card className="p-7 pb-0 max-w-[650px] w-full">
                    <div className="md:flex justify-between items-center">
                        <div className="flex gap-4 items-center">
                            <span className="h-12 w-12 shrink-0 flex items-center justify-center bg-lightprimary rounded-tw">
                                <Icon
                                    icon="solar:layers-linear"
                                    className="text-primary"
                                    height={24}
                                />
                            </span>
                            <div>
                                <h5 className="card-title">Revenue Forecast</h5>
                                <p className="text-sm">Overview of Profit</p>
                            </div>
                        </div>
                        <div className="flex gap-5 items-center md:mt-0 mt-4">
                            <div className="flex gap-2 text-sm   items-center">
                                <span className="bg-primary rounded-full h-2 w-2"></span>
                                <span className="text-gray-500 ">2024</span>
                            </div>
                            <div className="flex gap-2 text-sm text-ld items-center">
                                <span className="bg-error rounded-full h-2 w-2"></span>
                                <span className="text-gray-500 ">2023</span>
                            </div>
                            <div className="flex gap-2 text-sm text-ld items-center">
                                <span className="bg-secondary rounded-full h-2 w-2"></span>
                                <span className="text-gray-500 ">2022</span>
                            </div>
                        </div>
                    </div>
                    <div className="mt-2 -me-7 rtl:-me-7 rtl:-ms-7">
                        <Chart
                            options={ChartData}
                            series={ChartData.series}
                            type="area"
                            height="310px"
                            width="100%"
                        />
                    </div>
                </Card>
            </div>
        </>
    );
};

export default Statistics;
