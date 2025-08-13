import * as React from "react";
import { Preview, Text, Section, Hr, Link } from "@react-email/components";
import { HSLayout, HSHeading, HSButton, HSEventCard, EventData } from "../_components";

interface EventReminderProps {
  recipientName: string;
  event: EventData;
  joinLink?: string;
  lastMinuteUpdates?: string;
  hoursUntilEvent?: number;
}

export const EventReminder: React.FC<EventReminderProps> = ({
  recipientName = "Student",
  event = {
    title: "Introduction to Data Science Workshop",
    description: "Learn the fundamentals of data science including Python, statistics, and machine learning basics in this hands-on workshop.",
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
  },
  joinLink = "#",
  lastMinuteUpdates,
  hoursUntilEvent = 24
}) => {
  const isToday = hoursUntilEvent <= 12;
  const previewText = `${isToday ? 'Happening today!' : 'Reminder:'} ${event.title} on ${event.date}`;
  const urgencyText = isToday ? "Today" : hoursUntilEvent <= 24 ? "Tomorrow" : "Soon";

  return (
    <HSLayout 
      previewText={previewText}
      title={`Event Reminder - ${event.title}`}
    >
      <Preview>{previewText}</Preview>
      
      {/* Urgency Badge & Welcome Message */}
      <Section className="text-center mb-8">
        <div className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${
          isToday 
            ? 'bg-hs-green-100 text-hs-green-800' 
            : 'bg-hs-purple-100 text-hs-purple-800'
        }`}>
          {isToday ? '🔔 Happening Today!' : `⏰ ${urgencyText}`}
        </div>
        <HSHeading level={1} color="purple">
          Don't Forget!
        </HSHeading>
        <Text className="text-lg text-hs-neutral-600 m-0">
          Hi {recipientName}, your event is coming up {urgencyText.toLowerCase()}.
        </Text>
      </Section>

      {/* Event Summary Card */}
      <HSEventCard event={event} />

      {/* Main Action Button */}
      <Section className="text-center my-8">
        {event.location.virtual ? (
          <HSButton
            href={joinLink}
            variant="primary"
            size="lg"
            className="mb-4"
          >
            🚀 Join Virtual Event
          </HSButton>
        ) : (
          <HSButton
            href={`https://maps.google.com/?q=${encodeURIComponent(event.location.address || event.location.venue || '')}`}
            variant="primary"
            size="lg"
            className="mb-4"
          >
            📍 Get Directions
          </HSButton>
        )}
      </Section>

      {/* Last Minute Updates */}
      {lastMinuteUpdates && (
        <>
          <Section className="mb-8">
            <div className="bg-hs-green-50 border-l-4 border-hs-green-500 p-4 rounded-r-lg">
              <HSHeading level={3} color="default" className="mb-3 text-hs-green-800">
                📢 Important Update
              </HSHeading>
              <Text className="text-hs-green-700 m-0">
                {lastMinuteUpdates}
              </Text>
            </div>
          </Section>
        </>
      )}

      <Hr className="border-hs-neutral-200 my-8" />

      {/* What to Bring / Prepare */}
      <Section className="mb-8">
        <HSHeading level={2} color="default">
          {isToday ? "Ready to Go?" : "Prepare for the Event"}
        </HSHeading>
        
        <div className="mb-6">
          {/* What to Bring */}
          <div className="bg-hs-purple-50 rounded-lg p-6">
            <Text className="text-hs-purple-800 font-semibold m-0 mb-3">
              📋 What to Bring
            </Text>
            <ul className="text-hs-neutral-700 text-sm ml-4">
              <li>Laptop (fully charged)</li>
              <li>Notebook and pen</li>
              <li>Photo ID for campus access</li>
              <li>Water bottle</li>
            </ul>
          </div>

          {/* Logistics */}
          <div className="bg-hs-neutral-50 rounded-lg p-6">
            <Text className="text-hs-neutral-800 font-semibold m-0 mb-3">
              🕐 Event Timeline
            </Text>
            <ul className="text-hs-neutral-700 text-sm ml-4">
              <li>Arrive 15 minutes early</li>
              <li>Check-in at reception</li>
              <li>Event duration: 3 hours</li>
              <li>Networking session included</li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="bg-hs-neutral-50 rounded-lg p-4 mb-6">
          <Text className="text-sm text-hs-neutral-800 m-0 mb-2">
            <strong>Running Late or Need Help?</strong>
          </Text>
          <Text className="text-sm text-hs-neutral-600 m-0">
            Contact the organizer: <Link href={`mailto:${event.organizer.email}`} className="text-hs-purple-500">{event.organizer.email}</Link>
          </Text>
        </div>
      </Section>

      {/* Weather Alert (for in-person events) */}
      {!event.location.virtual && (
        <Section className="mb-8">
          <div className="bg-hs-green-50 rounded-lg p-4">
            <Text className="text-sm text-hs-green-800 font-medium m-0 mb-2">
              🌤️ Weather Check
            </Text>
            <Text className="text-sm text-hs-green-700 m-0">
              Don't forget to check the weather forecast and dress appropriately for your journey to the venue.
            </Text>
          </div>
        </Section>
      )}

      {/* Quick Actions */}
      <Section className="text-center mb-8">
        <div className="mb-3">
          <HSButton
            href={`mailto:${event.organizer.email}?subject=Question about ${event.title}`}
            variant="outline"
            size="md"
            className="mb-3"
          >
            💬 Ask a Question
          </HSButton>
        </div>
        <div>
          <HSButton
            href="#"
            variant="outline"
            size="md"
          >
            📅 Add to Calendar
          </HSButton>
        </div>
      </Section>

      <Hr className="border-hs-neutral-200 my-8" />

      {/* Footer */}
      <Section className="text-center">
        <Text className="text-sm text-hs-neutral-600 m-0 mb-4">
          Looking forward to seeing you {isToday ? 'today' : urgencyText.toLowerCase()}! 🎓
        </Text>
        <Text className="text-sm text-hs-neutral-500 m-0 mb-4">
          Can't make it? <Link href="#" className="text-hs-purple-500">Let us know</Link>
        </Text>
        <Text className="text-xs text-hs-neutral-400 m-0">
          Harbour.Space University • Barcelona & Bangkok
          <br />
          This is a reminder for your registered event.
          <br />
          <Link href="#" className="text-hs-neutral-400">Unsubscribe</Link> | 
          <Link href="#" className="text-hs-neutral-400"> Privacy Policy</Link>
        </Text>
      </Section>
    </HSLayout>
  );
};

export default EventReminder;