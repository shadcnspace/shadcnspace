import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

const TooltipDirectionsDemo = () => {
  return (
    <div className='flex flex-wrap gap-2'>
      <Tooltip>
        <TooltipTrigger >
          <Button variant='outline'>
            Left
          </Button>
        </TooltipTrigger>
        <TooltipContent side='left'>Left</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger >
          <Button variant='outline'>
            Top
          </Button>
        </TooltipTrigger>
        <TooltipContent side='top'>Top</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger >
          <Button variant='outline'>
            Bottom
          </Button>
        </TooltipTrigger>
        <TooltipContent side='bottom'>Bottom</TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger >
          <Button variant='outline'>
            Right
          </Button>
        </TooltipTrigger>
        <TooltipContent side='right'>Right</TooltipContent>
      </Tooltip>
    </div>
  )
}

export default TooltipDirectionsDemo
