import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

type DashboardMetric = {
    label: string;
    value: string;
    percentage: string;
    isPositive?: boolean;
};

type MainDashboardData = {
    title: string;
    description: string;
    metrics: DashboardMetric[];
};

type WidgetProps = {
    mainDashboard?: MainDashboardData;
};

const mainDashboardData: MainDashboardData = {
    title: "Analytics Dashboard",
    description: "Check all the statistics",
    metrics: [
        {
            label: "Earnings",
            value: "$27,850",
            percentage: "+18%",
            isPositive: true,
        },
        {
            label: "Expense",
            value: "$18,453",
            percentage: "-5%",
            isPositive: false,
        },
    ],
};

const AnalyticsCard = ({
    mainDashboard = mainDashboardData,
}: WidgetProps) => {
    return (
        <div className="flex items-center justify-center w-full">
            <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16 py-10 w-full">
                <Card className="p-0 ring-0 border rounded-2xl relative h-full max-w-xl w-full mx-auto">
                    <CardContent className="p-0">
                        <div className="ps-6 py-4 flex flex-col gap-9 justify-between">
                            <div>
                                <p className="text-lg font-medium text-card-foreground">
                                    {mainDashboard.title}
                                </p>
                                <p className="text-xs font-normal text-muted-foreground">
                                    {mainDashboard.description}
                                </p>
                            </div>
                            <div className="flex items-center gap-6">
                                {mainDashboard.metrics.map((metric, index) => (
                                    <div key={index} className="flex items-center gap-6">
                                        <div>
                                            <p className="text-xs font-normal text-muted-foreground">
                                                {metric.label}
                                            </p>
                                            <div className="flex items-center gap-1">
                                                <p className="text-2xl font-medium text-card-foreground">
                                                    {metric.value}
                                                </p>
                                                <Badge
                                                    className={cn(
                                                        "font-normal text-muted-foreground",
                                                        metric.isPositive
                                                            ? "bg-teal-400/10 "
                                                            : "bg-red-500/10"
                                                    )}
                                                >
                                                    {metric.percentage}
                                                </Badge>
                                            </div>
                                        </div>
                                        {index < mainDashboard.metrics.length - 1 && (
                                            <Separator
                                                orientation="vertical"
                                                className={"h-12"}
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* image */}
                        <img
                            src="https://images.shadcnspace.com/assets/backgrounds/stats-01.webp"
                            alt="user-img"
                            width={211}
                            height={168}
                            className="absolute bottom-0 right-0 hidden sm:block"
                        />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default AnalyticsCard;
