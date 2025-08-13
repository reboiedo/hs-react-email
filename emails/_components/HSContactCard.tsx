import * as React from "react";
import { Section, Text, Link } from "@react-email/components";

interface HSContactCardProps {
  title?: string;
  description?: string;
  email?: string;
  phone?: string;
  className?: string;
}

export const HSContactCard: React.FC<HSContactCardProps> = ({
  title = "Questions about your event?",
  description = "If you have any questions or need assistance, we're here to help!",
  email = "events@harbour.space",
  phone = "+34 932 20 17 15",
  className = ""
}) => {
  return (
    <Section 
      className={className}
      style={{
        backgroundColor: '#F9FAFB',
        border: '1px solid #E5E7EB',
        borderRadius: '8px',
        padding: '32px',
        margin: '32px 0',
        textAlign: 'center'
      }}
    >
      <Text 
        className="text-lg font-semibold text-hs-neutral-900 mb-2 m-0"
        style={{ 
          fontSize: '18px', 
          fontWeight: '600', 
          color: '#111827',
          marginBottom: '8px'
        }}
      >
        {title}
      </Text>
      
      <Text 
        className="text-sm text-hs-neutral-600 mb-4 m-0"
        style={{ 
          fontSize: '14px', 
          color: '#6B7280',
          lineHeight: '1.5',
          marginBottom: '24px'
        }}
      >
        {description}
      </Text>

      {/* Contact Methods */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
        {email && (
          <div style={{ textAlign: 'center' }}>
            <Text 
              className="text-xs text-hs-neutral-500 mb-1 m-0"
              style={{ 
                fontSize: '12px', 
                color: '#9CA3AF',
                marginBottom: '4px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontWeight: '500'
              }}
            >
              EMAIL US
            </Text>
            <Link 
              href={`mailto:${email}`}
              style={{ 
                color: '#6600CC',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: '500'
              }}
            >
              {email}
            </Link>
          </div>
        )}

        {phone && (
          <div style={{ textAlign: 'center' }}>
            <Text 
              className="text-xs text-hs-neutral-500 mb-1 m-0"
              style={{ 
                fontSize: '12px', 
                color: '#9CA3AF',
                marginBottom: '4px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                fontWeight: '500'
              }}
            >
              CALL US
            </Text>
            <Link 
              href={`tel:${phone.replace(/\s+/g, '')}`}
              style={{ 
                color: '#6600CC',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: '500'
              }}
            >
              {phone}
            </Link>
          </div>
        )}
      </div>
    </Section>
  );
};