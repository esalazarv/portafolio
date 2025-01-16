import Link from "next/link";
import Image from "next/image";
import EmployersCarousel from "@/components/employers-carousel";
import ScrollIndicator from "@/components/scroll-indicator";
import SkillsChart from "@/components/skills-chart";

export default function Home() {
  return (
    <>
      <ScrollIndicator />
      <section className="h-screen flex items-center justify-center">
        <div className="container mx-auto max-w-[1024px] flex flex-col items-center text-center gap-8 px-4">
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
              href="#about"
              className="border border-input hover:bg-accent hover:text-accent-foreground px-8 py-4 rounded-md font-medium text-lg transition-colors"
            >
              View About
            </Link>
          </div>
        </div>
      </section>

      <section id="about" className="w-full py-24">
        <div className="container mx-auto max-w-[1024px] px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
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
                  href="#employers"
                  className="inline-flex items-center justify-center rounded-md border border-input px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  Check My Work Experience
                </Link>
              </div>
            </div>
            <div className="relative aspect-square rounded-full border-2 border-primary/20 p-8">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent" />
              <div className="relative h-full rounded-full bg-muted flex items-center justify-center overflow-hidden">
                <Image
                  src="/images/frog-portrait.png"
                  alt="Frog Portrait"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="w-full py-24">
        <div className="container mx-auto max-w-[1024px] px-4">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Skills & Technologies
              </h2>
              <p className="text-muted-foreground text-lg max-w-[700px] mx-auto">
                A comprehensive set of skills and technologies I use to build
                modern web applications
              </p>
            </div>
            <div className="flex flex-col gap-12">
              <div className="flex justify-center">
                <SkillsChart />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-4 p-6 rounded-lg border bg-card">
                  <h3 className="text-xl font-bold text-primary">Frontend</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>React & Next.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                    <li>HTML5 & CSS3</li>
                    <li>Redux & Context API</li>
                  </ul>
                </div>
                <div className="space-y-4 p-6 rounded-lg border bg-card">
                  <h3 className="text-xl font-bold text-primary">Backend</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Node.js & Express</li>
                    <li>Python & Django</li>
                    <li>RESTful APIs</li>
                    <li>GraphQL</li>
                    <li>MongoDB & PostgreSQL</li>
                  </ul>
                </div>
                <div className="space-y-4 p-6 rounded-lg border bg-card">
                  <h3 className="text-xl font-bold text-primary">
                    Tools & Others
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>Git & GitHub</li>
                    <li>Docker</li>
                    <li>AWS & Vercel</li>
                    <li>CI/CD</li>
                    <li>Agile Methodologies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="employers" className="w-full py-24">
        <div className="container mx-auto max-w-[1024px] px-4">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Work Experience
              </h2>
              <p className="text-muted-foreground text-lg max-w-[700px] mx-auto">
                Companies I&apos;ve had the pleasure to work with and contribute
                to their success
              </p>
            </div>
            <EmployersCarousel />
          </div>
        </div>
      </section>

      <section id="contact" className="w-full py-24">
        <div className="container mx-auto max-w-[1024px] px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Let&apos;s Connect
                </h2>
                <p className="text-primary font-medium">
                  Get in touch for opportunities or collaborations
                </p>
              </div>
              <p className="text-muted-foreground">
                I&apos;m always interested in hearing about new projects and
                opportunities. Feel free to reach out if you&apos;d like to work
                together!
              </p>
              <div className="flex gap-4">
                <a
                  href="mailto:your.email@example.com"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Email Me
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md border border-input px-6 py-3 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="relative aspect-square rounded-lg border-2 border-primary/20 p-8">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-primary/20 to-transparent" />
              <div className="relative h-full rounded-lg bg-card flex items-center justify-center">
                <span className="text-4xl">📧</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
