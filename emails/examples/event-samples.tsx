// Sample event data for testing templates
import { EventData } from '../_components';

// In-person workshop event
export const workshopEvent: EventData = {
  title: "Introduction to Data Science Workshop",
  description: "Learn the fundamentals of data science including Python, statistics, and machine learning basics in this hands-on workshop designed for beginners.",
  date: "March 15, 2024",
  time: "2:00 PM",
  timezone: "CET",
  location: {
    venue: "Harbour.Space Campus Barcelona", 
    address: "Carrer de Sancho de Ávila, 173, 08018 Barcelona, Spain"
  },
  organizer: {
    name: "Dr. Sarah Chen",
    email: "sarah.chen@harbour.space"
  },
  registrationId: "HS-WS-2024-001523"
};

// Virtual webinar event
export const webinarEvent: EventData = {
  title: "Future of AI in Education - Virtual Panel",
  description: "Join industry leaders and academics as they discuss how artificial intelligence is transforming the educational landscape and what it means for students and educators.",
  date: "March 22, 2024", 
  time: "6:00 PM",
  timezone: "CET",
  location: {
    virtual: {
      platform: "Zoom",
      link: "https://zoom.us/j/123456789"
    }
  },
  organizer: {
    name: "Prof. Michael Rodriguez",
    email: "michael.rodriguez@harbour.space"
  },
  registrationId: "HS-WB-2024-000891"
};

// Conference event
export const conferenceEvent: EventData = {
  title: "Barcelona Tech Conference 2024",
  description: "Three days of cutting-edge technology talks, networking, and innovation showcases. Connect with industry leaders, startups, and fellow tech enthusiasts.",
  date: "April 10-12, 2024",
  time: "9:00 AM",
  timezone: "CET", 
  location: {
    venue: "Palau de la Música Catalana",
    address: "C/ Palau de la Música, 4-6, 08003 Barcelona, Spain"
  },
  organizer: {
    name: "Barcelona Tech Team",
    email: "events@barcelonatech.org"
  },
  registrationId: "BTC-2024-VIP-0156"
};