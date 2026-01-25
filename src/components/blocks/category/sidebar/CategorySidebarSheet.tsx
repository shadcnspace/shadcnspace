import { Sheet, SheetContent } from "@/components/ui/sheet";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useWebContext } from "@/providers/website-provider";
import { AppSidebar } from "./app-sidebar";

export function CategorySidebarSheet() {
  const { isBlockSidebarOpen, setIsBlockSidebarOpen } = useWebContext();
  return (
    <Sheet open={isBlockSidebarOpen} onOpenChange={setIsBlockSidebarOpen}>
      <SheetContent side="left" className="lg:w-fit max-w-[300px]!">
        <SidebarProvider>
          <AppSidebar />
        </SidebarProvider>
      </SheetContent>
    </Sheet>
  );
}
