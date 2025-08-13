import Container from "@/components/Container";
import { projects } from "@/constants/project";
import { Projects } from "@/components/Projects";
import { LandingBlogs } from "@/components/Landing-blogs";

import Heading from "@/components/Heading";
import SubHeading from "@/components/subHeading";
import { Testimonials } from "@/components/testimonials";
import Scales from "@/components/Scales";
import Skills from "@/components/SkillsSection";

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-8 md:pt-20 md:pb-10 ">
       <Scales/>
        <Heading>Kuldeep Jha</Heading>
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
