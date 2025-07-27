import Container from "@/components/Container";
import { Navbar } from "@/components/navbar";
import { Link } from 'next-view-transitions';
import { getAllBlogs } from "@/utils/mdx";

export const metadata = {
  title: "All blogs-Kuldeep Jha ",
  description: "All my general wisdom",
};

export default async function BlogsPage() {
  const allBlogs = await getAllBlogs();
  const truncate = (str: string, n: number) => {
    if (str.length <= n) return str;
    return str.slice(0, n) + "...";
  };
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-[200vh] p-4 md:pt-8 md:pb-8">
        <Navbar />
        <h1 className="text-primary text-2xl font-bold tracking-tight md:text-4xl dark:text-white">
          All blogs
        </h1>
        <p className="text-secondary max-w-lg pt-4 text-sm md:text-base dark:text-white">
          I'm a software engineer with a passion for building scalable and
          efficient web applications. I'm excited to explore the world of web
          development and contribute to the open-source community.
        </p>
        <div className="flex flex-col gap-4 py-10">
          {allBlogs.map((blog, idx) => (
            <Link
              key={idx}
              href={`/blog/${blog.slug}`}
              className="hover:border-primary flex flex-col gap-2 rounded-lg border border-neutral-300 p-4 transition duration-200 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-primary text-base font-bold tracking-tight dark:text-neutral-400">
                  {blog.frontmatter?.title}
                </h2>
                <p className="text-secondary max-w-lg pt-2 text-sm dark:text-neutral-400">
                  {new Date(blog.frontmatter?.date!).toLocaleDateString(
                    "en-us",
                    {
                      weekday: "long",
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    },
                  )}
                </p>
              </div>
              <p className="text-secondary max-w-lg pt-2 text-sm dark:text-neutral-400">
                {truncate(blog.frontmatter?.description || "", 150)}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
