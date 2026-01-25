import { Card } from "@/components/ui/card";

const Gallery = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center w-full">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16 py-10 w-full">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* LEFT – Large card */}
            <Card className="group relative  overflow-hidden rounded-lg border-none p-0 ">
              <img
                src="https://images.shadcnspace.com/assets/gallery/destinations-1.webp"
                alt="Hiking Adventure"
                className="object-cover transition-transform duration-500 group-hover:scale-105 h-full w-full"
              />
              {/* <div className="absolute inset-0 bg-black/30" /> */}
              <div className="absolute bottom-0 ps-8 pb-8 z-10 flex flex-col gap-1">
                <h3 className="text-2xl font-semibold text-white">
                  Hiking Adventure
                </h3>
                <p className="text-white/80 text-sm">306 Destinations</p>
              </div>
            </Card>

            {/* RIGHT SIDE */}
            <div className="grid grid-rows-2 gap-6">
              {/* Top wide card */}
              <Card className="group relative  overflow-hidden rounded-lg border-none p-0 ">
                <img
                  src="https://images.shadcnspace.com/assets/gallery/destinations-2.webp"
                  alt="Outdoor Adventure"
                  className="object-cover transition-transform duration-500 group-hover:scale-105 h-full w-full"
                />

                <div className="absolute bottom-0 ps-8 pb-8 z-10 flex flex-col gap-1">
                  <h3 className="text-xl font-semibold text-white">
                    Outdoor Adventure
                  </h3>
                  <p className="text-white/80">418 Destinations</p>
                </div>
              </Card>

              {/* Bottom two cards */}
              <div className="grid grid-cols-2 gap-6">
                <Card className="group relative  overflow-hidden rounded-lg border-none p-0">
                  <img
                    src="https://images.shadcnspace.com/assets/gallery/destinations-3.webp"
                    alt="Beach Adventure"
                    className="object-cover transition-transform duration-500 group-hover:scale-105 h-full w-full"
                  />

                  <div className="absolute bottom-0 ps-8 pb-8 z-10 flex flex-col gap-1">
                    <h3 className="text-lg font-semibold text-white">
                      Beach Adventure
                    </h3>
                    <p className="text-sm text-white/80">85 Destinations</p>
                  </div>
                </Card>

                <Card className="group relative  overflow-hidden rounded-lg border-none p-0">
                  <img
                    src="https://images.shadcnspace.com/assets/gallery/destinations-4.webp"
                    alt="Pilgrimage Destination"
                    className="object-cover transition-transform duration-500 group-hover:scale-105 h-full w-full"
                  />

                  <div className="absolute bottom-0 ps-8 pb-8 z-10 flex flex-col gap-1">
                    <h3 className="text-lg font-semibold text-white">
                      Pilgrimage Destination
                    </h3>
                    <p className="text-sm text-white/80">29 Destinations</p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
