import Container from "@/components/Container";
import { Navbar } from "@/components/navbar";

export const metadata = {
  title: "All blogs-Kuldeep Jha ",
  description: "All my general wisdom",
};

export default function BlogsPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-[200vh] p-4 md:pt-20 md:pb-10">
        <Navbar />
        <h1 className="text-primary text-2xl font-bold tracking-tight md:text-4xl dark:text-white">
          All blogs
        </h1>
        <p className="text-secondary max-w-lg pt-4 text-sm md:text-base dark:text-white">
          I'm a software engineer with a passion for building scalable and
          efficient web applications. I'm excited to explore the world of web
          development and contribute to the open-source community.
        </p>
      
      </Container>
    </div>
  );
}
