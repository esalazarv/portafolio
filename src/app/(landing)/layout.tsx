import Link from "next/link";
import { PropsWithChildren } from "react";

export default function LandingLayout({ children }: PropsWithChildren) {
  return (
    <main className="min-h-screen">
      <nav className="fixed w-full top-0 z-50 backdrop-blur-sm border-b border-border/40 bg-background/95">
        <div className="container mx-auto flex h-14 items-center">
          <div className="mr-4 flex">
            <Link
              className="mr-6 flex items-center space-x-2 text-lg font-bold"
              href="/"
            >
              <span className="text-primary">Eduardo Salazar</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link
                href="#about"
                className="transition-colors hover:text-primary"
              >
                About
              </Link>
              <Link
                href="#projects"
                className="transition-colors hover:text-primary"
              >
                Projects
              </Link>
              <Link
                href="#skills"
                className="transition-colors hover:text-primary"
              >
                Skills
              </Link>
              <Link
                href="#contact"
                className="transition-colors hover:text-primary"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </nav>
      {children}
    </main>
  );
}
