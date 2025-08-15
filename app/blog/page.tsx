import Container from "@/components/Container";
import { Navbar } from "@/components/navbar";
import { Link } from "next-view-transitions";
import { getAllBlogs } from "@/utils/mdx";
import Heading from "@/components/Heading";
import SubHeading from "@/components/subHeading";
import { MotionDiv } from "@/components/Motion-div";
import Scales from "@/components/Scales";

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
      <Container className="min-h-screen px-8 md:pt-20 md:pb-10">
        <Scales />
        <Navbar />
        <Heading>All blogs</Heading>
        <SubHeading>
          I'm a software engineer with a passion for building scalable and
          efficient web applications. I'm excited to explore the world of web
          development and contribute to the open-source community.
        </SubHeading>
        <div className="shadow-section-inset dark:shadow-section-inset-dark my-4 border-y border-neutral-100 px-4 py-6 dark:border-neutral-800">
          <div className="flex flex-col gap-8 px-4 py-10">
            {allBlogs.map((blog, idx) => (
              <MotionDiv
                key={idx}
                initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: idx * 0.1,
                  ease: "easeInOut",
                }}
              >
                <Link
                  key={idx}
                  href={`/blog/${blog.slug}`}
                  className="flex flex-col gap-2 rounded-lg p-4 transition duration-200 hover:shadow-md "
                >
                  <div className="flex items-center justify-between">
                    <h2 className="text-primary dark:text-neutral-100 text-base font-bold tracking-tight">
                      {blog.frontmatter?.title}
                    </h2>
                    <p className="text-secondary dark:text-neutral-400 max-w-lg pt-2 text-sm">
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
              </MotionDiv>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
