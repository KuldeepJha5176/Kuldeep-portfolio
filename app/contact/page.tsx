import Container from "@/components/Container";

import Heading from "@/components/Heading";
import SubHeading from "@/components/subHeading";
import ContactForm from "@/components/ContactForm";
import Scales from "@/components/Scales";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen px-8 md:pt-20 md:pb-10">
        <Scales />
        <Heading>Contact Me</Heading>
        <SubHeading>
          I am open to job opportunities. Feel free to reach out to me for any
          inquiries.
        </SubHeading>
        <ContactForm />
      </Container>
    </div>
  );
}
