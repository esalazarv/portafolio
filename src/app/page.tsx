import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <nav className="fixed w-full top-0 z-50 backdrop-blur-sm border-b border-border/40 bg-background/95">
        <div className="container mx-auto flex h-14 items-center">
          <div className="mr-4 flex">
            <Link className="mr-6 flex items-center space-x-2 text-lg font-bold" href="/">
              <span className="text-primary">Eduardo Salazar</span>
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-primary">
                About
              </Link>
              <Link href="#projects" className="transition-colors hover:text-primary">
                Projects
              </Link>
              <Link href="#skills" className="transition-colors hover:text-primary">
                Skills
              </Link>
              <Link href="#contact" className="transition-colors hover:text-primary">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </nav>

      <section className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto max-w-[980px] flex flex-col items-center text-center gap-8 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Full Stack Developer
            <br />
            <span className="text-primary">Building Modern Web Experiences</span>
          </h1>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-[700px]">
            I craft elegant solutions to complex problems, specializing in modern web technologies
            and scalable architectures.
          </p>
          <div className="flex gap-4 mt-4">
            <Link
              href="#contact"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-md font-medium text-lg transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="#projects"
              className="border border-input hover:bg-accent hover:text-accent-foreground px-8 py-4 rounded-md font-medium text-lg transition-colors"
            >
              View Projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
