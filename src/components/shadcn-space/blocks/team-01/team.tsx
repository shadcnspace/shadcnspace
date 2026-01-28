"use client";
import { Badge } from "@/components/ui/badge";
import { Globe, Linkedin } from "lucide-react";
import { motion } from "motion/react";

type team = {
  name: string;
  role: string;
  image: string;
  socials: {
    website: string;
    linkedin: string;
  };
}[];

const teamData: team = [
  {
    name: "Logan Dang",
    role: "WordPress Developer",
    image: "https://images.shadcnspace.com/assets/team/team-img-01.png",
    socials: {
      website: "#",
      linkedin: "#",
    },
  },
  {
    name: "Ana Belić",
    role: "Social Media Specialist",
    image: "https://images.shadcnspace.com/assets/team/team-img-02.png",
    socials: {
      website: "#",
      linkedin: "#",
    },
  },
  {
    name: "Brian Hanley",
    role: "Product Designer",
    image: "https://images.shadcnspace.com/assets/team/team-img-03.png",
    socials: {
      website: "#",
      linkedin: "#",
    },
  },
  {
    name: "Darko Stanković",
    role: "UI Designer",
    image: "https://images.shadcnspace.com/assets/team/team-img-04.png",
    socials: {
      website: "#",
      linkedin: "#",
    },
  },
];

const Team = () => {
  return (
    <section>
      <div className="min-h-screen flex items-center justify-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-16 py-8 lg:py-12 flex flex-col items-center justify-center gap-8 md:gap-16">
          <motion.div
              initial={{ y: -40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.21, 0.47, 0.32, 0.98],
              }} className="max-w-xl mx-auto flex flex-col items-center justify-center text-center gap-4">
            <Badge variant={"outline"} className="px-3 py-1 h-auto text-sm">
              Team
            </Badge>
            <h2 className="text-3xl md:text-5xl font-medium text-foreground">
              Meet the creative minds behind our success
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                  className="group flex flex-col items-center justify-center gap-6"
                >
                  <img
                    className="w-full h-full group-hover:grayscale transition-all duration-300"
                    src={value.image}
                    alt="team-img"
                  />
                  <div className="w-full flex flex-col gap-4 items-center justify-center">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <h3 className="text-2xl font-medium text-foreground">
                        {value.name}
                      </h3>
                      <p className="text-sm font-normal text-muted-foreground">
                        {value.role}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={value.socials.website}
                        className="p-2 hover:bg-accent/80 rounded-full"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Globe size={16} />
                      </a>
                      <a
                        href={value.socials.linkedin}
                        className="p-2 hover:bg-accent/80 rounded-full"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin size={16} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
