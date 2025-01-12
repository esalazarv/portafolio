interface LogoProps {
  color?: string;
  size?: number;
  className?: string;
}

export default function Logo({ color = "currentColor", size = 56, className = "" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="144.8 198.13 305.4 353.57"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill={color}
    >
      <polygon points="218.65,270.7 426.59,390.75 426.59,449.68 375.56,479.14 167.62,359.09 167.62,300.16"/>
      <polygon points="167.62,273.35 167.62,293.42 314.87,208.39 297.9,198.13"/>
      <polygon points="426.59,477.4 426.59,456.42 279.37,541.47 297.1,551.7"/>
      <polygon points="291.48,527.93 274.37,538.12 144.8,463.31 144.8,443.37"/>
      <polygon points="303.52,222.46 320.63,212.27 450.2,287.08 450.2,307.01"/>
      <polygon points="369.24,482.79 297.1,524.44 144.8,436.54 144.8,286.53 161.78,276.72 161.78,384.79 297.9,466.48 321.26,455.15"/>
      <polygon points="225.76,267.84 297.9,226.19 450.2,314.08 450.2,464.1 433.22,473.91 433.22,365.84 297.1,284.14 273.74,295.48"/>
    </svg>
  );
}
