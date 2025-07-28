import Container from "@/components/Container";

import Heading from "@/components/Heading";
import SubHeading from "@/components/subHeading";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-[200vh] p-15 md:pt-20 md:pb-10">
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
