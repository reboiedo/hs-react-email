import * as React from "react";
import { Preview, Img, Text, Section } from "@react-email/components";
import {
  HSLayout,
  HSButton,
  EventData,
} from "../_components";
import { getImageUrl, getIconUrl, semantic, fontSize, fontWeight, lineHeight } from "../_utils";

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
      <Section style={{ marginBottom: '24px' }}>
        <Img
          src={getImageUrl("images/event-test-asset", 600)}
          alt="Event illustration"
          style={{
            width: "100%",
            minWidth: "280px",
            maxWidth: "552px",
            height: "auto",
            display: "block",
            borderRadius: "8px",
          }}
        />
      </Section>

      {/* Spot Reserved Text */}
      <Text
        style={{
          fontSize: fontSize['2xl'],
          color: '#4B2696',
          margin: '0',
          marginBottom: '8px',
          fontStyle: 'italic',
        }}
      >
        Spot Reserved!
      </Text>

      {/* Event Title */}
      <Text
        style={{
          fontSize: fontSize['3xl'],
          fontWeight: fontWeight.medium,
          color: semantic.textPrimary,
          margin: '0',
          marginBottom: '24px',
          lineHeight: lineHeight.tight,
        }}
      >
        {event.title}
      </Text>

      {/* Event Details Card */}
      <div 
        style={{
          backgroundColor: semantic.bgCard,
          border: `1px solid ${semantic.borderDefault}`,
          borderRadius: '8px',
          padding: '16px',
          marginBottom: '24px',
          minWidth: '280px',
          boxSizing: 'border-box',
        }}
      >
        {/* Date and Time Row */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          marginBottom: '16px',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <div 
            style={{
              minWidth: '48px',
              width: '48px',
              height: '48px',
              border: `1px solid ${semantic.borderDefault}`,
              borderRadius: '8px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: semantic.bgPrimary,
              flexShrink: 0,
            }}
          >
            <Text
              style={{
                fontSize: fontSize.xs,
                color: semantic.textTertiary,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                margin: '0',
                lineHeight: '1',
              }}
            >
              JUL
            </Text>
            <Text
              style={{
                fontSize: fontSize.lg,
                fontWeight: fontWeight.bold,
                color: semantic.textPrimary,
                margin: '0',
                lineHeight: '1',
              }}
            >
              18
            </Text>
          </div>
          <div style={{ flex: '1', minWidth: '150px' }}>
            <Text
              style={{
                fontSize: fontSize.base,
                fontWeight: fontWeight.medium,
                color: semantic.textPrimary,
                margin: '0',
                marginBottom: '2px',
              }}
            >
              {event.date}
            </Text>
            <Text
              style={{
                fontSize: fontSize.sm,
                color: semantic.textSecondary,
                margin: '0',
              }}
            >
              {event.time}
            </Text>
          </div>
        </div>

        {/* Location Row */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'flex-start',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <div 
            style={{
              minWidth: '48px',
              width: '48px',
              height: '48px',
              border: `1px solid ${semantic.borderDefault}`,
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: semantic.bgPrimary,
              flexShrink: 0,
            }}
          >
            <Img
              src={getIconUrl("map").svg}
              width="20"
              height="20"
              alt="Location"
              style={{ display: 'block' }}
            />
          </div>
          <div style={{ flex: '1', minWidth: '150px' }}>
            <Text
              style={{
                fontSize: fontSize.base,
                fontWeight: fontWeight.medium,
                color: semantic.textPrimary,
                margin: '0',
                marginBottom: '2px',
              }}
            >
              {event.location.venue}
            </Text>
            <a
              href="#"
              style={{
                fontSize: fontSize.sm,
                color: semantic.textTertiary,
                textDecoration: 'underline',
                margin: '0',
              }}
            >
              {event.location.address}
            </a>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div
        style={{
          display: 'flex',
          gap: '12px',
          marginBottom: '32px',
          flexWrap: 'wrap',
        }}
      >
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