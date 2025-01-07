"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

interface Employer {
  name: string;
  logo: string;
  period: string;
}

const employers: Employer[] = [
  {
    name: "Company 1",
    logo: "🏢",
    period: "2022 - Present",
  },
  {
    name: "Company 2",
    logo: "🏢",
    period: "2020 - 2022",
  },
  {
    name: "Company 3",
    logo: "🏢",
    period: "2018 - 2020",
  },
];

export default function EmployersCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 3 }
    }
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full max-w-[1024px] mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {employers.map((employer, index) => (
            <div
              key={employer.name}
              className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_33.333%]"
            >
              <div
                className={`
                  h-64 flex flex-col items-center justify-center p-6 rounded-lg border
                  ${
                    selectedIndex === index
                      ? "bg-card border-primary/20"
                      : "bg-muted/5 border-border"
                  }
                `}
              >
                <span className="text-6xl mb-4">{employer.logo}</span>
                <h3 className="text-xl font-bold mb-2">{employer.name}</h3>
                <p className="text-muted-foreground">{employer.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={scrollPrev}
        className="absolute -left-4 top-1/2 -translate-y-1/2 bg-primary/10 hover:bg-primary/20 text-primary p-2 rounded-full transition-colors"
      >
        ←
      </button>
      <button
        onClick={scrollNext}
        className="absolute -right-4 top-1/2 -translate-y-1/2 bg-primary/10 hover:bg-primary/20 text-primary p-2 rounded-full transition-colors"
      >
        →
      </button>
    </div>
  );
}
