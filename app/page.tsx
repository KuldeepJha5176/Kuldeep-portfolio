import Container from "@/components/Container";
import { projects } from "@/constants/project";
import { Projects } from "@/components/Projects";
import { LandingBlogs } from "@/components/Landing-blogs";


import Heading from "@/components/Heading";
import SubHeading from "@/components/subHeading";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen p-15 md:pt-20 md:pb-10">
        <Heading>Kuldeep Jha</Heading>
        <SubHeading>
          I'm a software engineer with a passion for building scalable and
          efficient web applications. I'm excited to explore the world of web
          development and contribute to the open-source community.
        </SubHeading>
        <Projects projects={projects.slice(0, 3)} />
        <LandingBlogs />
        <Testimonials />
      </Container>
    </div>
  );
}
