"use client";

import { useRef } from "react";
import React from "react";
import { useInView, motion } from "motion/react";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import SectionHeading from "./SectionHeading";

type Data = {
  title: string;
  content: Array<{
    title: string;
    description?: string;
  }>;
};
export const Timeline = (Data:Data) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });

  const timeline = [
    {
      title: "2026",
      content: [
        {
          title: "Gratuated from NIET",
          description:
            "I will be graduating from NIET with a Bachelor's degree in Computer Science and Engineering.",
        },
      ],
    },
    {
      title: "2024",
      content: [
        {
          title: " Certification in FULL STACK DEVELOPMENT",
          description:
            "I completed my certification in FULL STACK DEVELOPMENT from Infosys Springboard.",
        },
      ],
    },
    {
      title: "2023",
      content: [
        {
          title: " Certification in Python for AI & Development",
          description:
            "I completed my certification in Python for AI & Development from IBM Coursera.",
        },
      ],
    },
    {
      title: "2021",
      content: [
        {
          title: "Completed my 12th class",
          description:
            "I completed my 12th class in CBSE from Isher Academy School.",
        },
      ],
    },
    {
      title: "2019",
      content: [
        {
          title: "Completed my 10th class",
          description:
            "I completed my 10th class in CBSE from R.S.R.D Saraswati vidya mandir school.",
        },
      ],
    },
  ];

  return (
    <div
      ref={ref}
      className="shadow-section-inset dark:shadow-section-inset-dark -mx-4 my-4 border-y border-neutral-100 py-6 sm:mx-0 sm:px-4 dark:border-neutral-800"
    >
      <div className="px-4 sm:px-0">
        <SectionHeading delay={0.2} className="mb-4 ml-3">
          Here's a timeline of my life achievements.
        </SectionHeading>
        {timeline.map((yearofStudy, idx) => (
          <div key={idx} className="mb-4">
            <motion.h2
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{
                filter: isInView ? "blur(0px)" : "blur(10px)",
                opacity: isInView ? 1 : 0,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
                delay: 0.1 * idx,
              }}
              className="shadow-custom mb-2 w-fit rounded-md px-2 py-0.5 font-bold text-neutral-900 dark:text-neutral-100"
            >
              {yearofStudy.title}
            </motion.h2>
            <div className="flex flex-col gap-4">
              <ul className="list-none pl-4">
                {yearofStudy.content.map((item, idx) => (
                  <li key={idx}>
                    <Step className="flex gap-2" idx={idx} isInView={isInView}>
                      <motion.h3
                        initial={{ opacity: 0, y: -10 }}
                        animate={{
                          opacity: isInView ? 1 : 0,
                          y: isInView ? 0 : 10,
                          transition: {
                            duration: 0.3,
                            ease: "easeInOut",
                            delay: 0.2 * idx,
                          },
                        }}
                        className="text-neutral-600 dark:text-neutral-400"
                      >
                        {item.title}
                      </motion.h3>
                    </Step>
                    {item.description && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{
                          opacity: isInView ? 1 : 0,
                          y: isInView ? 0 : 10,
                          transition: {
                            duration: 0.3,
                            ease: "easeInOut",
                            delay: 0.3 * idx,
                          },
                        }}
                        className="pt-1 pl-6 text-sm text-neutral-600 dark:text-neutral-400"
                      >
                        {item.description}
                      </motion.p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
const Step = ({
  className,
  children,
  idx,
  isInView,
}: {
  className: string;
  children: React.ReactNode;
  idx: number;
  isInView: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : -10,
        transition: {
          duration: 0.3,
          ease: "easeInOut",
          delay: 0.2 * idx,
        },
      }}
      className={cn("flex items-start gap-2", className)}
    >
      <IconCircleCheckFilled className="mt-1 h-4 w-4 text-neutral-500 dark:text-neutral-400" />

      {children}
    </motion.div>
  );
};
