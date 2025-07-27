"use client";
import React from "react";
import Container from "../Container";
import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { s, tr } from "framer-motion/client";
export const Navbar = () => {
  const navItems = [
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Contact",
      href: "/contact",
    },
    {
      title: "Blog",
      href: "/blog",
    },
  ];
  const [hovered, setHovered] = useState<number | null>(null);
  const {scrollY} = useScroll();
  const [scrooled, setScrooled] = useState(false);
  const y = useTransform(scrollY, [0, 100], [0, 10]);
  const width = useTransform(scrollY, [0, 100], ["80%", "55%"]);

  useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 20) {
            setScrooled(true);
        }else{
            setScrooled(false);
        }
        
    });
  return (
    <Container>
      <motion.nav
      style={{
        backdropFilter: scrooled ? "blur(10px)" : "blur(0px)",
        boxShadow: scrooled ? "var(--shadow-custom)" : "none",
        width,
        y
      }}
      transition={{
        duration: 0.3,
        ease: "linear",
      }}
       className=" fixed inset-x-0 top-0  max-w-4xl mx-auto flex items-center justify-between p-2 px-3 py-2 dark:bg-neutral-900 rounded-full  ">
        <Link href="/">
        <Image
          className="h-10 w-10 rounded-full"
          src="/avatar3.jpg"
          alt="avatar"
          width={100}
          height={100}
        />
        </Link>
        <div className="flex items-center gap-4">
          {navItems.map((item, idx) => (
            <Link
              href={item.href}
              key={idx}
              className="text-primary hover:text-secondary relative px-2 py-1 text-sm"
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
      </motion.nav>
    </Container>
  );
};
