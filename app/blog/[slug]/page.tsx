import Container from "@/components/Container";
import { getSingleBlog } from "@/utils/mdx";
import { redirect } from "next/navigation";
import fs from "fs/promises";
import path from "path";
import { Navbar } from "@/components/navbar";

export async function generateStaticParams() {
  const files = await fs.readdir(path.join(process.cwd(), "data"));
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => ({
      slug: file.replace(/\.mdx$/, ""),
    }));
}

export async function generateMetadata(props: { params: { slug: string } }) {
  const { slug } = await props.params;
  const blog = await getSingleBlog(slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "This blog post does not exist.",
    };
  }

  return {
    title: blog.frontmatter.title + " by Kuldeep Jha",
    description: blog.frontmatter.description,
  };
}

// Page for a single blog post
export default async function SingleBlogPage(props: {
  params: { slug: string };
}) {
  const { slug } = await props.params; // ✅ await here too
  const blog = await getSingleBlog(slug);

  if (!blog) {
    redirect("/blog");
  }

  const { content, frontmatter } = blog;

  return (
    <Container className="min-h-[200vh] px-10 md:pt-10 md:pb-10">
      <Navbar />
      
      <article className="prose dark:prose-invert mx-auto">
      <h1 className="text-3xl font-bold">{frontmatter.title}</h1>
      <p className="text-muted mb-6 text-lg">{frontmatter.description}</p>
        {
      content}</article>
    </Container>
  );
}
