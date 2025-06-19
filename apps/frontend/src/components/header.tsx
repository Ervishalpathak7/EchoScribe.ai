"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";

export function Header() {
  const pathname = usePathname();
  const isAuthPage = pathname.includes("/auth");
  const isDashboardPage = pathname.includes("/dashboard");

  if (isAuthPage) {
    return (
      <header className="border-b border-border">
        <div className="container flex h-16 items-center justify-between">
          <Logo />
        </div>
      </header>
    );
  }

  if (isDashboardPage) {
    return null; // Dashboard has its own navigation
  }

  return (
    <header className="border-b border-border flex items-center ">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between ">
        <Logo />
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/#features"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </Link>
          <Link
            href="/#testimonials"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Testimonials
          </Link>
          <Link
            href="/pricing"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/contact"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/auth/login">
            <Button variant="ghost" size="sm">
              Log in
            </Button>
          </Link>
          <Link href="/auth/signup">
            <Button size="sm">Get Started</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
