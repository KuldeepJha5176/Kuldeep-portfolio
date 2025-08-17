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
      <Container className="min-h-screen px-8 pt-10 md:pt-16 md:pb-10">
        <Scales />
        <div className="-mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="flex flex-col sm:flex-row sm:items-center">
            <Heading>Kuldeep Jha</Heading>
            <Tag />
          </div>
          <SubHeading>
            I&apos;m a software engineer with a passion for building scalable
            and efficient Systems. I&apos;m currently looking for job
            opportunities.
          </SubHeading>
        </div>

        <Projects projects={projects.slice(0, 3)} />
        <LandingBlogs />
        <Skills />
        <Testimonials />
      </Container>
    </div>
  );
}
