"use client";
import { motion } from "motion/react";
import React from "react";
import { cn } from "@/lib/utils";

const SubHeading = ({
  as: Tag = "p",
  children,
  className,
}: {
  as?: "p" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px),y:10" }}
      whileInView={{ opacity: 1, filter: "blur(0px), y:0" }}
      transition={{
        duration: 0.3,
        delay: 0.2,
        ease: "easeInOut",
      }}
      viewport={{ once: true }}
    >
      <Tag
        className={cn(
          "text-secondary max-w-lg pt-4 text-sm md:text-base dark:text-white",
          className,
        )}
      >
        {children}
      </Tag>
    </motion.div>
  );
};

export default SubHeading;
