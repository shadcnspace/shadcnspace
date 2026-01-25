"use client";
import { Badge } from "@/components/ui/badge";
import { Dribbble, Instagram, Linkedin, Twitter } from "lucide-react";
import { motion } from "motion/react";

type team = {
  name: string;
  role: string;
  image: string;
  socials: {
    icon: React.ReactNode;
    link: string;
  }[];
}[];

const teamData: team = [
  {
    name: "Martha Finley",
    role: "Creative Director",
    image: "https://images.shadcnspace.com/assets/team/team-img-5.webp",
    socials: [
      {
        icon: <Instagram size={16} />,
        link: "#",
      },
      {
        icon: <Dribbble size={16} />,
        link: "#",
      },
      {
        icon: <Linkedin size={16} />,
        link: "#",
      },
    ],
  },
  {
    name: "Floyd Miles",
    role: "Marketing Strategist",
    image: "https://images.shadcnspace.com/assets/team/team-img-6.webp",
    socials: [
      {
        icon: <Instagram size={16} />,
        link: "#",
      },
      {
        icon: <Dribbble size={16} />,
        link: "#",
      },
      {
        icon: <Linkedin size={16} />,
        link: "#",
      },
    ],
  },
  {
    name: "Glenna Snyder",
    role: "Lead Designer",
    image: "https://images.shadcnspace.com/assets/team/team-img-7.webp",
    socials: [
      {
        icon: <Instagram size={16} />,
        link: "#",
      },
      {
        icon: <Dribbble size={16} />,
        link: "#",
      },
      {
        icon: <Linkedin size={16} />,
        link: "#",
      },
    ],
  },
  {
    name: "Albert Flores",
    role: "UX/UI Developer",
    image: "https://images.shadcnspace.com/assets/team/team-img-8.webp",
    socials: [
      {
        icon: <Instagram size={16} />,
        link: "#",
      },
      {
        icon: <Dribbble size={16} />,
        link: "#",
      },
      {
        icon: <Linkedin size={16} />,
        link: "#",
      },
    ],
  },
];

const Team = () => {
  return (
    <section>
      <div className="min-h-screen flex items-center justify-center">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 xl:px-16 py-8 lg:py-12">
          <div className="flex flex-col items-center justify-center gap-16">
            <motion.div
              initial={{ y: -40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="max-w-xl mx-auto flex flex-col items-center justify-center text-center gap-4"
            >
              <Badge variant={"outline"} className="px-3 py-1 h-auto text-sm">
                Team
              </Badge>
              <div className="flex flex-col items-center justify-center gap-3">
                <h2 className="text-3xl md:text-5xl font-semibold text-foreground">
                  Meet our team
                </h2>
                <p className="text-base font-normal text-muted-foreground">
                  Our team is committed to redefining digital experiences
                  through innovative web solutions while fostering a diverse and
                  collaborative environment.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {teamData?.map((value, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ y: 40, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.1,
                      ease: [0.21, 0.47, 0.32, 0.98],
                    }}
                    className="group flex flex-col items-start gap-6"
                  >
                    <div className="relative w-full h-80 overflow-hidden">
                      <img
                        src={value.image}
                        alt="team-img"
                        height={325}
                        width={270}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gray-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-5">
                        <div className="flex gap-2">
                          {value.socials.map((social, idx) => (
                            <a
                              key={idx}
                              href={social.link}
                              target="_blank"
                              className="flex w-fit bg-background p-3 rounded-full hover:opacity-80 transition-opacity duration-300"
                            >
                              {social.icon}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-xl font-medium text-foreground">
                        {value.name}
                      </h3>
                      <p className="text-sm font-normal text-muted-foreground">
                        {value.role}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

