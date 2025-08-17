"use client";
import React, { useState } from "react";
import Marquee from "react-fast-marquee";
import SectionHeading from "./SectionHeading";
import { toast } from "sonner";

export const Testimonials = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Enquiry from Portfolio",
          email,
          message:
            "Someone is interested in working with you from your portfolio !",
        }),
      });

      if (response.ok) {
        toast.success("Enquiry sent successfully! I'll get back to you soon.");
        setEmail("");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <div className="shadow-section-inset dark:shadow-section-inset-dark -mx-4 my-4 border-y border-neutral-100 py-6 sm:mx-0 sm:px-4 dark:border-neutral-800">
      <div className="px-4 sm:px-0">
      <SectionHeading className="mb-4" delay={0.8}>
        People love my work
      </SectionHeading>
      <div className="flex [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
        <Marquee speed={20} pauseOnHover className="py-4">
          {data.map((item, idx) => (
            <TestimonialCard key={`{testimonial-${idx}`} {...item} />
          ))}
        </Marquee>
      </div>
      <div className="mt-16">
        <SectionHeading delay={0.8}>Get in touch</SectionHeading>
        <p className="text-secondary max-w-lg pt-4 text-sm md:text-base">
          I'm currently looking for new opportunities. Whether you have a
          question or want to say hi, hit that button.
        </p>
        <form onSubmit={handleSubmit} className="relative mt-4 max-w-lg">
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg bg-white px-4 py-3 pr-[120px] text-sm text-neutral-700 shadow-[var(--shadow-custom)] focus:ring-2 focus:ring-neutral-300 focus:outline-none dark:bg-neutral-800 dark:text-neutral-200"
            required
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="absolute top-1/2 right-1 -translate-y-1/2 rounded-md border border-neutral-200 bg-neutral-100 px-4 py-1.5 text-sm text-neutral-700 shadow-[0px_4px_8px_0px_var(--color-neutral-200)_inset] transition-colors hover:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 dark:shadow-[0px_4px_8px_0px_var(--color-neutral-700)_inset]"
          >
            {isSubmitting ? "Sending..." : "Send Enquiry"}
          </button>
        </form>
      </div>
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
    <div className="shadow-custom mx-4 flex h-50 w-40 w-full max-w-60 flex-col justify-between gap-4 rounded-xl p-4 transition duration-300 hover:scale-[1.02] hover:shadow-md">
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
