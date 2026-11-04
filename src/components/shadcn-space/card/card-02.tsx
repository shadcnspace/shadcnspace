import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowRight, Bath, BedDouble, Expand } from "lucide-react";

const PreviewCard = () => (
  <Card className="relative gap-0 py-0 rounded-2xl group hover:shadow-3xl duration-300">
    <div className="overflow-hidden rounded-t-2xl">
      <a href="#">
        <div className="w-full h-72">
          <img
            src="https://images.shadcnspace.com/assets/card/property-cover-1.jpg"
            alt="Serenity Residential Home"
            width={440}
            height={300}
            className="w-full h-full object-cover rounded-t-2xl group-hover:brightness-50 group-hover:scale-125 transition duration-300 delay-75"
          />
        </div>
      </a>

      <div className="absolute top-6 right-6 hidden p-4 bg-white rounded-full group-hover:block">
        <ArrowRight className="text-card-foreground" />
      </div>
    </div>

    <div className="p-6">
      <div className="flex justify-between gap-5 mb-6">
        <div>
          <a href="#">
            <h3 className="text-xl font-medium duration-300 group-hover:text-primary">
              Serenity Residential Home
            </h3>
          </a>
          <p className="text-base font-normal text-muted-foreground">
            15 S Aurora Ave, Miami
          </p>
        </div>

        <Badge className="px-5 py-4 text-base font-normal rounded-full bg-teal-500/10 text-teal-500">
          $570,000
        </Badge>
      </div>

      <div className="flex">
        <div className="flex flex-col gap-2 xs:pr-4 pr-8 border-e border-border">
          <BedDouble size={20}/>
          <p className="text-sm sm:text-base">5 Bedrooms</p>
        </div>

        <div className="flex flex-col gap-2 xs:px-4 px-8 border-e border-border">
          <Bath size={20}/>
          <p className="text-sm sm:text-base">3 Bathrooms</p>
        </div>

        <div className="flex flex-col gap-2 xs:pl-4 pl-8">
          <Expand size={20}/>
          <p className="text-sm sm:text-base">
            120m<sup>2</sup>
          </p>
        </div>
      </div>
    </div>
  </Card>
);

export default PreviewCard;
