import { Card, CardContent } from "@/components/ui/card";

export interface PlaceCardProps {
  title?: string;
  description?: string;
  image?: string;
  href?: string;
}

const PlaceCard = ({
  title = "Whispering Grasslands",
  description = "Open plains and quiet trails, best explored at golden hour.",
  image = "https://images.shadcnspace.com/assets/feature/feature-18-img.webp",
  href = "#",
}: PlaceCardProps) => {
  return (
    <div className="p-6">
      <a href={href} className="block">
        <Card className="group relative h-90 w-80 gap-0 overflow-hidden rounded-2xl border-border p-0">
          <img
            src={image}
            alt={title}
            className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-300 ease-out group-hover:scale-106 group-hover:grayscale-0"
          />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/85 via-black/10 to-transparent" />
          <CardContent className="absolute inset-x-0 bottom-0 p-5">
            <p className="text-lg font-medium text-white">{title}</p>
            <p className="text-sm text-white/60 max-w-60">{description}</p>
          </CardContent>
        </Card>
      </a>
    </div>
  );
};

export default PlaceCard;
