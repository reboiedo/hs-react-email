import * as React from "react";
import { Heading } from "@react-email/components";

interface HSHeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4;
  className?: string;
  color?: "default" | "purple" | "neutral";
}

export const HSHeading: React.FC<HSHeadingProps> = ({
  children,
  level = 1,
  className = "",
  color = "default",
}) => {
  const levelStyles = {
    1: "text-3xl font-semibold mb-4",
    2: "text-xl font-semibold mb-3",
    3: "text-lg font-medium mb-3",
    4: "text-base font-medium mb-2",
  };

  const colorStyles = {
    default: "text-hs-neutral-900",
    purple: "text-hs-purple-600",
    neutral: "text-hs-neutral-700",
  };

  const classes = [levelStyles[level], colorStyles[color], className]
    .filter(Boolean)
    .join(" ");

  return (
    <Heading as={`h${level}` as any} className={classes}>
      {children}
    </Heading>
  );
};
