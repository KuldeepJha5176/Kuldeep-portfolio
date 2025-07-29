import React from "react";
import Marquee from "react-fast-marquee";
import SectionHeading from "./SectionHeading";

export const Testimonials = () => {
  const data = [
    {
      quote: `Kuldeep is so great with his work, he is always ready to help out and is a great team player. Highly recommended!`,
      name: `Aditya `,
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: `Working with Kuldeep was a fantastic experience. He brings creativity and dedication to every project.`,
      name: `Priya Sharma`,
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: `Kuldeep's attention to detail and problem-solving skills are top-notch. I highly recommend him for any development work.`,
      name: `Aryan Kumar`,
      avatar:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: `Kuldeep consistently delivers high-quality work on time. His communication skills are excellent.`,
      name: `Sneha Patel`,
      avatar:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote: `I appreciate Kuldeep's positive attitude and willingness to go the extra mile. A pleasure to work with!`,
      name: `Amit Singh`,
      avatar:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div className="py-10">
        <SectionHeading className="pb-4" delay={0.8}>
            People love my work
        </SectionHeading>
      <div className="flex  [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <Marquee speed={20} pauseOnHover className="py-4">
          {data.map((item, idx) => (
            <TestimonialCard key={`{testimonial-${idx}`} {...item} />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

const TestimonialCard = ({
  quote,
  name,
  avatar,
}: {
  quote: string;
  name: string;
  avatar: string;
}) => {
  return (
    <div className="shadow-custom mx-4 flex h-50 w-40 w-full max-w-60 flex-col justify-between gap-4 rounded-xl p-4 hover:shadow-md transition duration-300 hover:scale-[1.02]">
      <p className="text-sm text-neutral-700 dark:text-neutral-400">{quote}</p>
      <div className="flex items-center gap-4">
        <img
          src={avatar}
          alt={name}
          className="size-4 rounded-full object-cover"
        />
        <p className="text-sm text-neutral-500 dark:text-neutral-400">{name}</p>
      </div>
    </div>
  );
};
