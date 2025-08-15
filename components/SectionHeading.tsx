"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
const SectionHeading = ({
  children,
  delay = 0,
  className,
}: {
  children: string;
  delay?: number;
  className?: string;
}) => {
  return (
    <div>
      <h2
        className={cn(
          "relative mt-4 w-fit max-w-lg text-sm font-normal md:text-base text-neutral-800 dark:text-neutral-300 ",
          className,
        )}
      >
        <Background />
        {children.split(" ").map((word, idx) => (
          <motion.span
            key={idx}
            initial={{ opacity: 0, filter: "blur(2px)", y: 5 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{
              duration: 0.3,
              delay: idx * 0.05 + delay,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
          >
            {word}
            {idx < children.split(" ").length - 1 ? " " : ""}
          </motion.span>
        ))}
      </h2>
    </div>
  );
};

const Background = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{
          duration: 0.3,
          delay: 1,
          ease: "easeInOut",
        }}
        className="absolute inset-0 h-full w-full scale-[1.04] bg-neutral-100 dark:bg-neutral-800 opacity-1"
      >
        <div className="absolute -top-px -left-px h-2 w-2 animate-pulse rounded-full bg-neutral-200 dark:bg-neutral-700"></div>
        <div className="absolute -top-px -right-px h-2 w-2 animate-pulse rounded-full bg-neutral-200 dark:bg-neutral-700"></div>
        <div className="absolute -bottom-px -left-px h-2 w-2 animate-pulse rounded-full bg-neutral-200 dark:bg-neutral-700"></div>
        <div className="absolute -right-px -bottom-px h-2 w-2 animate-pulse rounded-full bg-neutral-200 dark:bg-neutral-700"></div>
      </motion.div>
    </>
  );
};

export default SectionHeading;
