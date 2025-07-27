"use client";

import { useRef } from "react";
import React from "react";
import { useInView, motion } from "motion/react";
import { i } from "framer-motion/client";

type Data = {
  title: string;
  content: Array<{
    title: string;
    description?: string;
    icon?: string;
  }>;
};
export const Timeline = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });

  const timeline = [
    {
      title: "2022",
      content: [
        {
          title: "Graduated from University of Delhi",
          description:
            "I graduated from University of Delhi with a Bachelor's degree in Computer Science and Engineering.",
          icon: "🎓",
        },
      ],
    },
    {
      title: "2021",
      content: [
        {
          title: "Completed my internship at Figma",
          description:
            "I interned at Figma as a Software Engineer, where I worked on various projects related to design systems and user experience.",
          icon: "💻",
        },
      ],
    },
    {
      title: "2020",
      content: [
        {
          title: "Completed my internship at Google",
          description:
            "I interned at Google as a Software Engineer, where I worked on various projects related to web development and data analysis.",
          icon: "💻",
        },
      ],
    },
    {
      title: "2019",
      content: [
        {
          title: "Completed my internship at Adobe",
          description:
            "I interned at Adobe as a Software Engineer, where I worked on various projects related to web development and user experience.",
          icon: "💻",
        },
      ],
    },
    {
      title: "2018",
      content: [
        {
          title: "Completed my internship at Microsoft",
          description:
            "I interned at Microsoft as a Software Engineer, where I worked on various projects related to web development and user experience.",
          icon: "💻",
        },
      ],
    },
  ];

  return (
    <div ref={ref} className="flex flex-col items-center justify-center">
      {timeline.map((yearofStudy, idx) => (
        <div key={idx}>
          <motion.h2
            animate={{
              filter: isInView ? "blur(0px)" : "blur(10px)",
              opacity: isInView ? 1 : 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
              delay: 0.1 * idx,
            }}
            className="font-bold text-black"
          >
            {yearofStudy.title}
          </motion.h2>
          <ul>
            {yearofStudy.content.map((item, idx) => (
              <li key={idx}>
                <div className="pl-4">
                  <motion.span
                  animate={{
                    filter: isInView ? "blur(0px)" : "blur(10px)",
                    opacity: isInView ? 1 : 0,
                    y: isInView ? 0 : 10,
                    transition: {
                      duration: 0.3,
                      ease: "easeInOut",
                      delay: 0.1 * idx,
                    },
                  }} 
                  >{item.icon}</motion.span>
                  <motion.h3 
                  animate={{
                    opacity: isInView ? 1 : 0,
                    y: isInView ? 0 : 10,
                    transition: {
                      duration: 0.3,
                      ease: "easeInOut",
                      delay: 0.2 * idx,
                    },
                  }}className="text-neutral-800 dark:text-neutral-200"
                  >{item.title}</motion.h3>
                  {item.description && <p className="pt-2 text-neutral-600 dark:text-neutral-400">{item.description}</p>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
