import { ChevronLeft, ChevronRight, CircleUserRound, DotIcon, HomeIcon, Settings } from 'lucide-react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'

const BreadcrumbOutlineDemo = () => {
    return (
        <Breadcrumb>
            <BreadcrumbList className='h-8 gap-2 rounded-lg border px-3 text-sm'>
                <div className='bg-muted flex items-center rounded-full px-1.5 py-0.5 mr-1'>
                    <a href='#'><ChevronLeft size={16} className='text-foreground cursor-pointer'/></a>
                    <a href='#'><ChevronRight size={16} className='text-foreground/60'/></a>
                </div>
                <BreadcrumbItem>
                    <BreadcrumbLink href='#'>
                        <img src={"https://images.shadcnspace.com/assets/logo/theme-logo.svg"} width={20} height={20} />
                        <span className='sr-only'>Home</span>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                    <DotIcon className='size-4' />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                    <BreadcrumbLink href='#' className='flex items-center gap-2'>
                        <Settings className='size-4' />
                        Settings
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                    <DotIcon className='size-4' />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                    <BreadcrumbPage className='flex items-center gap-2'>
                        <CircleUserRound className='inline size-4' />
                        Account
                    </BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}

export default BreadcrumbOutlineDemo
