import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    name: "Ken Masters",
    username: "@kmasters",
    body: "“Our productivity has nearly doubled since onboarding. Automation features removed repetitive tasks, allowing our team to focus on building instead of managing operations.”",
    profile: "https://images.shadcnspace.com/assets/profiles/rough.webp",
  },
  {
    name: "Kira Athrun",
    username: "@kathrun",
    body: "“What surprised us most was how quickly our team adapted. Minimal learning curve, excellent documentation, and powerful features make it a must-have for modern SaaS companies.”",
    profile: "https://images.shadcnspace.com/assets/profiles/albert.webp",
  },
  {
    name: "Lirael Nassun",
    username: "@lnassun",
    body: "“This is easily one of the most reliable SaaS tools we’ve adopted. The UI is intuitive, integrations are seamless, and it saves us countless hours every week.”",
    profile: "https://images.shadcnspace.com/assets/profiles/linda.webp",
  },
  {
    name: "Jessica",
    username: "@jessica",
    body: "Switching to this platform streamlined our entire workflow. Setup was effortless, performance improved instantly, and our team now ships features faster without worrying about infrastructure.",
    profile: "https://images.shadcnspace.com/assets/profiles/jessica.webp",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "“We evaluated multiple solutions, but this stood out immediately. It’s fast, scalable, and thoughtfully designed for growing teams that need stability without added complexity.”",
    profile: "https://images.shadcnspace.com/assets/profiles/jenny.webp",
  },
];

const CarouselCards = () => {
  return (
    <div className="w-full max-w-xs">
      <Carousel
        opts={{
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {reviews.map((review, index) => {
            const { name, username, body, profile } = review;
            return (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="py-6 relative overflow-hidden rounded-lg">
                    <CardContent className="px-6 flex flex-col gap-4">
                      <p className="text-sm leading-relaxed text-muted-foreground italic line-clamp-3">
                        {body}
                      </p>
                      <div className="flex items-center gap-3 pt-3 border-t border-border">
                        <img
                          className="rounded-full ring-2 ring-primary/5 object-cover shrink-0"
                          width="36"
                          height="36"
                          alt={name}
                          src={profile}
                        />
                        <div className="flex flex-col min-w-0">
                          <p className="text-sm font-semibold text-foreground truncate">
                            {name}
                          </p>
                          <p className="text-xs font-medium text-muted-foreground truncate">
                            {username}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <div className="hidden sm:block">
          <CarouselPrevious className="-left-12" />
          <CarouselNext className="-right-12" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselCards;
