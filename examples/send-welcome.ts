import { sendEmail } from "../lib/sendgrid";
import HarbourSpaceWelcomeEmail from "../emails/harbour-space-welcome";

// Example usage of sending a welcome email
async function sendWelcomeEmail() {
  try {
    await sendEmail({
      from: "noreply@harbour.space", // Must be verified in SendGrid
      to: "student@example.com",
      subject: "Welcome to Harbour.Space University!",
      template: HarbourSpaceWelcomeEmail({
        userFirstname: "Sarah",
        programName: "Master in Data Science",
        startDate: "September 2024"
      })
    });
    
    console.log("Welcome email sent successfully!");
  } catch (error) {
    console.error("Failed to send welcome email:", error);
  }
}

// Run the example (uncomment to test)
// sendWelcomeEmail();

export { sendWelcomeEmail };