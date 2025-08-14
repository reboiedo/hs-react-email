import * as React from "react";
import { Section, Img, Text } from "@react-email/components";
import { getLogoUrl } from "../_utils";

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
        <div className="flex justify-between items-start w-full">
          {/* Left side - Logo only */}
          <div>
            <Img
              src={getLogoUrl('main').svg}
              height="32"
              alt="Harbour.Space University"
              className="w-auto"
            />
          </div>
          
          {/* Right side - Header type */}
          {headerType && (
            <Text className="text-base text-purple-700 m-0 font-normal">
              {headerType}
            </Text>
          )}
        </div>
      </Section>
  );
};