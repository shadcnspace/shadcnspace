'use client';
import { Marquee } from '@/components/shadcn-space/animations/marquee';
import { useEffect, useState } from 'react';

export default function SeamlessCloud({
  top = "top-72 sm:top-20",
  cloudCount = 5,
  minSize = 400,
  maxSize = 678,
  opacity = "opacity-60",
  gapMin = 50,
  gapMax = 200,
}) {
  const [clouds, setClouds] = useState<{ width: number; gap: number }[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: cloudCount }).map(() => ({
      width: Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize,
      gap: Math.floor(Math.random() * (gapMax - gapMin + 1)) + gapMin,
    }));

    setClouds(generated);
  }, [cloudCount, minSize, maxSize, gapMin, gapMax]);

  if (clouds.length === 0) return null; // prevents mismatch

  return (
    <div
      className={`absolute ${top} inset-x-0 z-0 overflow-hidden pointer-events-none`}
    >
      <Marquee pauseOnHover className="[--duration:30s]">
        {clouds.map((cloud, i) => (
          <img
            key={i}
            src="https://images.shadcnspace.com/assets/backgrounds/cloud.webp"
            alt="cloud"
            width={cloud.width}
            height={350}
            className={opacity}
            style={{ marginRight: cloud.gap }}
          />
        ))}
      </Marquee>
    </div>
  );
}
