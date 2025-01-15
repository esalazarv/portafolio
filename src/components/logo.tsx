interface LogoProps {
  color?: string;
  size?: number;
  className?: string;
}

export default function Logo({
  color = "currentColor",
  size = 56,
  className = "",
}: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 447 522"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill={color}
    >
      <polygon points="223.5,489.62 383.84,397.05 383.84,370.5 200.67,476.44" />
      <polygon points="223.5,32.38 63.16,124.95 63.16,151.5 246.33,45.56" />
      <polygon points="25.51,348.83 25.51,375.31 186.08,468.01 209.07,454.74" />
      <polygon points="421.49,172.9 421.49,146.42 260.92,53.72 237.93,66.99" />
      <polygon points="129.16,130.32 63.16,168.43 63.16,244.63 318.07,391.81 383.84,353.57 383.84,277.37" />
      <polygon points="223.5,446.15 25.51,330.87 25.51,146.69 48.5,133.42 48.5,275.18 184.7,359.61 209.07,345.54 303.82,400.04" />
      <polygon points="223.5,75.85 421.49,191.13 421.49,375.31 398.5,388.58 398.5,246.83 262.3,162.4 237.93,176.46 143.18,121.96" />
    </svg>
  );
}
