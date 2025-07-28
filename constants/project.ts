export type Project = {
  title: string;
  description: string;
  href: string;
  src: string;
};
export const projects: Project[] = [
  {
    title: "Consious",
    description:
      "Second brain web app for saving and searching links, notes, and media from various sources.",
    href: "https://concious-frontend.vercel.app/",
    src: "/lens.jpg",
  },
  {
    title: "Fintech",
    description:
      " Modern fintech landing page built with Next.js, TypeScript, and pure CSS - no external libraries.",
    src: "/macbook-scroll.png",
    href: "https://ftech-ten.vercel.app/",
  },
  {
    title: "Claudinary_Saas",
    description: " AI SaaS for one-click image resizing and video compression.",
    src: "/animated-testimonials.jpg",
    href: "https://cloudinary-saas-ai.netlify.app/",
  },
  {
    title: "Portfolio",
    description:
      "Personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.",
    src: "/animated-testimonials.jpg",
    href: "#",
  },
];
