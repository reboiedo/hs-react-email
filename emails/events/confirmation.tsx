import * as React from "react";
import { Preview, Img, Text, Section } from "@react-email/components";
import { HSLayout, HSButton, EventData } from "../_components";
import { getImageUrl, getIconUrl } from "../_utils";

interface EventConfirmationProps {
  recipientName: string;
  event: EventData;
  calendarLink?: string;
}

export const EventConfirmation: React.FC<EventConfirmationProps> = ({
  recipientName = "Student",
  event = {
    title: "Introduction to Data Science Workshop",
    description:
      "Learn the fundamentals of data science including Python, statistics, and machine learning basics in this hands-on workshop.",
    date: "Friday, July 18",
    time: "6:30 PM - 8:30 PM CST",
    timezone: "CST",
    location: {
      venue: "Barcelona Campus + Online",
      address: "Open on Google maps",
    },
    organizer: {
      name: "Dr. Sarah Chen",
      email: "sarah.chen@harbour.space",
    },
    registrationId: "HS-WS-2024-001523",
  },
  calendarLink = "#",
}) => {
  const previewText = `Spot Reserved! ${event.title}`;

  return (
    <HSLayout
      previewText={previewText}
      title={`Event Confirmation - ${event.title}`}
      headerType="Events"
    >
      <Preview>{previewText}</Preview>

      {/* Hero Image */}
      <Section className="mb-6">
        <Img
          src={getImageUrl("images/event-test-asset", 600)}
          alt="Event illustration"
          className="w-full min-w-[280px] max-w-[552px] h-auto block rounded-lg mb-5"
        />
      </Section>

      {/* Spot Reserved Text */}
      <Text className="text-2xl text-purple-700 mb-2 italic">
        Spot Reserved!
      </Text>

      {/* Event Title */}
      <Text className="text-3xl font-medium text-gray-900 m-0 mb-6 leading-tight">
        {event.title}
      </Text>

      {/* Event Details Card */}
      <div className="bg-gray-50 border-solid border-gray-200 border rounded-lg p-4 mb-6 min-w-[280px] box-border">
        {/* Date and Time Row */}
        <div className="flex items-center mb-4 flex-wrap gap-3">
          <div className="min-w-12 w-12 h-12 border-solid border-gray-200 border rounded-lg flex flex-col items-center justify-center bg-white flex-shrink-0">
            <Text className="text-xs text-gray-500 uppercase tracking-wide m-0 leading-none">
              JUL
            </Text>
            <Text className="text-lg font-bold text-gray-900 m-0 leading-none">
              18
            </Text>
          </div>
          <div className="flex-1 min-w-[150px]">
            <Text className="text-base font-medium text-gray-900 m-0 mb-0.5">
              {event.date}
            </Text>
            <Text className="text-sm text-gray-600 m-0">{event.time}</Text>
          </div>
        </div>

        {/* Location Row */}
        <div className="flex items-start flex-wrap gap-3">
          <div className="min-w-12 w-12 h-12 border-solid border-gray-200 border rounded-lg flex items-center justify-center bg-white flex-shrink-0">
            <Img
              src={getIconUrl("map").svg}
              width="20"
              height="20"
              alt="Location"
              className="block"
            />
          </div>
          <div className="flex-1 min-w-[150px]">
            <Text className="text-base font-medium text-gray-900 m-0 mb-0.5">
              {event.location.venue}
            </Text>
            <a href="#" className="text-sm text-gray-500 underline m-0">
              {event.location.address}
            </a>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 mb-8 flex-wrap">
        <HSButton href="#" variant="primary" size="md">
          Stream Link
        </HSButton>
        <HSButton href={calendarLink} variant="outline" size="md">
          Add to Calendar
        </HSButton>
      </div>
    </HSLayout>
  );
};

export default EventConfirmation;
