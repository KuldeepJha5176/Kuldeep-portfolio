import { compileMDX } from "next-mdx-remote/rsc";
import fs from "fs/promises";
import path from "path";

type BlogFrontmatter = {
  title: string;
  description: string;
  date: string;
  image: string;
};
  


export const getSingleBlog = async (slug: string) => {
  try {
    const singleBlog = await fs.readFile(
      path.join(process.cwd(), "/data/", `${slug}.mdx`),
      "utf8",
    );

    if (!singleBlog) {
      return null;
    }

    const { content, frontmatter } = await compileMDX<BlogFrontmatter>({
      source: singleBlog,
      options: { parseFrontmatter: true ,
        mdxOptions: {
          remarkPlugins: [],
          rehypePlugins: [],
        },
      },
    });

    return { content, frontmatter };
  } catch (error) {
    console.log(`error reading blog file for slug "${slug}":`, error);
  }
};

export const getAllBlogs = async () => {
    const files = await fs.readdir(path.join(process.cwd(), "/data"));

    const allBlogs = await Promise.all(files.map(async (file) => {
        const slug = file.replace(/\.mdx$/, "");
        const frontmatter = await getBlogFrontmatter(slug);
        return { slug, frontmatter };
    }));

    return allBlogs;
}

const getBlogFrontmatter = async (slug: string) => {
    const singleBlog = await fs.readFile(
      path.join(process.cwd(), "/data/", `${slug}.mdx`),
      "utf8",
    );

    if (!singleBlog) {
      return null;
    }

    const { frontmatter } = await compileMDX<BlogFrontmatter>({
      source: singleBlog,
      options: { parseFrontmatter: true },
    });

    return frontmatter;
  };