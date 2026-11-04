import { SSidebar } from "@/components/custom-components/ss-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="container mx-auto relative z-1 [&_[data-slot=sidebar]]:max-w-72 [&_[data-slot=sidebar]]:w-full">
        <SidebarProvider className="relative min-h-[calc(100svh-76px)]!">
          <SSidebar showFileCount={true} />
          <div className="w-full">
            <div className="w-full p-10 sm:px-10 px-0">{children}</div>
          </div>
        </SidebarProvider>
      </main>
    </>
  );
}