import { ChevronDownIcon, ChevronsLeft, Command, HomeIcon, TriangleAlert } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Breadcrumb,BreadcrumbItem,BreadcrumbLink,BreadcrumbList,BreadcrumbPage,BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { DropdownMenu,DropdownMenuContent,DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

const BreadcrumbWithDropdownDemo = () => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href='#'>
            <Badge variant='outline' className='text-muted-foreground hover:text-foreground'>
              <HomeIcon className='size-3' />
              Home
            </Badge>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator> / </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href='#'>
            <Badge variant='outline' className='text-muted-foreground hover:text-foreground'>
              Design System
            </Badge>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator> / </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>
            <DropdownMenu>
              <DropdownMenuTrigger className='flex items-center gap-1'>
                Components
                <ChevronDownIcon className='size-4' />
              </DropdownMenuTrigger>
              <DropdownMenuContent align='start'>
                <DropdownMenuItem className="cursor-pointer"><TriangleAlert size={16}/>Alert</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer"><Command size={16}/>Buttons</DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer"><ChevronsLeft size={16}/>Breadcrumb</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}

export default BreadcrumbWithDropdownDemo
