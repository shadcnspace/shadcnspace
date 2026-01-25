"use client";

import { useEffect, useState } from "react";

const AnimatedTypingMotion = () => {
  const words = ["Hello, World!", "Welcome to my website!", "This is a typewriter effect."];
  const [i, setI] = useState(0); 
  const [j, setJ] = useState(0); 
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    const currentWord = words[i];

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText(currentWord.substring(0, j - 1));
        setJ(j - 1);

        if (j === 0) {
          setIsDeleting(false);
          setI((prev) => (prev + 1) % words.length);
        }
      } else {
        setText(currentWord.substring(0, j + 1));
        setJ(j + 1);

        if (j === currentWord.length) {
          setIsDeleting(true);
        }
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [j, i, isDeleting, words]);

  return (
    <div className="w-full flex justify-start items-center">
      <p className="text-xl sm:text-2xl font-medium text-foreground">{text}</p>
    </div>
  );
}

export default AnimatedTypingMotion;

