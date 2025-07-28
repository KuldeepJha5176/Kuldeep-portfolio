import Container from "@/components/Container";
import { Navbar } from "@/components/navbar";
import { Projects } from "@/components/Projects";
import Heading from "@/components/Heading";
import SubHeading from "@/components/subHeading";

export default function ProjectsPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-[200vh] p-15 md:pt-20 md:pb-10">
        
        <Heading>Kuldeep Jha</Heading>
        <SubHeading>
        I'm a software engineer with a passion for building scalable and
          efficient web applications. I'm excited to explore the world of web
          development and contribute to the open-source community.
        </SubHeading>
        <Projects />
       
      </Container>
    </div>
  );
}
