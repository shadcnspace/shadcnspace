import { Card } from "@/components/ui/card";
import { Marquee } from "@/components/shadcn-space/animations/marquee";

type VideoItem = {
  title: string;
  video: string;
};

const BASE_URL = "https://images.shadcnspace.com/assets/marquee";

const videos: VideoItem[] = [
  { title: "Video 1", video: `${BASE_URL}/marquee-1.mp4` },
  { title: "Video 2", video: `${BASE_URL}/marquee-2.mp4` },
  { title: "Video 3", video: `${BASE_URL}/marquee-3.mp4` },
  { title: "Video 4", video: `${BASE_URL}/marquee-4.mp4` },
  { title: "Video 5", video: `${BASE_URL}/marquee-5.mp4` },
];

const VideoCard = ({ title, video }: VideoItem) => {
  return (
    <Card className="h-117.5 w-80 shrink-0 overflow-hidden p-0 shadow-none ">
      <video
        aria-label={title}
        className="h-full w-full object-cover"
        src={video}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    </Card>
  );
};

const VideoMarqueeDemo = () => {
  return (
    <div className="relative flex w-full items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:30s] [--gap:1.5rem]">
        {videos.map((item) => (
          <VideoCard key={item.video} {...item} />
        ))}
      </Marquee>
      
    </div>
  );
};

export default VideoMarqueeDemo;
