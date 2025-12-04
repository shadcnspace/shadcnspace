import Footer from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { roadmap, statuses } from "@/description/roadmap";
import { constructMetadata } from "@/lib/metadata";
import { absoluteUrl, cn, groupBy } from "@/lib/utils";
import { format } from "date-fns/format";
import { Metadata } from "next";
import React from "react";

export interface Task {
  title: string;
  description: string;
  status: "upcoming" | "inProgress" | "completed";
  expectedCompletionDate: string;
  completionDate: string;
}

export const metadata: Metadata = constructMetadata({
  title: "Shadcn Space Roadmap",
  description:
    "Shadcn Space Roadmap is a comprehensive plan outlining the development and release of Shadcn Space.",
  alternates: {
    canonical: absoluteUrl("/roadmap"),
  },
});

const RoadmapPage = () => {
  const groupedRoadmap = groupBy(roadmap, "status");

  return (
    <>
      <div>
        <Navbar />

        <div className="max-w-(--breakpoint-xl) mx-auto pb-16 px-6 xl:px-0">
          {/* <h1 className="text-4xl md:text-5xl font-bold text-center">
            Shadcn Space Roadmap
          </h1> */}

          <div className="mt-8 md:mt-12 grid lg:grid-cols-3 gap-x-6 gap-y-12">
            {statuses.map((status) => (
              <div key={status.name} className="space-y-6">
                <div className="flex items-center gap-3 bg-muted py-3 px-4 rounded-lg text-xl font-black tracking-tight">
                  <status.icon
                    className={cn({
                      "text-blue-600": status.name === "upcoming",
                      "text-yellow-600": status.name === "inProgress",
                      "text-green-600": status.name === "completed",
                    })}
                  />
                  {status.label}
                  <span className="ml-auto text-muted-foreground text-sm">
                    {groupedRoadmap[status.name]?.length}
                  </span>
                </div>
                <TaskList tasks={groupedRoadmap[status.name]} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

const TaskList = ({ tasks }: { tasks: Task[] }) => {
  if (!tasks)
    return (
      <p className="text-center text-muted-foreground font-medium">
        No tasks yet. Stay tuned!
      </p>
    );

  return (
    <ScrollArea className="lg:h-[600px]">
      <div className="space-y-6">
        {tasks?.map((task, index) => (
          <RoadmapCard key={index} {...task} />
        ))}
      </div>
    </ScrollArea>
  );
};

const RoadmapCard = ({
  title,
  description,
  status,
  children,
  completionDate,
  expectedCompletionDate,
}: {
  children?: React.ReactNode;
} & Task) => (
  <Card>
    <CardContent className="p-4">
      <h2 className="text-xl leading-snug font-black tracking-tight">
        {title}
      </h2>
      <p className="mt-2 text-[15px] text-muted-foreground">{description}</p>
      {status === "completed" ? (
        <div className="mt-4 text-sm">
          <b>Completed on:</b>{" "}
          <span className="text-muted-foreground">
            {format(completionDate, "MMM dd, yyyy")}
          </span>
        </div>
      ) : (
        <div className="mt-4 text-sm">
          <b>Expected Completion:</b>{" "}
          <span className="text-muted-foreground">
            {format(expectedCompletionDate, "MMM dd, yyyy")}
          </span>
        </div>
      )}
      {children}
    </CardContent>
  </Card>
);

export default RoadmapPage;
