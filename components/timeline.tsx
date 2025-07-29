"use client";

import { useRef } from "react";
import React from "react";
import { useInView, motion } from "motion/react";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import { cn } from "@/lib/utils";

type Data = {
  title: string;
  content: Array<{
    title: string;
    description?: string;
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
          title: "Graduated from NIET",
          description:
            "I graduated from NIET with a Bachelor's degree in Computer Science and Engineering.",
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
        },
      ],
    },
  ];

  return (
    <div ref={ref} className="flex flex-col items-start justify-center">
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
            className="shadow-custom w-fit rounded-md px-2 py-0.5 mb-2 font-bold text-black"
          >
            {yearofStudy.title}
          </motion.h2>
          <div className="flex flex-col gap-4">
            <ul className="list-none pl-4">
              {yearofStudy.content.map((item, idx) => (
                <li key={idx}>
                  <Step className="flex gap-2" idx={idx} isInView={isInView}>
                    <motion.h3
                    initial={{ opacity: 0, 
                      y: -10,
                    }}
                      animate={{
                        opacity: isInView ? 1 : 0,
                        y: isInView ? 0 : 10,
                        transition: {
                          duration: 0.3,
                          ease: "easeInOut",
                          delay: 0.2 * idx,
                        },
                      }}
                      className=" text-neutral-800 dark:text-neutral-200"
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
