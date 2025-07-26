"use client";
import React from 'react'
import Image from 'next/image';
import {easeInOut, motion} from 'motion/react'
import Link from 'next/link';
 export const Projects = () => {
    const projects = [
        {
            title: "Consious",
            description: "Consciousapp: A second brain web app to save and search links, notes, & other media from various sources effortlessly.",
            href: "/https://concious-frontend.vercel.app/",
            src:"/Conscious.png"
        },
        {
            title: "Fintech",
            description: " Ftech is a sleek, modern fintech-inspired landing page built using Next.js, TypeScript, and pure CSS—with no external UI libraries or CSS frameworks.",
            src:"/Fintech.png",
            href: "/https://ftech-ten.vercel.app/",
        },
        {
            title: "Claudinary_Saas",
            description: " A online ai-saas applicaation that lets you do download different aspects ratio images for thumnails,cover,posts in one click and also lets you compress your video size",
            src:"/animated-testimonials.jpg",
            href: "/https://cloudinary-saas-ai.netlify.app/",
        }
    ];
  return (
    <div className='py-10 '>
        <p className='text-secondary max-w-lg pt-4 text-sm md:text-sm'>
            I'm a software engineer with a passion for building scalable and efficient web applications.
            
        </p>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 py-4'>
            {projects.map((project,idx) => <motion.div 
            initial={{opacity:0, filter: "blur(10px)", y:10}}
            whileInView={{opacity:1, filter: "blur(0px)", y: 0}}
            transition={{
                duration: 0.3,
                delay: idx*0.1,
                ease: "easeInOut"
            }}
            key={project.title}
            className="group relative h-72 mb-4">
                <Link href={project.href}>
                <Image src={project.src} alt={project.title} height={300} width={300} 
                className=" rounded-xl object-cover w-full transition duration-200 group-hover:scale-[1.02]" />
                <h2 className=" z-20 mt-2 tracking-tight font-medium text-neutral-500 dark:text-neutral-400">{project.title}</h2>
                <p className='max-w-xs mt-2 text-sm text-neutral-500 dark:text-neutral-400'>
                    {project.description}
                </p>
                </Link>
                </motion.div>)}
            </div>
    </div>
  )
};


