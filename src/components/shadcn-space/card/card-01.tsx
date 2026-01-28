'use client'

import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'motion/react'

const userImg = [
  {
    user: 'https://images.shadcnspace.com/assets/profiles/user-4.jpg',
  },
  {
    user: 'https://images.shadcnspace.com/assets/profiles/user-2.jpg',
  },
  {
    user: 'https://images.shadcnspace.com/assets/profiles/user-3.jpg',
  },
]

const ArticlePreviewCard = () => {
  return (
    <div className='flex items-center justify-center px-6'>
      {/* Card Motion Wrapper */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className='w-full max-w-sm'>
        <Card className='p-0 w-full gap-0 border-0 overflow-hidden'>
          {/* Top Image Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}>
            <img
              src={
                'https://images.shadcnspace.com/assets/blog/blog-img12.jpg'
              }
              alt='matdash'
              height={220}
              width={500}
              className='rounded-t-xl'
            />
          </motion.div>

          {/* Content Area */}
          <CardContent className='p-6 pt-5'>
            <motion.div
              initial='hidden'
              animate='visible'
              variants={{
                visible: { transition: { staggerChildren: 0.15 } },
              }}>
              <motion.h6
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
                className='text-lg font-semibold text-foreground'>
                Figma tips and tricks with Stephan
              </motion.h6>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.45 }}
                className='text-sm font-medium text-muted-foreground mt-2'>
                Nullam lobortis sodales dolor vitae viverra.
                <br />
                Cras lacinia bibendum metus vel rhoncus.
              </motion.p>
            </motion.div>

            <motion.div
              className='flex mt-4'
              initial='hidden'
              animate='visible'
              variants={{
                visible: {
                  transition: { staggerChildren: 0.12 },
                },
              }}>
              {userImg.map((item, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, scale: 1 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: 'spring', stiffness: 250 }}
                  className='-ms-2 h-10 w-10'>
                  <img
                    src={item.user}
                    className='outline-2 outline-background rounded-full'
                    alt='icon'
                    width={44}
                    height={44}
                  />
                </motion.div>
              ))}

              <motion.div
                variants={{
                  hidden: { opacity: 0, scale: 1 },
                  visible: { opacity: 1, scale: 1 },
                }}
                whileHover={{ scale: 1.08 }}
                transition={{ type: 'spring', stiffness: 250 }}
                className='-ms-2'>
                <div className='bg-primary-foreground outline-2 outline-background h-10 w-10 flex justify-center items-center text-foreground rounded-full text-base font-medium'>
                  +4
                </div>
              </motion.div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

export default ArticlePreviewCard
