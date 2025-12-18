import { ThemeToggle } from "@/components/ui/theme-toggle";
import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Image
            src="/images/soleach-logo.svg"
            alt="Soleach Digital Solutions"
            width={180}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </div>
        
        <nav className="flex items-center gap-6">
          <a
            href="#services"
            className="text-sm font-medium text-muted transition-colors hover:text-foreground dark:hover:text-accent"
          >
            Services
          </a>
          <a
            href="#contact"
            className="text-sm font-medium text-muted transition-colors hover:text-foreground dark:hover:text-accent"
          >
            Contact
          </a>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

