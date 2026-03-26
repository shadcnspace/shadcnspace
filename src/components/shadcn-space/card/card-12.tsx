"use client"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

const data = [
  { day: "M", value: 84 },
  { day: "T", value: 52 },
  { day: "W", value: 73 },
  { day: "T", value: 66 },
  { day: "F", value: 91 },
  { day: "S", value: 48 },
  { day: "S", value: 61 },
]

const WeeklyCard = () => {
    return (
        <div className="max-w-sm mx-auto px-4 w-full">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle>Weekly Fitness Summary</CardTitle>
                    <CardDescription>
                        Calories and workout load by day
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <div className="grid grid-cols-7 gap-1.5">
                        {data.map((item, index) => (
                            <div
                                key={index}
                                className="rounded-md p-1.5 text-center ring-1 ring-border"
                            >
                                <div className="text-sm text-muted-foreground">
                                    {item.day}
                                </div>

                                <div className="relative mt-1 h-16 overflow-hidden rounded-sm bg-muted">
                                    <div
                                        className="absolute inset-x-0 bottom-0 rounded-sm bg-chart-3"
                                        style={{ height: `${item.value}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default WeeklyCard