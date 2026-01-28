"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
    { month: "Jan", sales: 5, orders: 1 },
    { month: "Feb", sales: 3, orders: 2 },
    { month: "March", sales: 4.5, orders: 4 },
    { month: "Apr", sales: 2, orders: 3.5 },
    { month: "May", sales: 3, orders: 2 },
    { month: "Jun", sales: 1, orders: 4 },
    { month: "Jul", sales: 0, orders: 2 },
    { month: "Aug", sales: 2.5, orders: 3 },
    { month: "Sep", sales: 4, orders: 2.5 },
    { month: "Oct", sales: 6, orders: 4.5 },
    { month: "Nov", sales: 5.5, orders: 5 },
    { month: "Dec", sales: 7, orders: 6 },
];

const chartConfig = {
    sales: {
        label: "Total Sales",
        color: "var(--color-sky-400)",
    },
    orders: {
        label: "Total Orders",
        color: "var(--chart-3)",
    },
} satisfies ChartConfig;

export default function Chart03() {
    return (
        <Card className="w-full max-w-3xl">
            <CardHeader className="flex flex-col items-start gap-5">
                <CardTitle className="text-lg font-medium">Sales Report</CardTitle>
                <div className="flex items-center md:flex-nowrap flex-wrap md:gap-6 gap-3">
                    <div className="flex items-center gap-3">
                        <div className="p-4 rounded-full outline outline-border">
                            <TrendingUp width={16} height={16} />
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-sm text-muted-foreground">Sales this year</p>
                            <div className="flex items-center gap-1">
                                <h5 className="text-2xl font-medium">$563,489</h5>
                                <Badge className="h-auto px-2 py-0.5 bg-teal-400/10 text-muted-foreground">+18%</Badge>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="p-4 rounded-full outline outline-border">
                            <TrendingUp width={16} height={16} />
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-sm text-muted-foreground">Sales last year</p>
                            <h5 className="text-2xl font-medium">$438,928</h5>
                        </div>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-1">
                <div className="h-[253px] w-full">
                    <ChartContainer config={chartConfig} className="h-full w-full">
                        <AreaChart
                            accessibilityLayer
                            data={chartData}
                            margin={{
                                left: -20,
                                right: 12,
                            }}
                        >
                            <CartesianGrid vertical={false} strokeDasharray="3 3" />
                            <XAxis
                                dataKey="month"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                                tickFormatter={(value) => value.slice(0, 3)}
                            />
                            <YAxis
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                                tickCount={6}
                                tickFormatter={(value) => `${value}k`}
                            />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent indicator="dot" />}
                            />
                            <defs>
                                <linearGradient id="fillSales" x1="0" y1="0" x2="0" y2="1">
                                    <stop
                                        offset="5%"
                                        stopColor="var(--color-sales)"
                                        stopOpacity={0.3}
                                    />
                                    <stop
                                        offset="95%"
                                        stopColor="var(--color-sales)"
                                        stopOpacity={0.1}
                                    />
                                </linearGradient>
                                <linearGradient id="fillOrders" x1="0" y1="0" x2="0" y2="1">
                                    <stop
                                        offset="5%"
                                        stopColor="var(--color-orders)"
                                        stopOpacity={0.3}
                                    />
                                    <stop
                                        offset="95%"
                                        stopColor="var(--color-orders)"
                                        stopOpacity={0.1}
                                    />
                                </linearGradient>
                            </defs>
                            <Area
                                dataKey="orders"
                                type="monotone"
                                fill="url(#fillOrders)"
                                fillOpacity={0.4}
                                stroke="var(--color-orders)"
                            />
                            <Area
                                dataKey="sales"
                                type="monotone"
                                fill="url(#fillSales)"
                                fillOpacity={0.4}
                                stroke="var(--color-sales)"
                            />
                        </AreaChart>
                    </ChartContainer>
                </div>
            </CardContent>
        </Card>
    );
}
