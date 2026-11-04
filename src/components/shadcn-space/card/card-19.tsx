"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export interface EventCardProps {
  category?: string;
  title?: string;
  description?: string;
  image?: string;
  month?: string;
  day?: string;
  time?: string;
  location?: string;
  attendees?: { name: string; avatar?: string }[];
  attendeeCount?: number;
  ctaLabel?: string;
}

const defaultAttendees = [
  {
    name: "Rough",
    avatar: "https://images.shadcnspace.com/assets/profiles/rough.webp",
  },
  {
    name: "Albert",
    avatar: "https://images.shadcnspace.com/assets/profiles/albert.webp",
  },
  {
    name: "Linda",
    avatar: "https://images.shadcnspace.com/assets/profiles/linda.webp",
  },
];

const contentVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" as const },
  },
};

const MotionButton = motion.create(Button);
const MotionSeparator = motion.create(Separator);

const EventCard = ({
  category = "Conference",
  title = "Design & Dev Summit 2026",
  description = "A day of talks, workshops, and networking for product designers and frontend engineers.",
  image = "https://images.shadcnspace.com/assets/feature/feature-01-img.webp",
  month = "MAR",
  day = "18",
  time = "10:00 AM – 5:00 PM",
  location = "Moscone Center, San Francisco",
  attendees = defaultAttendees,
  attendeeCount = 128,
  ctaLabel = "RSVP",
}: EventCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div className="p-6">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-85"
      >
        <Card className="group gap-0 overflow-hidden rounded-2xl border-border p-0">
          <div className="relative h-40 w-full overflow-hidden">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-600 ease-out group-hover:scale-108"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 16,
                delay: 0.25,
              }}
              className="absolute top-3 left-3 flex w-13 flex-col items-center overflow-hidden rounded-lg bg-card"
            >
              <span className="w-full bg-primary py-0.5 text-center text-[10px] font-semibold tracking-wide text-primary-foreground">
                {month}
              </span>
              <span className="py-1 text-lg font-bold leading-none text-foreground">
                {day}
              </span>
            </motion.div>
          </div>

          <CardContent className="p-5">
            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex flex-col gap-4"
            >
              <motion.div
                variants={itemVariants}
                className="flex flex-col gap-2"
              >
                <Badge className="w-fit rounded-full">{category}</Badge>
                <p className="text-base font-semibold text-foreground">
                  {title}
                </p>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {description}
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-col gap-1.5"
              >
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="size-4 shrink-0" />
                  <span>{time}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="size-4 shrink-0" />
                  <span className="line-clamp-1">{location}</span>
                </div>
              </motion.div>

              <MotionSeparator variants={itemVariants} />

              <motion.div
                variants={itemVariants}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {attendees.map((attendee, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 18,
                          delay: 0.45 + index * 0.08,
                        }}
                        whileHover={{ y: -3, scale: 1.1, zIndex: 10 }}
                      >
                        <Avatar className="size-7 border-2 border-card">
                          <AvatarImage
                            src={attendee.avatar}
                            alt={attendee.name}
                          />
                          <AvatarFallback>{attendee.name[0]}</AvatarFallback>
                        </Avatar>
                      </motion.div>
                    ))}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    +{attendeeCount} going
                  </span>
                </div>

                <MotionButton
                  size="sm"
                  className="rounded-full cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Calendar className="size-4" />
                  {ctaLabel}
                </MotionButton>
              </motion.div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default EventCard;
