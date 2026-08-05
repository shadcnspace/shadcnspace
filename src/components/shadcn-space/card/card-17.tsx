import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  name: string;
  role: string;
  review: string;
  brand: string;
  brandLight?: string;
  imageUrl: string;
}

export const TestimonialCard = ({
  name,
  role,
  review,
  brand,
  brandLight,
  imageUrl,
}: TestimonialCardProps) => {
  return (
    <>
      <Card className="max-w-92 w-full mx-auto p-8 rounded-3xl ring-0 border">
        <CardContent className="flex flex-col gap-10 p-0">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <Avatar className="size-12!">
                <AvatarImage src={imageUrl} />
                <AvatarFallback>
                  {name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-lg text-foreground">{name}</p>
                <p className="text-sm text-muted-foreground">{role}</p>
              </div>
            </div>
            <p className="text-base text-foreground">{review}</p>
          </div>
          <img
            src={brand}
            alt="brand"
            className={`w-25 h-6 block ${brandLight ? "dark:hidden" : ""}`}
          />
          {brandLight && (
            <img
              src={brandLight}
              alt="brand"
              className="w-25 h-6 hidden dark:block"
            />
          )}
        </CardContent>
      </Card>
    </>
  );
};

const TestimonialCardDemo = () => {
  return (
    <TestimonialCard
      imageUrl="https://images.shadcnspace.com/assets/profiles/jessica.webp"
      name="Isabella Clark"
      role="Finance Manager"
      review='"Switching to one platform eliminated the need for multiple tools and reduced unnecessary back-and-forth. Collaboration became smoother, and our team is now moving faster and delivering more consistently."'
      brand="https://images.shadcnspace.com/assets/brand-logo/logoipsum-1.svg"
      brandLight="https://images.shadcnspace.com/assets/brand-logo/logoipsum-light-1.svg"
    />
  );
};

export default TestimonialCardDemo;
