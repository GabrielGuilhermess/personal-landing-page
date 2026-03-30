"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV_ITEMS } from "@/data/navigation";
import { PERSONAL } from "@/data/personal";
import ThemeToggle from "@/design-system/components/ThemeToggle";
import { useMediaQuery } from "@/design-system/hooks/useMediaQuery";
import { useScrollspy } from "@/design-system/hooks/useScrollspy";
import { cn } from "@/design-system/lib/utils";

const SECTION_IDS = NAV_ITEMS.map((item) => item.href.replace("#", ""));

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const activeId = useScrollspy(SECTION_IDS, 120);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (isDesktop) {
      setIsMenuOpen(false);
    }
  }, [isDesktop]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled && "border-b border-[var(--border-color)] bg-[var(--header-bg)] shadow-card backdrop-blur-xl",
      )}
    >
      <div className="section-container">
        <div className="flex h-20 items-center justify-between gap-6">
          <a className="flex items-center gap-3" href="#hero" onClick={() => setIsMenuOpen(false)}>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-500 font-display text-lg font-bold text-white shadow-glow">
              G
            </span>
            <span className="font-display text-lg font-semibold tracking-tight">{PERSONAL.name}</span>
          </a>

          <nav className="hidden items-center gap-2 md:flex">
            {NAV_ITEMS.map((item) => {
              const isActive = activeId === item.href.replace("#", "");

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative rounded-xl px-4 py-2 text-sm font-medium transition-colors",
                    isActive ? "text-brand-500" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]",
                  )}
                >
                  {isActive ? (
                    <motion.div
                      layoutId="active-nav-indicator"
                      className="absolute inset-0 -z-10 rounded-xl bg-brand-500/10"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  ) : null}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsMenuOpen((currentState) => !currentState)}
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-primary)] transition-colors hover:border-brand-500 hover:text-brand-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 md:hidden"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="border-b border-[var(--border-color)] bg-[var(--bg-primary)] shadow-card md:hidden"
          >
            <nav className="section-container flex flex-col gap-2 py-4">
              {NAV_ITEMS.map((item) => {
                const isActive = activeId === item.href.replace("#", "");

                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={cn(
                      "rounded-2xl px-4 py-3 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-brand-500/10 text-brand-500"
                        : "text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)]",
                    )}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
