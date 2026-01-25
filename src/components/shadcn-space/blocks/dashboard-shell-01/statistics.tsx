import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, CalendarDays, Handbag, LucideIcon } from "lucide-react";
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

type StatItem = {
  title: string;
  value: string;
  percentage: string;
  icon: LucideIcon;
  isPositive?: boolean;
};

type StatisticsBlockProps = {
  mainDashboard?: MainDashboardData;
  secondaryStats?: StatItem[];
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

const secondaryStatsData: StatItem[] = [
  {
    title: "Weekly Sales",
    value: "$4,587",
    percentage: "+18%",
    icon: CalendarDays,
    isPositive: true,
  },
  {
    title: "Purchase Orders",
    value: "230",
    percentage: "+18%",
    icon: Handbag,
    isPositive: true,
  },
];

const StatisticsBlock = ({
  mainDashboard = mainDashboardData,
  secondaryStats = secondaryStatsData,
}: StatisticsBlockProps) => {
  return (
    <div className="grid grid-cols-12 gap-6 h-full">
      <div className="col-span-12 xl:col-span-6 h-full">
        <Card className="p-0 ring-0 border rounded-2xl relative h-full">
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
      {secondaryStats.map((stat, index) => (
        <div
          key={index}
          className="col-span-12 sm:col-span-6 xl:col-span-3"
        >
          <Card className="p-6 ring-0 border rounded-2xl">
            <CardContent className="p-0 flex items-start justify-between">
              <div className="flex flex-col gap-5 justify-between">
                <div className="flex flex-col gap-1">
                  <p className="text-lg font-medium text-card-foreground">
                    {stat.title}
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="text-2xl font-medium text-card-foreground">
                      {stat.value}
                    </p>
                    <Badge
                      className={cn(
                        "font-normal text-muted-foreground",
                        stat.isPositive !== false
                          ? "bg-teal-400/10"
                          : "bg-red-500/10"
                      )}
                    >
                      {stat.percentage}
                    </Badge>
                  </div>
                </div>
                {/* button */}
                <Button
                  variant={"outline"}
                  className={"flex items-center gap-1.5 w-fit rounded-xl"}
                >
                  <span>See Report</span>
                  <ArrowRight size={16} />
                </Button>
              </div>
              <div className="p-3 rounded-full outline">
                <stat.icon size={16} />
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default StatisticsBlock;
