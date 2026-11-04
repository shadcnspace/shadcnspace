'use client'

import { useState } from 'react'
import { AtSign, BellIcon, Heart, MessageCircle, UserPlus } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { cn } from '@/lib/utils'

type NotificationType = 'like' | 'follow' | 'comment' | 'mention'

const typeConfig: Record<
  NotificationType,
  { icon: React.ReactNode; color: string }
> = {
  like: {
    icon: <Heart className='h-2.5 w-2.5' />,
    color: 'bg-rose-500',
  },
  follow: {
    icon: <UserPlus className='h-2.5 w-2.5' />,
    color: 'bg-blue-500',
  },
  comment: {
    icon: <MessageCircle className='h-2.5 w-2.5' />,
    color: 'bg-green-500',
  },
  mention: {
    icon: <AtSign className='h-2.5 w-2.5' />,
    color: 'bg-violet-500',
  },
}

const initialNotifications = [
  {
    id: 1,
    avatar: 'https://images.shadcnspace.com/assets/profiles/ben.webp',
    initials: 'BT',
    name: 'Ben Thompson',
    action: 'liked your post',
    preview: 'Building a design system with shadcn/ui...',
    time: '2m ago',
    unread: true,
    type: 'like' as NotificationType,
  },
  {
    id: 2,
    avatar: 'https://images.shadcnspace.com/assets/profiles/jessica.webp',
    initials: 'PN',
    name: 'Priya Nair',
    action: 'started following you',
    preview: null,
    time: '1h ago',
    unread: true,
    type: 'follow' as NotificationType,
  },
  {
    id: 3,
    avatar: 'https://images.shadcnspace.com/assets/profiles/albert.webp',
    initials: 'DP',
    name: 'Daniel Park',
    action: 'commented on your post',
    preview: '"Great work on the new design!"',
    time: '3h ago',
    unread: false,
    type: 'comment' as NotificationType,
  },
  {
    id: 4,
    avatar: 'https://images.shadcnspace.com/assets/profiles/linda.webp',
    initials: 'LM',
    name: 'Linda Moore',
    action: 'mentioned you in a thread',
    preview: 'Hey @you, check out this component...',
    time: '1d ago',
    unread: false,
    type: 'mention' as NotificationType,
  },
]

const NotificationItem = ({
  n,
}: {
  n: (typeof initialNotifications)[number]
}) => {
  const config = typeConfig[n.type]
  return (
    <div
      className={cn(
        'flex gap-3 px-4 py-3 hover:bg-muted/50 transition-colors cursor-pointer',
        n.unread && 'bg-muted dark:bg-muted/30',
      )}
    >
      <div className='relative shrink-0 h-fit'>
        <Avatar className='h-9 w-9'>
          <AvatarImage src={n.avatar} alt={n.name} />
          <AvatarFallback>{n.initials}</AvatarFallback>
        </Avatar>
        <span
          className={cn(
            'absolute -bottom-0.5 -right-0.5 h-4 w-4 rounded-full flex items-center justify-center text-white',
            config.color,
          )}
        >
          {config.icon}
        </span>
      </div>
      <div className={cn('flex-1 min-w-0', n.preview && 'max-w-56')}>
        <p className='text-sm leading-snug'>
          <span className='font-medium'>{n.name}</span>{' '}
          <span className='text-muted-foreground'>{n.action}</span>
        </p>
        {n.preview && (
          <p className='text-xs text-muted-foreground mt-0.5 truncate'>
            {n.preview}
          </p>
        )}
        <p className='text-xs text-muted-foreground mt-1'>{n.time}</p>
      </div>
      {n.unread && (
        <div className='h-2 w-2 rounded-full bg-primary mt-1.5 shrink-0' />
      )}
    </div>
  )
}

const PopoverNotificationsDemo = () => {
  const [notifications, setNotifications] = useState(initialNotifications)
  const unreadCount = notifications.filter((n) => n.unread).length
  const unreadItems = notifications.filter((n) => n.unread)

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })))
  }

  return (
    <Popover>
      <PopoverTrigger
        render={
          <Button
            variant='outline'
            size='icon'
            className='relative cursor-pointer'
          />
        }
      >
        <BellIcon className='h-4 w-4' />
        {unreadCount > 0 && (
          <Badge className='absolute -top-1.5 -right-1.5 h-4 w-4 rounded-full p-0 flex items-center justify-center text-[10px]'>
            {unreadCount}
          </Badge>
        )}
        <span className='sr-only'>Notifications</span>
      </PopoverTrigger>
      <PopoverContent className='w-80 p-0' align='end'>
        <div className='flex items-center justify-between px-4 py-3 border-b'>
          <div className='flex items-center gap-2'>
            <span className='font-semibold text-sm'>Notifications</span>
            {unreadCount > 0 && (
              <Badge variant='secondary' className='text-xs px-1.5 py-0'>
                {unreadCount} new
              </Badge>
            )}
          </div>
          {unreadCount > 0 && (
            <Button
              variant='ghost'
              size='sm'
              onClick={markAllRead}
              className='text-xs text-muted-foreground hover:text-foreground cursor-pointer h-auto py-0.5'
            >
              Mark all read
            </Button>
          )}
        </div>
        <div>
          <Tabs defaultValue='all' className='gap-0'>
            <div className='px-4 py-2 border-b'>
              <TabsList className='h-8 w-full'>
                <TabsTrigger value='all' className='flex-1 text-xs'>
                  All
                </TabsTrigger>
                <TabsTrigger value='unread' className='flex-1 text-xs'>
                  Unread
                  {unreadCount > 0 && (
                    <span className='text-xs'>({unreadCount})</span>
                  )}
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value='all' className='mt-0'>
              <ScrollArea className='h-64'>
                <div className='divide-y'>
                  {notifications.map((n) => (
                    <NotificationItem key={n.id} n={n} />
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>

            <TabsContent value='unread' className='mt-0'>
              <ScrollArea className='h-64'>
                {unreadItems.length > 0 ? (
                  <div className='divide-y'>
                    {unreadItems.map((n) => (
                      <NotificationItem key={n.id} n={n} />
                    ))}
                  </div>
                ) : (
                  <div className='flex flex-col items-center justify-center h-64 gap-2'>
                    <BellIcon className='h-8 w-8 text-muted-foreground/40' />
                    <p className='text-sm text-muted-foreground'>
                      You&apos;re all caught up!
                    </p>
                  </div>
                )}
              </ScrollArea>
            </TabsContent>
          </Tabs>

          <div className='px-4 py-3 border-t'>
            <Button
              variant='ghost'
              size='sm'
              className='w-full text-sm cursor-pointer'
              render={<a href='#' />}
            >
              View all notifications
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default PopoverNotificationsDemo
