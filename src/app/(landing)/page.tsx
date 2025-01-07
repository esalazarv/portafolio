import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto max-w-[980px] flex flex-col items-center text-center gap-8 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Full Stack Developer
            <br />
            <span className="text-primary">
              Building Modern Web Experiences
            </span>
          </h1>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-[700px]">
            I craft elegant solutions to complex problems, specializing in
            modern web technologies and scalable architectures.
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

      <section
        id="about"
        className="min-h-screen flex items-center justify-center py-20"
      >
        <div className="container mx-auto max-w-[980px] px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  About Me
                </h2>
                <p className="text-primary font-medium">
                  Full Stack Developer & Tech Enthusiast
                </p>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  With over 5 years of experience in web development, I
                  specialize in creating modern, efficient, and user-friendly
                  applications. My passion lies in solving complex problems with
                  clean, maintainable code.
                </p>
                <p>
                  I work with cutting-edge technologies like React, Next.js,
                  Node.js, and various cloud platforms to build scalable
                  solutions that make a real impact.
                </p>
              </div>
              <div className="flex flex-col gap-4 md:flex-row">
                <Link
                  href="#skills"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  View My Skills
                </Link>
                <Link
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-md border border-input px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  Check My Work
                </Link>
              </div>
            </div>
            <div className="relative aspect-square rounded-full border-2 border-primary/20 p-8">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent" />
              <div className="relative h-full rounded-full bg-muted flex items-center justify-center">
                <span className="text-4xl">👨‍💻</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
