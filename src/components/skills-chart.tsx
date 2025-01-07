"use client";

import { useEffect, useState } from "react";

interface Skill {
  name: string;
  value: number;
}

const skills: Skill[] = [
  { name: "Backend", value: 85 },
  { name: "Frontend", value: 75 },
  { name: "Mobile", value: 60 },
  { name: "Infrastructure", value: 70 },
  { name: "Management", value: 50 },
];

export default function SkillsChart() {
  const [size, setSize] = useState(800);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateSize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        // sm
        setSize(320);
      } else if (width < 768) {
        // md
        setSize(480);
      } else if (width < 1024) {
        // lg
        setSize(640);
      } else {
        setSize(800);
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const centerX = size / 2;
  const centerY = size / 2;
  const radius = size * 0.3;
  const sides = skills.length;
  const angleStep = (Math.PI * 2) / sides;

  // Calculate points for the background polygon (100%)
  const backgroundPoints = Array.from({ length: sides }, (_, i) => {
    const angle = i * angleStep - Math.PI / 2;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    return `${x},${y}`;
  }).join(" ");

  // Calculate points for the skills polygon
  const skillPoints = skills
    .map((skill, i) => {
      const angle = i * angleStep - Math.PI / 2;
      const adjustedRadius = (radius * skill.value) / 100;
      const x = centerX + adjustedRadius * Math.cos(angle);
      const y = centerY + adjustedRadius * Math.sin(angle);
      return `${x},${y}`;
    })
    .join(" ");

  // Calculate label positions with more padding
  const labels = skills.map((skill, i) => {
    const angle = i * angleStep - Math.PI / 2;
    const labelPadding = size * 0.075; // Make padding relative to size
    const x = centerX + (radius + labelPadding) * Math.cos(angle);
    const y = centerY + (radius + labelPadding) * Math.sin(angle);
    const textAnchor =
      Math.abs(angle) < 0.1
        ? "middle"
        : angle < -Math.PI / 2 || angle > Math.PI / 2
        ? "end"
        : "start";
    return { x, y, textAnchor, text: skill.name };
  });

  if (!mounted) return null;

  return (
    <div className="relative w-full max-w-[900px] mx-auto">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="[&_*]:transition-all [&_*]:duration-300 w-full h-auto"
      >
        {/* Background lines */}
        {Array.from({ length: 5 }, (_, i) => {
          const scale = (i + 1) * 0.2;
          const points = Array.from({ length: sides }, (_, j) => {
            const angle = j * angleStep - Math.PI / 2;
            const x = centerX + radius * scale * Math.cos(angle);
            const y = centerY + radius * scale * Math.sin(angle);
            return `${x},${y}`;
          }).join(" ");
          return (
            <polygon
              key={`bg-${i}`}
              points={points}
              fill="none"
              stroke="currentColor"
              strokeOpacity={0.1}
              strokeWidth={size * 0.001} // Make stroke width relative to size
            />
          );
        })}

        {/* Lines from center to vertices */}
        {Array.from({ length: sides }, (_, i) => {
          const angle = i * angleStep - Math.PI / 2;
          const x = centerX + radius * Math.cos(angle);
          const y = centerY + radius * Math.sin(angle);
          return (
            <line
              key={`line-${i}`}
              x1={centerX}
              y1={centerY}
              x2={x}
              y2={y}
              stroke="currentColor"
              strokeOpacity={0.1}
              strokeWidth={size * 0.001}
            />
          );
        })}

        {/* Background polygon */}
        <polygon
          points={backgroundPoints}
          fill="none"
          stroke="currentColor"
          strokeOpacity={0.2}
          strokeWidth={size * 0.001}
        />

        {/* Skills polygon */}
        <polygon
          points={skillPoints}
          fill="currentColor"
          fillOpacity={0.1}
          stroke="currentColor"
          strokeOpacity={0.8}
          strokeWidth={size * 0.002}
          className="text-primary"
        />

        {/* Labels */}
        {labels.map((label, i) => (
          <text
            key={`label-${i}`}
            x={label.x}
            y={label.y}
            textAnchor={label.textAnchor}
            dominantBaseline="middle"
            className={`font-medium fill-current ${
              size < 480 ? "text-xs" : "text-base"
            }`}
          >
            {label.text}
          </text>
        ))}
      </svg>
    </div>
  );
}
