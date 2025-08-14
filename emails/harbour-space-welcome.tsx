import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";
import { emailTailwindConfig } from "./_utils/tailwind-config";
import { getLogoUrl } from "./_utils";

interface HarbourSpaceWelcomeEmailProps {
  userFirstname?: string;
  programName?: string;
  startDate?: string;
}

export const HarbourSpaceWelcomeEmail = ({
  userFirstname = "Alex",
  programName = "Master in Data Science",
  startDate = "September 2024"
}: HarbourSpaceWelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>Welcome to Harbour.Space University - Your Journey Begins!</Preview>
    <Tailwind config={emailTailwindConfig}>
      <Body className="bg-white font-sans">
        <Container className="mx-auto py-5 px-0 max-w-xl">
          <Section className="mb-8">
            <Img
              src={getLogoUrl("main").svg}
              width="120"
              height="36"
              alt="Harbour.Space"
              className="mx-auto"
            />
          </Section>
          <Heading className="text-gray-700 text-2xl font-bold my-10 p-0">
            Welcome to Harbour.Space University!
          </Heading>
          <Text className="text-lg leading-7 mb-8">
            Dear {userFirstname},
          </Text>
          <Text className="text-gray-700 text-base leading-relaxed mb-4">
            Congratulations! We're thrilled to welcome you to the {programName} program
            starting in {startDate}. You're about to embark on an exciting journey that will
            transform your career and open doors to incredible opportunities in technology.
          </Text>
          <Text className="text-gray-700 text-base leading-relaxed mb-4">
            At Harbour.Space, you'll learn from industry leaders, work on real-world projects,
            and join a community of innovators from around the globe.
          </Text>
          
          <Section className="text-center my-8">
            <Button 
              className="bg-purple-500 rounded text-white text-base no-underline text-center block p-3" 
              href="https://harbour.space/student-portal"
            >
              Access Student Portal
            </Button>
          </Section>
          
          <Text className="text-gray-700 text-base leading-relaxed mb-4">
            What's next:
          </Text>
          <Text className="text-gray-700 text-base leading-relaxed mb-4">
            • Check your email for enrollment details<br />
            • Complete your visa application (if applicable)<br />
            • Join our student community on Discord<br />
            • Prepare for an amazing learning experience
          </Text>
          
          <Hr className="border-gray-300 my-5" />
          
          <Text className="text-gray-500 text-xs mb-1">
            Questions? Contact us at{" "}
            <Link href="mailto:admissions@harbour.space" className="text-purple-500">
              admissions@harbour.space
            </Link>
          </Text>
          <Text className="text-gray-500 text-xs mb-1">
            Harbour.Space University, Barcelona & Bangkok
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default HarbourSpaceWelcomeEmail;