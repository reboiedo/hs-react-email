import * as React from "react";
import { Section, Img, Text } from "@react-email/components";
import { getLogoUrl } from "../_utils";
import { fontSize, semantic } from "../_utils";

interface HSEmailHeaderProps {
  className?: string;
  headerType?: string;
}

export const HSEmailHeader: React.FC<HSEmailHeaderProps> = ({
  className = "",
  headerType
}) => {
  return (
    <Section className={className}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          width: '100%',
        }}
      >
        {/* Left side - Logo only */}
        <div>
          <Img
            src={getLogoUrl('main').svg}
            height="32"
            alt="Harbour.Space University"
            style={{ width: 'auto' }}
          />
        </div>
        
        {/* Right side - Header type */}
        {headerType && (
          <Text
            style={{
              fontSize: fontSize.base,
              color: semantic.primaryMedium,
              margin: '0',
              fontWeight: '400',
            }}
          >
            {headerType}
          </Text>
        )}
      </div>
    </Section>
  );
};