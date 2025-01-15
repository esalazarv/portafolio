import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Link from "next/link";
import Logo from "@/components/logo";
import Footer from "@/components/footer";
import MobileMenu from "@/components/mobile-menu";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eduardo Salazar - Portfolio",
  description: "Full Stack Developer Portfolio",
};

const navigationLinks = [
  { href: "#about", label: "About" },
  { href: "#employers", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

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
            <div className="container mx-auto max-w-[1024px] flex h-14 items-center justify-between">
              <div className="flex items-center">
                <Link
                  className="mr-6 flex items-center space-x-2 text-lg font-bold"
                  href="/"
                >
                  <div className="p-2">
                    <Logo color="hsl(var(--primary))" size={40} />
                  </div>
                  <div>
                    <span className="text-foreground">esalazarv</span>
                  </div>
                </Link>
              </div>
              <div className="flex items-center">
                <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                  {navigationLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <MobileMenu links={navigationLinks} />
              </div>
            </div>
          </nav>
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
