import React from "react";
import { getAllBlogs } from "@/utils/mdx";
import { Link } from "next-view-transitions";
import SectionHeading from "./SectionHeading";

export const LandingBlogs = async () => {
  const allBlogs = await getAllBlogs();
  const truncate = (str: string, n: number) => {
    if (str.length <= n) return str;
    return str.slice(0, n) + "...";
  };
  return (
    <div className="">
      <SectionHeading delay={0.4} className="pb-6">
        I love writing about my experiences and learnings.
      </SectionHeading>
      <div className="flex flex-col gap-8">
        {allBlogs.slice(0, 3).map((blog, idx) => (
          <Link
            key={idx}
            href={`/blog/${blog.slug}`}
            className="hover:border-primary flex flex-col gap-2 rounded-lg border border-neutral-300 p-4 transition duration-200 hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-primary text-base font-bold tracking-tight dark:text-neutral-400">
                {blog.frontmatter?.title}
              </h2>
              <p className="text-secondary max-w-lg pt-4 text-sm dark:text-neutral-400">
                {new Date(blog.frontmatter?.date!).toLocaleDateString("en-us", {
                  weekday: "long",
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </div>
            <p className="text-secondary max-w-lg pt-2 text-sm dark:text-neutral-400">
              {truncate(blog.frontmatter?.description || "", 120)}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};
