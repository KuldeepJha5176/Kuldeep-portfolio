import Container from "@/components/Container";
import { Collage } from "@/components/collage";
import { Timeline } from "@/components/timeline";

import Heading from "@/components/Heading";
import SubHeading from "@/components/subHeading";
import SectionHeading from "@/components/SectionHeading";
import Scales from "@/components/Scales";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-8 pt-10 md:pt-16 md:pb-10">
        <Scales />
        <Heading>About Me </Heading>
        <SubHeading>
          Hi, I&apos;m Kuldeep Jha—a software engineer who loves turning ideas into
          reality through code. I enjoy building robust, user-friendly web
          applications and am always eager to learn new technologies. When I&apos;m
          not coding, you can find me exploring open-source projects, writing
          about my experiences, or tinkering with new tools to improve my
          workflow.
        </SubHeading>
        <SectionHeading delay={0.2} className="mb-4 ml-3">
          I love to travel and explore new places.
        </SectionHeading>

        <Collage />
        <Timeline />
      </Container>
    </div>
  );
}
