"use client";

import PixelSnow from "@/components/shadcn-space/animations/PixelSnow";
import { BackgroundBeamsWithCollision } from "@/components/shadcn-space/animations/BackgroundBeamsWithCollision";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { CloudRain, Snowflake } from "lucide-react";

const TabsDemo = () => {
  return (
    <Tabs defaultValue="winter" className="w-full max-w-2xl">
      <TabsList className="h-auto! rounded-xl p-0.5">
        <TabsTrigger
          value="winter"
          className="rounded-lg px-5 py-2 cursor-pointer text-foreground dark:data-active:bg-background"
        >
          Winter
        </TabsTrigger>
        <TabsTrigger
          value="monsoon"
          className="rounded-lg px-5 py-2 cursor-pointer text-foreground dark:data-active:bg-background"
        >
          Monsoon
        </TabsTrigger>
      </TabsList>

      <TabsContent value="winter">
        <Card className="relative min-h-90 w-full overflow-hidden rounded-2xl border-none bg-linear-to-b from-slate-950 via-slate-900 to-slate-800 sm:min-h-105">
          <div className="absolute inset-0">
            <PixelSnow
              color="#ffffff"
              flakeSize={0.02}
              minFlakeSize={1.25}
              pixelResolution={500}
              speed={0.5}
              density={0.3}
              direction={95}
              brightness={1}
              depthFade={20}
              farPlane={20}
              gamma={0.4545}
              variant="round"
            />
          </div>
          <CardContent className="relative z-10 flex h-full flex-col items-center justify-center gap-3 p-8 text-center">
            <Snowflake className="size-8 text-white/90" />
            <h3 className="text-2xl font-semibold text-white">Winter</h3>
            <p className="max-w-sm text-sm text-white/70">
              Soft pixel snowfall drifting across a cold winter sky.
            </p>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="monsoon">
        <Card className="relative min-h-90 w-full overflow-hidden rounded-2xl border-none bg-linear-to-b from-slate-950 via-cyan-950 to-slate-900 p-0 sm:min-h-105">
          <BackgroundBeamsWithCollision
            className="h-90 sm:h-105"
            beamCount={14}
            colors={["#22d3ee", "#38bdf8", "#a5f3fc"]}
            speed={1.4}
          >
            <CardContent className="relative z-10 flex h-full flex-col items-center justify-center gap-3 p-8 text-center">
              <CloudRain className="size-8 text-white/90" />
              <h3 className="text-2xl font-semibold text-white">Monsoon</h3>
              <p className="max-w-sm text-sm text-white/70">
                Streaks of rain fall and burst into light where they land.
              </p>
            </CardContent>
          </BackgroundBeamsWithCollision>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default TabsDemo;
