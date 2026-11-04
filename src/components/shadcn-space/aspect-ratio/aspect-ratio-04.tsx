import { PlayIcon } from "lucide-react";

import { AspectRatio } from "@/components/ui/aspect-ratio";

const VideoThumbnailAspectRatioDemo = () => {
  return (
    <div className="flex w-full max-w-sm items-center justify-center px-4">
      <AspectRatio
        ratio={16 / 9}
        className="group relative cursor-pointer overflow-hidden rounded-lg bg-muted"
      >
        <img
          src="https://images.shadcnspace.com/assets/blog/blog-img9.jpg"
          alt="Video thumbnail"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex size-12 items-center justify-center rounded-full bg-white/90 shadow-md transition-transform group-hover:scale-110">
            <PlayIcon className="ml-0.5 size-5 fill-black text-black" />
          </span>
        </div>
        <span className="absolute right-2 bottom-2 rounded bg-black/70 px-1.5 py-0.5 text-xs font-medium text-white">
          4:12
        </span>
      </AspectRatio>
    </div>
  );
};

export default VideoThumbnailAspectRatioDemo;
