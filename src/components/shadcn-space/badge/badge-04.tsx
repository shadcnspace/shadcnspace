'use client'
import { StarIcon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const BadgeWithIconDemo = () => {
  return (
    <Badge className='bg-teal-200 text-teal-900'>
      <StarIcon className='size-3' />
      With Icon
    </Badge>
  )
}

export default BadgeWithIconDemo
