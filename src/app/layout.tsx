import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Link from "next/link";
import Logo from "@/components/logo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eduardo Salazar - Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <nav className="fixed w-full top-0 z-50 backdrop-blur-sm border-b border-border/40 bg-background/95">
            <div className="container mx-auto max-w-[1024px] flex h-14 items-center">
              <div className="mr-4 flex">
                <Link
                  className="mr-6 flex items-center space-x-2 text-lg font-bold"
                  href="/"
                >
                  <div className="p-2">
                    <Logo color="hsl(var(--primary))" size={30} />
                  </div>
                  <div>
                    <span className="text-foreground">esalazarv</span>
                  </div>
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
                    href="#employers"
                    className="transition-colors hover:text-primary"
                  >
                    Experience
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
        </ThemeProvider>
      </body>
    </html>
  );
}
