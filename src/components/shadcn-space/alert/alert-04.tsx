import { OctagonAlert, Star } from 'lucide-react'
import { Alert, AlertTitle } from '@/components/ui/alert'

const AlertIndicatorDestructiveDemo = () => {
    return (
        <div className='flex flex-col gap-4 w-full'>
            <Alert className='border-amber-300 bg-amber-300/10 text-amber-300 rounded-none border-0 border-l-4'>
                <OctagonAlert />
                <AlertTitle className='flex items-center gap-1.5 font-normal'>
                    <span className='text-amber-500'>Warning</span>
                    You have no credits left !
                </AlertTitle>
            </Alert>

            <Alert className='border-sky-400 bg-sky-400/10 text-sky-400 rounded-none border-0 border-l-4'>
                <Star />
                <AlertTitle className='flex items-center gap-1.5 font-normal'>
                    <span className='text-sky-500'>Did tou Know?</span>
                    Here's something you'd like to know
                </AlertTitle>
            </Alert>
        </div>
    )
}

export default AlertIndicatorDestructiveDemo
