import { render } from "@react-email/components";
import sendgrid from "@sendgrid/mail";
import { ReactElement } from "react";

// Initialize SendGrid with API key
sendgrid.setApiKey(process.env.SENDGRID_API_KEY || "");

export interface EmailOptions {
  from: string;
  to: string | string[];
  subject: string;
  template: ReactElement;
  templateProps?: Record<string, any>;
}

export async function sendEmail(options: EmailOptions) {
  try {
    // Render React Email component to HTML
    const emailHtml = await render(options.template);

    const emailData = {
      from: options.from,
      to: options.to,
      subject: options.subject,
      html: emailHtml,
    };

    // Send email via SendGrid
    const response = await sendgrid.send(emailData);
    console.log("Email sent successfully:", response[0].statusCode);
    return response;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}

export default sendgrid;