import Header from "@/components/shadcn-space/blocks/topbar-03/header";

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* MAIN CONTENT */}
      <main className="mx-auto max-w-7xl p-4 md:p-6">
        <div className="h-[500px] rounded-xl border border-border overflow-hidden">
          <div className="flex flex-1 flex-col gap-4 p-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="skeleton bg-muted/50 aspect-video h-12 w-full rounded-lg"
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}