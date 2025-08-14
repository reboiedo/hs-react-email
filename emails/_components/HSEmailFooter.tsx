import * as React from "react";
import { Section, Text, Link, Img } from "@react-email/components";
import { getLogoUrl, getIconUrl } from "../_utils";

interface HSEmailFooterProps {
  includeUnsubscribe?: boolean;
  className?: string;
}

export const HSEmailFooter: React.FC<HSEmailFooterProps> = ({
  includeUnsubscribe = false,
  className = "",
}) => {
  return (
    <>
      {/* Top Navigation Bar - Purple 800 */}
      <Section className={`bg-purple-800 py-8 px-10 mt-0 ${className}`}>
        <div className="text-center">
          <a
            href="https://harbour.space/admissions"
            className="text-white text-sm font-normal no-underline mx-5"
          >
            Admissions
          </a>
          <a
            href="https://harbour.space/admissions/scholarships"
            className="text-white text-sm font-normal no-underline mx-5"
          >
            Scholarships
          </a>
          <a
            href="https://harbour.space/apply"
            className="text-white text-sm font-normal no-underline mx-5"
          >
            Apply
          </a>
        </div>
      </Section>

      {/* Main Footer Section - Purple 700 */}
      <Section className="bg-purple-700 py-16 px-10 mt-0">
        <div className="text-center">
          {/* White Logo */}
          <div className="mb-12">
            <Img
              src={getLogoUrl("white").svg}
              height="40"
              alt="Harbour.Space University"
              className="mx-auto w-auto"
            />
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-6 mb-12">
            <Link href="https://instagram.com/harbour.space" className="no-underline">
              <div className="bg-purple-800 rounded-full p-2 w-8 h-8 flex items-center justify-center">
                <Img
                  src={getIconUrl("instagram").svg}
                  width="24"
                  height="24"
                  alt="Instagram"
                />
              </div>
            </Link>
            <Link href="https://linkedin.com/school/harbour-space-university" className="no-underline">
              <div className="bg-purple-800 rounded-full p-2 w-8 h-8 flex items-center justify-center">
                <Img
                  src={getIconUrl("linkedin").svg}
                  width="24"
                  height="24"
                  alt="LinkedIn"
                />
              </div>
            </Link>
            <Link href="https://www.youtube.com/@HarbourSpaceUniversity" className="no-underline">
              <div className="bg-purple-800 rounded-full p-2 w-8 h-8 flex items-center justify-center">
                <Img
                  src={getIconUrl("youtube").svg}
                  width="24"
                  height="24"
                  alt="YouTube"
                />
              </div>
            </Link>
            <Link href="https://www.tiktok.com/@harbour.space" className="no-underline">
              <div className="bg-purple-800 rounded-full p-2 w-8 h-8 flex items-center justify-center">
                <Img
                  src={getIconUrl("tiktok").svg}
                  width="24"
                  height="24"
                  alt="TikTok"
                />
              </div>
            </Link>
            <Link href="https://facebook.com/harbour.space" className="no-underline">
              <div className="bg-purple-800 rounded-full p-2 w-8 h-8 flex items-center justify-center">
                <Img
                  src={getIconUrl("facebook").svg}
                  width="24"
                  height="24"
                  alt="Facebook"
                />
              </div>
            </Link>
          </div>

          {/* Address */}
          <Text className="text-white text-base font-normal m-0 mb-8">
            Harbour.Space, Carrer de Rosa Sensat, 9, 08005 Barcelona, Catalunya,
            Spain
          </Text>

          {/* Unsubscribe Link */}
          {includeUnsubscribe && (
            <Link href="#unsubscribe" className="text-white underline text-base">
              Unsubscribe
            </Link>
          )}
        </div>
      </Section>

      {/* Legal Links - Outside Purple Card */}
      <Section className="text-center py-6 px-5 bg-white">
        <Text className="text-xs text-gray-500 m-0">
          <Link href="https://harbour.space/privacy" className="text-gray-500 no-underline">
            Privacy Policy
          </Link>
          {" • "}
          <Link href="https://harbour.space/terms" className="text-gray-500 no-underline">
            Terms of Service
          </Link>
          <br />© {new Date().getFullYear()} Harbour.Space University. All
          rights reserved.
        </Text>
      </Section>
    </>
  );
};
