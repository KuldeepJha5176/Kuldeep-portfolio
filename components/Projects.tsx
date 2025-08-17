"use client";
import React from "react";
import Image from "next/image";
import {  motion } from "motion/react";
import Link from "next/link";

import { Project, projects as defaultProjects } from "@/constants/project";

import SectionHeading from "./SectionHeading";
export const Projects = ({
  projects = defaultProjects,
}: {
  projects?: Project[];
}) => {
  return (
    <div className="shadow-section-inset dark:shadow-section-inset-dark -mx-4 my-4 border-y border-neutral-100 py-6 sm:mx-0 sm:px-4 dark:border-neutral-800">
      <div className="px-4 sm:px-0">
        <SectionHeading delay={0.2}>
          I&apos;m a software engineer with a passion for building scalable and
          efficient web applications.
        </SectionHeading>
        <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                duration: 0.3,
                delay: idx * 0.1,
                ease: "easeInOut",
              }}
              key={project.title}
              className="group relative mb-4 h-72"
            >
              <Link href={project.href}>
                <Image
                  src={project.src}
                  alt={project.title}
                  height={300}
                  width={300}
                  className="w-full rounded-xl object-cover transition duration-200 group-hover:scale-[1.02]"
                />
                <h2 className="z-20 mt-2 font-medium tracking-tight text-neutral-500 dark:text-neutral-400">
                  {project.title}
                </h2>
                <p className="mt-2 max-w-xs text-sm text-neutral-500 dark:text-neutral-400">
                  {project.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
