"use client";

import * as React from "react"
import { Label, Pie, PieChart } from "recharts"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { cn } from "@/lib/utils";

const chartData = [
    { browser: "Website", visitors: 60, fill: "var(--color-blue-500)" },
    { browser: "Marketplace", visitors: 20, fill: "var(--color-sky-400)" },
    { browser: "Affiliate", visitors: 20, fill: "rgba(56, 189, 248, 0.5)" },
]

const chartConfig = {
    visitors: {
        label: "Visitors",
    },
    Website: {
        label: "Website",
        color: "var(--color-blue-500)",
    },
    Marketplace: {
        label: "Marketplace",
        color: "var(--color-sky-400)",
    },
    Affiliate: {
        label: "Affiliate",
        color: "var(--color-blue-500)",
    },
} satisfies ChartConfig

export default function Chart02() {
    const totalVisitors = React.useMemo(() => {
        return chartData.reduce((acc, curr) => acc + curr.visitors, 0)
    }, [])

    const CustomerSegmentation = [
        {
            id: 1,
            customer: "Website ",
            tagColor: "muted-foreground",
            borderColor: "bg-blue-500",
            badgeColor: "bg-teal-400/10",
            earning: 18356,
            growthPercentage: "+4.7%",
        },
        {
            id: 2,
            customer: "Marketplace",
            tagColor: "muted-foreground",
            borderColor: "bg-sky-400",
            badgeColor: "bg-teal-400/10",
            earning: 4590,
            growthPercentage: "+2.1%",
        },
        {
            id: 3,
            customer: "Affiliate",
            tagColor: "muted-foreground",
            borderColor: "bg-sky-400/50",
            badgeColor: "bg-teal-400/10",
            earning: 4385,
            growthPercentage: "-1.7%",
        },
    ];

    return (
        <Card className="h-full max-w-96 w-full">
            <CardHeader>
                <CardTitle>
                    <h4 className="text-lg font-semibold">Earning Reports</h4>
                </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col justify-between gap-2 flex-1">
                <ChartContainer
                    config={chartConfig}
                    className="aspect-square max-h-[250px]"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={chartData}
                            dataKey="visitors"
                            nameKey="browser"
                            innerRadius={65}
                            strokeWidth={50}
                        >
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) - 10}
                                                    className="fill-muted-foreground text-sm"
                                                >
                                                    Total
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 15}
                                                    className="fill-foreground text-xl font-medium"
                                                >
                                                    $27,850
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
                <div className="flex flex-col gap-3">
                    {CustomerSegmentation.map((item) => (
                        <div key={item.id} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className={cn(item.borderColor, "w-1 h-4 rounded-full")}></div>
                                <h6 className={cn("text-sm font-medium leading-tight")}>
                                    {item.customer}
                                </h6>
                            </div>
                            <div className="flex items-center gap-1">
                                <h6 className="text-sm font-medium">${item.earning}</h6>
                                <Badge
                                    className={cn(
                                        item.badgeColor,
                                        `text-${item.tagColor}`,
                                        "shadow-none"
                                    )}
                                >
                                    {item.growthPercentage}
                                </Badge>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}

