import * as React from "react";
import { Section, Text, Hr } from "@react-email/components";
import { fontSize, colors, semantic } from "../_utils";

interface EventLocation {
  venue?: string;
  address?: string;
  virtual?: {
    platform: string;
    link: string;
  };
}

interface EventOrganizer {
  name: string;
  email: string;
}

interface EventData {
  title: string;
  description: string;
  date: string;
  time: string;
  timezone: string;
  location: EventLocation;
  organizer: EventOrganizer;
  registrationId?: string;
}

interface HSEventCardProps {
  event: EventData;
  showRegistrationId?: boolean;
  className?: string;
}

export const HSEventCard: React.FC<HSEventCardProps> = ({
  event,
  showRegistrationId = false,
  className = ''
}) => {
  const cardStyle = {
    backgroundColor: semantic.bgCard,
    borderRadius: '8px',
    border: `1px solid ${semantic.borderDefault}`,
    padding: '24px',
    marginBottom: '24px'
  };

  return (
    <Section style={cardStyle} className={className}>

      {/* Event Details - Only Date/Time, Location, Speaker */}
      <div>
        {/* Date & Time */}
        <div style={{ marginBottom: '16px' }}>
          <Text className="text-sm font-medium text-hs-neutral-900 m-0" style={{ fontSize: fontSize.sm, fontWeight: '500', color: semantic.textPrimary, marginBottom: '4px' }}>
            📅 Date & Time
          </Text>
          <Text className="text-sm text-hs-neutral-700 m-0" style={{ fontSize: fontSize.sm, color: semantic.textTertiary }}>
            {event.date} at {event.time} ({event.timezone})
          </Text>
        </div>

        {/* Location */}
        <div style={{ marginBottom: '16px' }}>
          <Text className="text-sm font-medium text-hs-neutral-900 m-0" style={{ fontSize: fontSize.sm, fontWeight: '500', color: semantic.textPrimary, marginBottom: '4px' }}>
            📍 Location
          </Text>
          <Text className="text-sm text-hs-neutral-700 m-0" style={{ fontSize: fontSize.sm, color: semantic.textTertiary }}>
            {event.location.venue ? (
              <>
                {event.location.venue}
                {event.location.address && (
                  <>
                    <br />
                    {event.location.address}
                  </>
                )}
              </>
            ) : event.location.virtual ? (
              <>
                Virtual Event ({event.location.virtual.platform})
              </>
            ) : (
              "Location TBD"
            )}
          </Text>
        </div>

        {/* Speaker */}
        <div>
          <Text className="text-sm font-medium text-hs-neutral-900 m-0" style={{ fontSize: fontSize.sm, fontWeight: '500', color: semantic.textPrimary, marginBottom: '4px' }}>
            🎤 Speaker
          </Text>
          <Text className="text-sm text-hs-neutral-700 m-0" style={{ fontSize: fontSize.sm, color: semantic.textTertiary }}>
            {event.organizer.name}
          </Text>
        </div>
      </div>
    </Section>
  );
};

export type { EventData, EventLocation, EventOrganizer };