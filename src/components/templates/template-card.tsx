import { Template } from "@/description/templates";
import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GithubLogo } from "../ui/icons";
import GithubStarsAndForks from "./github-stars-and-forks";

const TemplateCard = ({ template }: { template: Template }) => {
  return (
    <div
      key={template.slug}
      className="bg-accent/30 rounded-lg border overflow-hidden"
    >
      <div className="relative w-full aspect-square">
        <Image
          src={template.image}
          alt={template.name}
          fill
          className="object-cover object-top transition-all duration-1000 ease-in-out hover:object-bottom"
        />
      </div>
      <div className="p-4 pb-6 border-t">
        <h3 className="text-xl font-semibold">{template.name}</h3>
        <p className="mt-2 text-muted-foreground">{template.description}</p>
        <div className="mt-4">
          <GithubStarsAndForks repo={template.repo} />
        </div>

        <div className="mt-6 flex-wrap flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Button asChild>
              <Link href={template.url} target="_blank">
                Live Preview <Eye />
              </Link>
            </Button>
            <Button asChild>
              <Link
                href={`https://github.com/${template.repo}`}
                target="_blank"
              >
                Github <GithubLogo />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;
