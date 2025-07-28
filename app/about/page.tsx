import Container from "@/components/Container";
import { Navbar } from "@/components/navbar";
import { Collage } from "@/components/collage";
import { Timeline } from "@/components/timeline";

import  Heading  from "@/components/Heading";
import SubHeading from "@/components/subHeading";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-[200vh] p-15 md:pt-20 md:pb-10">
        
        <Heading>About Me </Heading>
        <SubHeading>
          Hi, I'm Kuldeep Jha—a software engineer who loves turning ideas into
          reality through code. I enjoy building robust, user-friendly web
          applications and am always eager to learn new technologies. When I'm
          not coding, you can find me exploring open-source projects, writing
          about my experiences, or tinkering with new tools to improve my
          workflow.
        </SubHeading>
        <p className="text-secondary max-w-lg pt-4 text-sm md:text-base dark:text-white">
          I love to travel and explore new places. I'm a big fan of nature and
          love spending time outdoors.
        </p>

        <Collage />
        <p className="text-secondary max-w-lg pt-4 text-sm md:text-base dark:text-white">
          Here's a timeline of my life achievements.
        </p>
        <Timeline />
      </Container>
    </div>
  );
}
