"use client";

import React from "react";
import { motion } from "motion/react";
import SectionHeading from "./SectionHeading";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPrisma,
  SiGit,
  SiPostgresql,
  SiDocker,
  SiKubernetes,
  SiAmazon,
  SiDigitalocean,
  SiHelm,
} from "react-icons/si";

import {
  FaJava,
  FaDatabase,
  FaUsers,
  FaBrain,
  FaClock,
  FaComments,
  FaCloud,
  FaCodeBranch,
} from "react-icons/fa";

const skillsData = [
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#3178C6",
    category: "Languages",
  },
  { name: "Java", icon: FaJava, color: "#ED8B00", category: "Languages" },
  { name: "SQL", icon: FaDatabase, color: "#336791", category: "Languages" },

  { name: "React", icon: SiReact, color: "#61DAFB", category: "Frontend" },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "#000000",
    category: "Frontend",
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
    color: "#06B6D4",
    category: "Frontend",
  },

  { name: "Node.js", icon: SiNodedotjs, color: "#339933", category: "Backend" },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "#000000",
    category: "Backend",
  },

  { name: "MongoDB", icon: SiMongodb, color: "#47A248", category: "Database" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1", category: "Database" },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#336791",
    category: "Database",
  },
  { name: "Prisma", icon: SiPrisma, color: "#2D3748", category: "Database" },

  { name: "Docker", icon: SiDocker, color: "#2496ED", category: "DevOps" },
  {
    name: "Kubernetes",
    icon: SiKubernetes,
    color: "#326CE5",
    category: "DevOps",
  },
  { name: "AWS", icon: SiAmazon, color: "#FF9900", category: "DevOps" },
  {
    name: "Azure",
    icon: FaCloud,
    color: "#0078D4",
    category: "DevOps",
  },
  {
    name: "DigitalOcean",
    icon: SiDigitalocean,
    color: "#0080FF",
    category: "DevOps",
  },
  { name: "Helm", icon: SiHelm, color: "#0F1689", category: "DevOps" },
  { name: "ArgoCD", icon: FaCodeBranch, color: "#EF7B4D", category: "DevOps" },

  { name: "Git", icon: SiGit, color: "#F05032", category: "Tools" },

  {
    name: "Communication",
    icon: FaComments,
    color: "#4CAF50",
    category: "Soft Skills",
  },
  {
    name: "Teamwork",
    icon: FaUsers,
    color: "#2196F3",
    category: "Soft Skills",
  },
  {
    name: "Problem Solving",
    icon: FaBrain,
    color: "#9C27B0",
    category: "Soft Skills",
  },
  {
    name: "Time Management",
    icon: FaClock,
    color: "#FF9800",
    category: "Soft Skills",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100,
    },
  },
};

const Skills = () => {
  return (
    <div className="shadow-section-inset dark:shadow-section-inset-dark -mx-4 my-4 border-y border-neutral-100 py-6 sm:mx-0 sm:px-4 dark:border-neutral-800">
      <div className="px-4 sm:px-0">
        <SectionHeading className="mb-8" delay={0.6}>
          Technologies and tools I work with to build amazing applications
        </SectionHeading>

        <motion.div
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {skillsData.map((skill, index) => {
            const IconComponent = skill.icon;

            return (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  transition: { type: "spring", damping: 15, stiffness: 400 },
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative cursor-pointer rounded-xl border border-neutral-200 bg-white p-3 shadow-sm transition-shadow duration-200 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900"
              >
                <motion.div
                  className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-200 group-hover:opacity-5"
                  style={{ backgroundColor: skill.color }}
                />

                <div className="relative z-10 flex flex-col items-center space-y-2 text-center">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="text-2xl sm:text-3xl"
                    style={{ color: skill.color }}
                  >
                    <IconComponent />
                  </motion.div>

                  <span className="text-xs font-medium text-neutral-700 transition-colors duration-200 group-hover:text-neutral-900 sm:text-sm dark:text-neutral-300 dark:group-hover:text-white">
                    {skill.name}
                  </span>

                  <span className="rounded-full bg-neutral-100 px-2 py-1 text-[10px] text-neutral-600 opacity-0 transition-opacity duration-200 group-hover:opacity-100 dark:bg-neutral-800 dark:text-neutral-400">
                    {skill.category}
                  </span>
                </div>

                <motion.div
                  className="absolute top-0 right-0 left-0 h-1/3 rounded-t-xl bg-gradient-to-b from-white/20 to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100 dark:from-white/10"
                  initial={false}
                />
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
            Full-stack developer with expertise in modern web technologies and
            cloud infrastructure
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-xs text-neutral-500 dark:text-neutral-400">
            <span className="rounded bg-neutral-50 px-2 py-1 dark:bg-neutral-800 dark:text-neutral-300">
              Frontend
            </span>
            <span className="rounded bg-neutral-50 px-2 py-1 dark:bg-neutral-800 dark:text-neutral-300">
              Backend
            </span>
            <span className="rounded bg-neutral-50 px-2 py-1 dark:bg-neutral-800 dark:text-neutral-300">
              Database
            </span>
            <span className="rounded bg-neutral-50 px-2 py-1 dark:bg-neutral-800 dark:text-neutral-300">
              DevOps
            </span>
            <span className="rounded bg-neutral-50 px-2 py-1 dark:bg-neutral-800 dark:text-neutral-300">
              Cloud
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
