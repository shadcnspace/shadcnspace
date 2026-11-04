"use client";

import { motion, useAnimationControls } from "motion/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const MotionButton = motion.create(Button);

export interface ConfettiButtonProps extends Omit<
  React.ComponentProps<typeof MotionButton>,
  "onClick"
> {
  children?: React.ReactNode;
  label?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  particleCount?: number;
  spread?: number;
  startVelocity?: number;
  colors?: string[];
  onCelebrate?: () => void;
}

async function fireConfetti(
  element: HTMLElement,
  options: {
    particleCount: number;
    spread: number;
    startVelocity: number;
    colors?: string[];
  },
) {
  const rect = element.getBoundingClientRect();
  const x = (rect.left + rect.width / 2) / window.innerWidth;
  const y = (rect.top + rect.height / 2) / window.innerHeight;

  const confetti = (await import("canvas-confetti")).default;

  void confetti({
    particleCount: options.particleCount,
    spread: options.spread,
    startVelocity: options.startVelocity,
    origin: { x, y },
    colors: options.colors,
    disableForReducedMotion: true,
  });
}

function ConfettiButton({
  ref,
  children,
  label = "Continue",
  particleCount = 120,
  spread = 72,
  startVelocity = 38,
  colors,
  onCelebrate,
  onClick,
  className,
  disabled,
  type = "button",
  ...props
}: ConfettiButtonProps) {
  const popControls = useAnimationControls();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;

    void fireConfetti(event.currentTarget, {
      particleCount,
      spread,
      startVelocity,
      colors,
    });
    onCelebrate?.();

    void popControls.start({
      scale: [1, 1.12, 1],
      transition: {
        duration: 0.45,
        times: [0, 0.45, 1],
        ease: "easeOut",
      },
    });

    onClick?.(event);
  };

  return (
    <MotionButton
      ref={ref}
      type={type}
      disabled={disabled}
      onClick={handleClick}
      className={cn("cursor-pointer", className)}
      animate={popControls}
      {...props}
    >
      {children ?? label}
    </MotionButton>
  );
}

ConfettiButton.displayName = "ConfettiButton";

export { ConfettiButton };

const ConfettiButtonDemo = () => {
  return <ConfettiButton label="Subscribe" />;
};

export default ConfettiButtonDemo;
