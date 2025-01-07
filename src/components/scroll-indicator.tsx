"use client";

import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`
        fixed bottom-8 left-1/2 -translate-x-1/2 z-40
        transition-all duration-300 ease-in-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
      `}
    >
      <div className="w-8 h-12 border-2 border-primary rounded-full relative">
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full animate-scroll" />
      </div>
    </div>
  );
}
