"use client";
import React from "react";
import { motion } from "framer-motion";
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
          "max-w-lg pt-10 text-sm font-normal md:text-sm",
          className,
        )}
      >
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

export default SectionHeading;
