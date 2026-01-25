import "@/components/shadcn-space/animated-text/animated-text-01.css";

const AnimatedShinyText = () => {
  return (
    <>
      <p className="shiny inline-block bg-[linear-gradient(120deg,rgba(0,0,0,0)_40%,rgba(0,0,0,0.8)_50%,rgba(0,0,0,0)_60%)] dark:bg-[linear-gradient(120deg,rgba(255,255,255,0)_40%,rgba(255,255,255,0.8)_50%,rgba(255,255,255,0)_60%)]  bg-[length:200%_100%] bg-clip-text text-xl sm:text-2xl font-medium text-muted-foreground/70">
        Shiny Button Text
      </p>
    </>
  );
};

export default AnimatedShinyText;
