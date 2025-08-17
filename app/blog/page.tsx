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
        <div className="-mx-4 sm:mx-0 sm:px-4">
          <div className="px-4 sm:px-0">
            <Heading>All blogs</Heading>
            <SubHeading>
              I'm a software engineer with a passion for building scalable and
              efficient web applications. I'm excited to explore the world of
              web development and contribute to the open-source community.
            </SubHeading>
          </div>
        </div>
        <div className="shadow-section-inset dark:shadow-section-inset-dark -mx-4 my-4 border-y border-neutral-100 py-6 sm:mx-0 sm:px-4 dark:border-neutral-800">
          <div className="px-4 sm:px-0">
            <div className="flex flex-col gap-8 py-2">
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
                    className="flex flex-col gap-2 rounded-lg p-4 transition duration-200 hover:shadow-md"
                  >
                    <div className="flex flex-col justify-between md:flex-row md:items-center">
                      <h2 className="text-primary text-base font-bold tracking-tight dark:text-neutral-100">
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
                </MotionDiv>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
