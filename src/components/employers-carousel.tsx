"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

interface Employer {
  name: string;
  logo: string;
  period: string;
  url?: string;
  role?: string;
  description?: string;
}

interface Category {
  id: string;
  title: string;
  employers: Employer[];
}

const categories: Category[] = [
  {
    id: "formal",
    title: "Formal Employment",
    employers: [
      {
        name: "Company 1",
        logo: "",
        role: "Senior Software Engineer",
        period: "2022 - Present",
        url: "https://company1.com",
        description: "Led development of core platform features and mentored junior developers.",
      },
      {
        name: "Company 2",
        logo: "",
        role: "Software Engineer",
        period: "2020 - 2022",
        url: "https://company2.com",
        description: "Full-stack development using React, Node.js, and AWS.",
      },
    ],
  },
  {
    id: "freelance",
    title: "Freelance",
    employers: [
      {
        name: "Client 1",
        logo: "",
        period: "2021 - Present",
      },
      {
        name: "Client 2",
        logo: "",
        period: "2019 - 2020",
      },
    ],
  },
  {
    id: "own",
    title: "Own Projects",
    employers: [
      {
        name: "Project 1",
        logo: "",
        period: "2023 - Present",
        url: "https://project1.com",
      },
      {
        name: "Project 2",
        logo: "",
        period: "2022 - 2023",
      },
    ],
  },
];

function Timeline({ employers }: { employers: Employer[] }) {
  return (
    <div className="relative w-full max-w-[768px] mx-auto">
      <div className="absolute left-[50%] top-0 bottom-0 w-px bg-border" />
      <div className="space-y-12">
        {employers.map((employer, index) => (
          <div
            key={employer.name}
            className={`relative flex items-center gap-8 ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            {/* Timeline dot */}
            <div className="absolute left-[50%] -translate-x-[50%] w-4 h-4 rounded-full bg-primary border-4 border-background" />
            
            {/* Content */}
            <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
              <div className="space-y-2">
                <div className="flex items-center gap-4 justify-end">
                  <div className={`flex gap-4 items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                    <div className="text-4xl">{employer.logo}</div>
                    <div>
                      {employer.url ? (
                        <a
                          href={employer.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xl font-bold hover:text-primary transition-colors"
                        >
                          {employer.name}
                        </a>
                      ) : (
                        <h3 className="text-xl font-bold">{employer.name}</h3>
                      )}
                      <p className="text-primary font-medium">{employer.role}</p>
                      <p className="text-sm text-muted-foreground">{employer.period}</p>
                    </div>
                  </div>
                </div>
                {employer.description && (
                  <p className="text-muted-foreground">{employer.description}</p>
                )}
              </div>
            </div>
            
            {/* Spacer for alignment */}
            <div className="flex-1" />
          </div>
        ))}
      </div>
    </div>
  );
}

function Carousel({ employers }: { employers: Employer[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative w-full max-w-[1024px] mx-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {employers.map((employer) => (
            <div
              key={employer.name}
              className="flex-[0_0_100%] min-w-0 px-4 md:flex-[0_0_33.333%]"
            >
              <div className="flex flex-col items-center justify-center gap-4 p-8 transition-opacity hover:opacity-80">
                <div className="text-5xl md:text-6xl">{employer.logo}</div>
                <div className="text-center">
                  {employer.url ? (
                    <a
                      href={employer.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium hover:text-primary transition-colors"
                    >
                      {employer.name}
                    </a>
                  ) : (
                    <span className="font-medium">{employer.name}</span>
                  )}
                  <p className="text-sm text-muted-foreground">{employer.period}</p>
                </div>
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

export default function EmployersCarousel() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);
  const currentCategory = categories.find((c) => c.id === selectedCategory) || categories[0];

  return (
    <div className="space-y-12">
      <div className="flex justify-center gap-4 flex-wrap">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`
              px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${
                selectedCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted hover:bg-muted/80"
              }
            `}
          >
            {category.title}
          </button>
        ))}
      </div>

      {currentCategory.id === "formal" ? (
        <Timeline employers={currentCategory.employers} />
      ) : (
        <Carousel employers={currentCategory.employers} />
      )}
    </div>
  );
}
