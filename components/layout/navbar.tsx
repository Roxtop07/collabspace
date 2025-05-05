"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { 
  User, 
  LogOut, 
  Menu, 
  X, 
  Moon, 
  Sun 
} from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { data: session } = useSession();
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/#features" },
    { name: "Pricing", href: "/#pricing" },
  ];

  const authenticatedNavItems = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Teams", href: "/teams" },
    { name: "Whiteboard", href: "/whiteboard" },
    { name: "Chat", href: "/chat" },
  ];

  const displayItems = session ? authenticatedNavItems : navItems;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-2xl">CollabSpace</span>
          </Link>
          <nav className="hidden md:flex gap-6 ml-6">
            {displayItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full">
                {theme === "dark" ? (
                  <Moon className="h-4 w-4" />
                ) : (
                  <Sun className="h-4 w-4" />
                )}
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {session ? (
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="icon"
                asChild
              >
                <Link href="/profile">
                  <User className="h-4 w-4" />
                  <span className="sr-only">Profile</span>
                </Link>
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                <LogOut className="h-4 w-4" />
                <span className="sr-only">Sign out</span>
              </Button>
            </div>
          ) : (
            <div className="hidden md:flex gap-2">
              <Button variant="ghost" asChild>
                <Link href="/auth/signin">Sign In</Link>
              </Button>
              <Button asChild>
                <Link href="/auth/signup">Sign Up</Link>
              </Button>
            </div>
          )}

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background pt-16 md:hidden">
          <nav className="container grid gap-6 py-8">
            {displayItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 text-lg font-medium"
                onClick={toggleMobileMenu}
              >
                {item.name}
              </Link>
            ))}
            
            {!session ? (
              <>
                <Button variant="ghost" className="w-full justify-start" asChild>
                  <Link href="/auth/signin" onClick={toggleMobileMenu}>
                    Sign In
                  </Link>
                </Button>
                <Button className="w-full justify-start" asChild>
                  <Link href="/auth/signup" onClick={toggleMobileMenu}>
                    Sign Up
                  </Link>
                </Button>
              </>
            ) : (
              <Button
                variant="destructive"
                className="w-full justify-start"
                onClick={() => {
                  signOut({ callbackUrl: "/" });
                  toggleMobileMenu();
                }}
              >
                Sign Out
              </Button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}