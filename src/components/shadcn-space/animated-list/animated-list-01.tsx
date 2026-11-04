"use client"

import React, {
  ComponentPropsWithoutRef,
  useEffect,
  useMemo,
  useState,
} from "react"
import { AnimatePresence, motion, MotionProps } from "motion/react"
import { cn } from "@/lib/utils"

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
  const animations: MotionProps = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, originY: 0 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: "spring", stiffness: 350, damping: 40 },
  }

  return (
    <motion.div {...animations} layout className="mx-auto w-full">
      {children}
    </motion.div>
  )
}

export interface AnimatedListProps extends ComponentPropsWithoutRef<"div"> {
  children: React.ReactNode
  delay?: number
}

const AnimatedList = React.memo(
  ({ children, className, delay = 1000, ...props }: AnimatedListProps) => {
    const [index, setIndex] = useState(0)
    const childrenArray = useMemo(
      () => React.Children.toArray(children),
      [children]
    )

    useEffect(() => {
      if (index < childrenArray.length - 1) {
        const timeout = setTimeout(() => {
          setIndex((prevIndex) => (prevIndex + 1) % childrenArray.length)
        }, delay)

        return () => clearTimeout(timeout)
      }
    }, [index, delay, childrenArray.length])

    const itemsToShow = useMemo(() => {
      const result = childrenArray.slice(0, index + 1).reverse()
      return result
    }, [index, childrenArray])

    return (
      <div
        className={cn(`flex flex-col items-center gap-4`, className)}
        {...props}
      >
        <AnimatePresence>
          {itemsToShow.map((item) => (
            <AnimatedListItem key={(item as React.ReactElement).key}>
              {item}
            </AnimatedListItem>
          ))}
        </AnimatePresence>
      </div>
    )
  }
)
AnimatedList.displayName = "AnimatedList"

interface Item {
  avatar: string
  title: string
  subtitle: string
}

let Messages = [
  {
    avatar:
      'https://images.shadcnspace.com/assets/profiles/user-1.jpg',
    title: 'Roman Joined the Team!',
    subtitle: 'Congratulate him',
  },
  {
    avatar:
      'https://images.shadcnspace.com/assets/profiles/user-2.jpg',
    title: 'New message',
    subtitle: 'Salma sent you new message',
  },
  {
    avatar:
      'https://images.shadcnspace.com/assets/profiles/user-4.jpg',
    title: 'Bianca sent payment',
    subtitle: 'Check your earnings',
  },
  {
    avatar:
      'https://images.shadcnspace.com/assets/profiles/user-3.jpg',
    title: 'Jolly completed tasks',
    subtitle: 'Assign her new tasks',
  },
  {
    avatar:
      'https://images.shadcnspace.com/assets/profiles/user-7.jpg',
    title: 'John received payment',
    subtitle: '$230 deducted from account',
  },
]

Messages = Array.from({ length: 2 }, () => Messages).flat()

const Notification = ({ avatar, title, subtitle }: Item) => {
  return (
    <div
      className={cn(
        'relative mx-auto min-h-fit w-full cursor-pointer overflow-hidden rounded-2xl p-4',
        'transition-all duration-200 ease-in-out hover:scale-105',
        // light styles (shadcn tokens)
        'bg-background border border-border',
      )}>
      <div className='flex items-center'>
        <span className='flex-shrink-0 relative'>
          <img
            src={avatar}
            width={45}
            height={45}
            alt='shadcnspace'
            className='rounded-full'
          />
        </span>
        <div className='ps-4'>
          <h5 className='text-sm font-semibold text-foreground mb-1'>
            {title}
          </h5>
          <p className='text-xs font-normal text-muted-foreground truncate'>
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function AnimatedListDemo() {
  return (
    <>
        <div
          className={cn(
            'relative h-96 flex items-center w-full flex-col overflow-hidden p-2'
          )}>
          <AnimatedList>
            {Messages.map((item, idx) => (
              <Notification {...item} key={idx} />
            ))}
          </AnimatedList>

          <div className='from-background pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t'></div>
        </div>
    </>
  )
}
