require('dotenv').config();
const sgMail = require('@sendgrid/mail');
const fs = require('fs');
const path = require('path');

// Configure SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendTestEmail() {
  try {
    // Read the exported HTML template
    const htmlPath = path.join(__dirname, 'out', 'events', 'confirmation.html');
    let html = fs.readFileSync(htmlPath, 'utf8');
    
    // Replace template variables with test data
    html = html.replace(/Student/g, 'Javier Rebolledo');
    html = html.replace(/Introduction to Data Science Workshop/g, 'Introduction to AI & Machine Learning');
    html = html.replace(/Learn the fundamentals of data science including Python, statistics, and machine learning basics in this hands-on workshop\./g, 'Join us for an exciting workshop where you\'ll learn the fundamentals of artificial intelligence and machine learning. This hands-on session will cover basic concepts, practical applications, and future trends in AI technology.');
    
    // Replace local image paths with Cloudinary URLs
    html = html.replace(/\/static\/harbour-space-logo\.png/g, 'https://res.cloudinary.com/ddlnwaghp/image/upload/h_40,f_png,q_auto:best/harbour-space-emails/logos/harbour-space-logo.png');
    html = html.replace(/\/static\/harbour-space-logo-white\.png/g, 'https://res.cloudinary.com/ddlnwaghp/image/upload/h_40,f_png,q_auto:best/harbour-space-emails/logos/harbour-space-logo-white.png');
    html = html.replace(/\/static\/event-test-asset\.png/g, 'https://res.cloudinary.com/ddlnwaghp/image/upload/w_600,f_auto,q_auto:good/harbour-space-emails/images/event-test-asset.png');
    
    // Email configuration
    const msg = {
      to: 'javier.rebolledo@harbour.space',
      from: process.env.DEFAULT_FROM_EMAIL,
      subject: 'Event Confirmation - Introduction to AI & Machine Learning',
      html: html
    };

    // Send the email
    console.log('Sending test email...');
    console.log('📧 To:', msg.to);
    console.log('📤 From:', msg.from);
    console.log('📋 Subject:', msg.subject);
    
    const response = await sgMail.send(msg);
    
    console.log('✅ Test email sent successfully!');
    console.log('🆔 MessageID:', response[0].headers['x-message-id']);
    console.log('🌐 Check your inbox at javier.rebolledo@harbour.space');
    
  } catch (error) {
    console.error('❌ Error sending test email:');
    console.error(error.response?.body || error.message);
    
    if (error.code === 403) {
      console.log('💡 Tip: Make sure digital.team@harbour.space is verified as a sender in SendGrid');
    }
  }
}

// Run the test
sendTestEmail();