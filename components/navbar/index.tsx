"use client";
import React from "react";
import Container from "../Container";
import Image from "next/image";
import { Link } from "next-view-transitions";
import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const navItems = [
    { title: "About", href: "/about" },
    { title: "Projects", href: "/projects" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
  ];

  const [hovered, setHovered] = useState<number | null>(null);
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const y = useTransform(scrollY, [0, 100], [0, 10]);
  const width = useTransform(scrollY, [0, 100], ["65%", "55%"]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isMdUp, setIsMdUp] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 20) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

 
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const stored = localStorage.getItem("theme");
      const prefersDark = window.matchMedia?.(
        "(prefers-color-scheme: dark)",
      ).matches;
      const shouldDark = stored ? stored === "dark" : prefersDark;
      document.documentElement.classList.toggle("dark", shouldDark);
      setIsDark(shouldDark);
    } catch {}
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mql = window.matchMedia("(min-width: 768px)");
    const handle = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsMdUp("matches" in e ? e.matches : (e as MediaQueryList).matches);
    };
    handle(mql);
    const listener = (e: MediaQueryListEvent) => handle(e);
    mql.addEventListener?.("change", listener);
    return () => mql.removeEventListener?.("change", listener);
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    try {
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  const toggleMenu = () => setIsMenuOpen((v) => !v);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (isMenuOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [isMenuOpen]);

  return (
    <Container className="relative mx-auto h-full w-full max-w-4xl bg-white pt-10 md:pt-0 dark:bg-neutral-900">
      <motion.nav
        style={{
          backdropFilter: scrolled ? "blur(10px)" : "blur(0px)",
          boxShadow: scrolled ? "var(--shadow-custom)" : "none",
          width: isMdUp ? (width as unknown as string) : "100%",
          y,
        }}
        transition={{
          duration: 0.3,
          ease: "linear",
        }}
        className="fixed inset-x-0 top-0 z-50 mx-auto flex max-w-full items-center justify-between rounded-none bg-white p-2 px-3 py-2 sm:max-w-4xl sm:rounded-full sm:bg-white/50 sm:backdrop-blur-sm dark:bg-neutral-950 sm:dark:bg-neutral-900/50"
      >
        <Link href="/">
          <div className="relative overflow-hidden rounded-full">
            <Image
              className="h-10 w-10 rounded-full"
              src="/avatar3.jpg"
              alt="avatar"
              width={100}
              height={100}
              loading="lazy"
            />
            <div
              className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white to-transparent blur-sm"
              style={{
                opacity: 0,
                transform: "translateX(-50px) rotate(15deg)",
              }}
            />
          </div>
        </Link>

        <div className="flex items-center gap-2">
          {/* Desktop Dark Mode Toggle */}
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="relative hidden h-9 w-9 items-center justify-center rounded-full text-neutral-700 hover:bg-neutral-100 md:inline-flex dark:text-neutral-200 dark:hover:bg-neutral-800"
          >
            {isDark ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-4 md:flex">
            {navItems.map((item, idx) => (
              <Link
                href={item.href}
                key={idx}
                className="relative px-2 py-1 text-sm text-neutral-700 hover:text-neutral-900 dark:text-neutral-200 dark:hover:text-white"
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
              >
                {hovered === idx && (
                  <motion.span
                    layoutId="hovered-span"
                    className="absolute inset-0 h-full w-full rounded-md bg-neutral-100 dark:bg-neutral-800"
                  />
                )}
                <span className="relative z-10">{item.title}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            onClick={toggleMenu}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-neutral-700 hover:bg-neutral-100 md:hidden dark:text-neutral-200 dark:hover:bg-neutral-800"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Full-Screen Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="fixed inset-0 z-[60] flex h-svh w-screen flex-col bg-white md:hidden dark:bg-neutral-950"
            >
              <div className="relative flex h-full w-full flex-col pt-14">
                {/* Close Button */}
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setIsMenuOpen(false)}
                  className="absolute top-5 right-5 inline-flex h-10 w-10 items-center justify-center rounded-full text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {/* Menu Content */}
                <div className="flex grow items-center justify-center">
                  <nav className="flex flex-col items-center gap-8">
                    {navItems.map((item, idx) => (
                      <motion.div
                        key={`m-${idx}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.1 + 0.2 }}
                      >
                        <Link
                          href={item.href}
                          className="text-2xl font-semibold text-neutral-900 hover:text-neutral-600 dark:text-white dark:hover:text-neutral-300"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.title}
                        </Link>
                      </motion.div>
                    ))}

                    {/* Mobile: dark mode toggle inline with pages */}
                    <motion.button
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: navItems.length * 0.1 + 0.25 }}
                      type="button"
                      aria-label="Toggle theme"
                      onClick={toggleTheme}
                      className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800"
                    >
                      {isDark ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
                          <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path>
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                      )}
                    </motion.button>
                  </nav>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </Container>
  );
};
