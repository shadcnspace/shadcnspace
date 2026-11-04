import AppSidebar from "@/components/shadcn-space/blocks/dashboard-shell-01/app-sidebar"
import StatisticsBlock from "@/components/shadcn-space/blocks/dashboard-shell-01/statistics"
import SalesOverviewChart from "@/components/shadcn-space/blocks/dashboard-shell-01/sales-overview-chart"
import EarningReportChart from "@/components/shadcn-space/blocks/dashboard-shell-01/earning-report-chart"
import TopProductTable from "@/components/shadcn-space/blocks/dashboard-shell-01/top-product-table"
import SalesByCountryWidget from "@/components/shadcn-space/blocks/dashboard-shell-01/salesbycountrywidget"
export default function Page() {
    return (
        <AppSidebar>
            <div className="grid grid-cols-12 gap-6 p-6 max-w-7xl mx-auto">
                <div className="col-span-12">
                    <StatisticsBlock />
                </div>
                <div className="xl:col-span-8 col-span-12">
                    <SalesOverviewChart />
                </div>
                <div className="xl:col-span-4 col-span-12">
                    <EarningReportChart />
                </div>
                <div className="xl:col-span-8 col-span-12">
                    <TopProductTable />
                </div>
                <div className="xl:col-span-4 col-span-12">
                    <SalesByCountryWidget />
                </div>
            </div>
        </AppSidebar>
    )
}