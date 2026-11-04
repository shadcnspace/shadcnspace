"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const BAR_COUNT = 20

type AudioState = "connecting" | "listening" | "speaking"

const AudioFrqCard = () => {
    const [bars, setBars] = useState<number[]>(Array(BAR_COUNT).fill(20))
    const [state, setState] = useState<AudioState>("speaking")

    useEffect(() => {
        const interval = setInterval(() => {
            setBars((prev) =>
                prev.map(() => {
                    let min = 5
                    let max = 20

                    if (state === "listening") {
                        min = 20
                        max = 60
                    }

                    if (state === "speaking") {
                        min = 40
                        max = 90
                    }

                    return Math.random() * (max - min) + min
                })
            )
        }, 150)

        return () => clearInterval(interval)
    }, [state])

    return (
        <div className="max-w-sm mx-auto px-4 w-full">
            <Card>
                <CardHeader>
                    <CardTitle>Audio Frequency Visualizer</CardTitle>
                    <CardDescription>
                        Real-time frequency band visualization with animated state
                        transitions
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <div
                        data-state={state}
                        className="relative flex justify-center gap-1.5 items-end w-full overflow-hidden rounded-lg bg-muted p-4 h-40 max-w-full"
                    >
                        {bars.map((height, i) => {
                            const highlighted = state === "speaking"

                            return (
                                <div
                                    key={i}
                                    data-highlighted={highlighted}
                                    className={`max-w-3 min-w-2 flex-1 transition-all duration-150 rounded-full ${highlighted
                                        ? "bg-chart-3"
                                        : "bg-border dark:bg-gray-200/20"
                                        }`}
                                    style={{ height: `${height}%` }}
                                />
                            )
                        })}
                    </div>
                </CardContent>

                <CardFooter className="flex items-center gap-2">
                    <Button variant={state === "connecting" ? "default" : "outline"} size="sm" onClick={() => setState("connecting")} className="cursor-pointer">
                        Connecting
                    </Button>

                    <Button variant={state === "listening" ? "default" : "outline"} size="sm" onClick={() => setState("listening")} className="cursor-pointer">
                        Listening
                    </Button>

                    <Button variant={state === "speaking" ? "default" : "outline"} size="sm" onClick={() => setState("speaking")} className="cursor-pointer">
                        Speaking
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default AudioFrqCard