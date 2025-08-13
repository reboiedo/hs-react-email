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
} from "@react-email/components";
import * as React from "react";

interface HarbourSpaceWelcomeEmailProps {
  userFirstname?: string;
  programName?: string;
  startDate?: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const HarbourSpaceWelcomeEmail = ({
  userFirstname = "Alex",
  programName = "Master in Data Science",
  startDate = "September 2024"
}: HarbourSpaceWelcomeEmailProps) => (
  <Html>
    <Head />
    <Preview>Welcome to Harbour.Space University - Your Journey Begins!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={logoContainer}>
          <Img
            src={`${baseUrl}/static/harbour-space-logo.png`}
            width="120"
            height="36"
            alt="Harbour.Space"
            style={logo}
          />
        </Section>
        <Heading style={h1}>Welcome to Harbour.Space University!</Heading>
        <Text style={heroText}>
          Dear {userFirstname},
        </Text>
        <Text style={text}>
          Congratulations! We're thrilled to welcome you to the {programName} program
          starting in {startDate}. You're about to embark on an exciting journey that will
          transform your career and open doors to incredible opportunities in technology.
        </Text>
        <Text style={text}>
          At Harbour.Space, you'll learn from industry leaders, work on real-world projects,
          and join a community of innovators from around the globe.
        </Text>
        
        <Section style={buttonContainer}>
          <Button style={button} href="https://harbour.space/student-portal">
            Access Student Portal
          </Button>
        </Section>
        
        <Text style={text}>
          What's next:
        </Text>
        <Text style={text}>
          • Check your email for enrollment details
          • Complete your visa application (if applicable)
          • Join our student community on Discord
          • Prepare for an amazing learning experience
        </Text>
        
        <Hr style={hr} />
        
        <Text style={footer}>
          Questions? Contact us at{" "}
          <Link href="mailto:admissions@harbour.space" style={link}>
            admissions@harbour.space
          </Link>
        </Text>
        <Text style={footer}>
          Harbour.Space University, Barcelona & Bangkok
        </Text>
      </Container>
    </Body>
  </Html>
);

export default HarbourSpaceWelcomeEmail;

// Styles
const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  maxWidth: "560px",
};

const logoContainer = {
  marginBottom: "32px",
};

const logo = {
  margin: "0 auto",
};

const h1 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
};

const heroText = {
  fontSize: "18px",
  lineHeight: "28px",
  marginBottom: "30px",
};

const text = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "26px",
  marginBottom: "16px",
};

const buttonContainer = {
  textAlign: "center" as const,
  margin: "32px 0",
};

const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  marginBottom: "4px",
};

const link = {
  color: "#5F51E8",
};