"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const Tag = () => {
  const roles = [
    "Full Stack Engineer",
    "Software Engineer",
    "Front-end Engineer",
    "Back-end Engineer",
    "DevOps Engineer",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <motion.div
      className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white/50 px-3 py-1 text-xs text-gray-700"
      layout
      animate={{
        backgroundColor: [
          "rgba(0, 0, 0, 0)",
          "rgba(229, 231, 235, 0.3)",
          "rgba(0, 0, 0, 0)",
        ],
      }}
      transition={{
        layout: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
        backgroundColor: {
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={currentRoleIndex}
          className="inline-block whitespace-nowrap"
          style={{
            filter: "blur(0px)",
            transform: "none",
            transformOrigin: "50% 50% 0px",
            opacity: 1,
          }}
          initial={{
            opacity: 0,
            y: -10,
            x: 0,
            filter: "blur(4px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            x: [0, -2, 2, -1, 1, 0],
            filter: "blur(0px)",
          }}
          exit={{
            opacity: 0,
            y: 10,
            filter: "blur(4px)",
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            delay: 0.1,
            x: {
              duration: 0.5,
              ease: "easeInOut",
              times: [0, 0.2, 0.4, 0.6, 0.8, 1],
              delay: 0.1,
            },
            filter: {
              duration: 0.5,
              delay: 0.1,
            },
          }}
        >
          {roles[currentRoleIndex]}
        </motion.span>
      </AnimatePresence>
    </motion.div>
  );
};

export default Tag;
