import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

const DialogBlock = () => {
  return (
    <section className="py-10 md:py-20 bg-primary dark:bg-background min-h-screen flex justify-center items-center">
      <div className="max-w-7xl xl:px-16 lg:px-8 px-4 mx-auto">
        <Dialog defaultOpen>
          <DialogTrigger>
            <Button variant="outline">Open Dialog</Button>
          </DialogTrigger>
          <DialogContent className="md:max-w-4xl p-0 rounded-none">
            <div className="flex md:flex-row flex-col">
              <div className="md:max-w-md w-full">
                <img
                  src="https://images.shadcnspace.com/assets/backgrounds/newsletter-image.webp"
                  alt="newsletter-image"
                  className="w-full object-cover sm:h-full h-40"
                />
              </div>
              <div className="md:p-16 p-6 w-full ">
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-4">
                    <h2 className="text-card-foreground text-3xl font-medium">
                      Subscribe to the latest updates of Shadcn Space
                    </h2>
                    <p className="text-muted-foreground text-base font-normal">
                      Subscribe our newsletters and get the latest business
                      updates
                    </p>
                  </div>
                  <form className="flex flex-col gap-4">
                    <div className="flex flex-col gap-3">
                      <Input
                        id="email"
                        type="email"
                        placeholder="example@shadcnspace.com"
                        required
                        className="dark:bg-background rounded-lg"
                      />
                      <Button
                        type="submit"
                        size={"lg"}
                        className="rounded-lg h-10"
                      >
                        Subscribe now
                      </Button>
                    </div>
                    <div className="flex flex-row items-center justify-between w-full">
                      <div className="flex items-center gap-3 ">
                        <Checkbox id="newsletter" className="cursor-pointer" />
                        <FieldLabel
                          htmlFor="newsletter"
                          className="text-sm text-primary font-normal cursor-pointer"
                        >
                          Don’t show this popup again
                        </FieldLabel>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default DialogBlock;
