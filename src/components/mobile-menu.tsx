"use client";

import { useState } from "react";
import Link from "next/link";
import { List, X } from "@phosphor-icons/react/dist/ssr";

interface MobileMenuProps {
  links: Array<{
    href: string;
    label: string;
  }>;
}

const MobileMenu = ({ links }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden flex items-center">
      <button
        onClick={toggleMenu}
        className="p-2 text-foreground hover:text-primary transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <List size={24} />}
      </button>

      {isOpen && (
        <div className="absolute top-14 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border/40">
          <div className="container mx-auto max-w-[1024px] py-4">
            <nav className="flex flex-col space-y-4 text-sm font-medium">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-primary px-4"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
