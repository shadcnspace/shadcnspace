"use client";
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card";
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from "@/components/ui/chart"
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

const chartData = [
    { month: "Jan", expense: 31, profit: 31, earning: 31 },
    { month: "Feb", expense: 83, profit: 83, earning: 83 },
    { month: "Mar", expense: 53, profit: 53, earning: 53 },
    { month: "Apr", expense: 36, profit: 36, earning: 36 },
    { month: "May", expense: 64, profit: 64, earning: 64 },
    { month: "Jun", expense: 47, profit: 47, earning: 47 },
    { month: "Jul", expense: 95, profit: 95, earning: 95 },
    { month: "Aug", expense: 69, profit: 69, earning: 69 },
    { month: "Sep", expense: 29, profit: 29, earning: 29 },
    { month: "Oct", expense: 73, profit: 73, earning: 73 },
    { month: "Nov", expense: 27, profit: 27, earning: 27 },
    { month: "Dec", expense: 53, profit: 53, earning: 53 },
]

const chartConfig = {
    expense: {
        label: "Expense",
        color: "var(--color-blue-500)",
    },
    profit: {
        label: "Profit",
        color: "var(--color-sky-400)",
    },
    earning: {
        label: "Earning",
        color: "rgba(56, 189, 248, 0.5)",
    },
} satisfies ChartConfig

export default function Chart01() {
    const Countries = [
        {
            id: 1,
            title: "Earning",
            color: "bg-sky-400/50",
        },
        {
            id: 2,
            title: "Profit",
            color: "bg-sky-400",
        },
        {
            id: 3,
            title: "Expense",
            color: "bg-blue-500",
        }
    ];

    return (
        <Card className="w-full">
            <CardHeader className="flex sm:flex-row flex-col justify-between sm:items-center items-start gap-3">
                <div className="flex flex-col gap-1">
                    <CardTitle className="text-lg font-medium">Sales Overview</CardTitle>
                    <div className="flex items-center gap-2">
                        <h3 className="text-3xl font-medium text-card-foreground">$386.53K</h3>
                        <Badge
                            className={cn(
                                "bg-teal-400/10 text-muted-foreground shadow-none"
                            )}
                        >
                            +18%
                        </Badge>
                        <span className="text-xs text-muted-foreground">
                            than last year
                        </span>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    {Countries.map((item) => (
                        <div key={item.id} className="flex items-center gap-2">
                            <span className={cn("w-2.5 h-2.5 rounded-full", item.color)} />
                            <p className="text-sm text-muted-foreground">{item.title}</p>
                        </div>
                    ))}
                </div>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="h-[300px] w-full">
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="rgba(144, 164, 174, 0.3)" />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                            fontSize={12}
                        />
                        <YAxis
                            tickLine={false}
                            axisLine={false}
                            tickMargin={10}
                            fontSize={12}
                            tickFormatter={(value) => `${value / 10}k`}
                            domain={[0, 100]}
                            ticks={[0, 50, 100, 150, 200, 250, 300]}
                        />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar
                            dataKey="expense"
                            stackId="a"
                            fill="var(--color-expense)"
                            radius={[0, 0, 4, 4]}
                            barSize={20}
                        />
                        <Bar
                            dataKey="profit"
                            stackId="a"
                            fill="var(--color-profit)"
                            radius={[0, 0, 0, 0]}
                            barSize={20}
                        />
                        <Bar
                            dataKey="earning"
                            stackId="a"
                            fill="var(--color-earning)"
                            radius={[4, 4, 0, 0]}
                            barSize={20}
                        />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}