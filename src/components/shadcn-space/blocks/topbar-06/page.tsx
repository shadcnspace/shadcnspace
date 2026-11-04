import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";
import Header from "@/components/shadcn-space/blocks/topbar-06/header";

export default function Page() {
  return (
    <div className="flex min-h-dvh w-full">
      <SidebarProvider>
        <Sidebar>
          <div className="flex flex-1 flex-col gap-4 p-4">
            {Array.from({ length: 12 }).map((_, index) => (
              <div
                key={index}
                className="skeleton bg-muted/50 aspect-video h-10 w-full rounded-lg"
              />
            ))}
          </div>
        </Sidebar>
        <div className="flex flex-1 flex-col">
          <Header />
          <main>
            <div className="flex flex-1 flex-col gap-4 p-4">
              {Array.from({ length: 9 }).map((_, index) => (
                <div
                  key={index}
                  className="skeleton bg-muted/50 aspect-video h-11 w-full rounded-lg"
                />
              ))}
            </div>
          </main>

          <footer className="bg-card h-10 border-t">
            <div className="flex flex-1 flex-col gap-4 p-4">
              <div className="skeleton bg-muted/50 aspect-video h-12 w-full rounded-lg" />
            </div>
          </footer>
        </div>
      </SidebarProvider>
    </div>
  );
}
