import Container from "@/components/Container";
import { projects } from "@/constants/project";
import { Projects } from "@/components/Projects";
import { LandingBlogs } from "@/components/Landing-blogs";

import Heading from "@/components/Heading";
import SubHeading from "@/components/subHeading";
import { Testimonials } from "@/components/testimonials";
import Scales from "@/components/Scales";
import Skills from "@/components/SkillsSection";
import Tag from "@/components/Tag";

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-8 md:pt-20 md:pb-10">
        <Scales />
        <div className="flex flex-col items-start sm:flex-row sm:items-center">
          <div className="order-last flex items-center sm:order-first">
            <Heading>Kuldeep Jha</Heading>
          </div>
          <div className="order-first flex items-center sm:order-last ">
            <Tag />
          </div>
        </div>
        <SubHeading>
          I'm a software engineer with a passion for building scalable and
          efficient Systems. I'm currently looking for job opportunities.
        </SubHeading>
        <Projects projects={projects.slice(0, 3)} />
        <LandingBlogs />
        <Skills />
        <Testimonials />
      </Container>
    </div>
  );
}
