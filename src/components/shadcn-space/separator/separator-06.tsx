import { Separator } from "@/components/ui/separator";

const GradientFadedDemo = () => {
  return (
    <div className='w-full max-w-sm'>
      <Separator className='bg-transparent bg-linear-to-r from-transparent via-primary/50 to-transparent' />
    </div>
  );
};

export default GradientFadedDemo;
