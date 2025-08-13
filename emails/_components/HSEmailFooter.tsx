import * as React from "react";
import { Section, Text, Link, Img } from "@react-email/components";
import { getLogoUrl, getIconUrl, fontSize, colors, semantic } from "../_utils";

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
      <Section
        className={className}
        style={{
          backgroundColor: colors.purple[800],
          padding: "32px 40px",
          marginTop: "0",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <a
            href="https://harbour.space/admissions"
            style={{
              color: colors.white,
              fontSize: fontSize.sm,
              fontWeight: "400",
              textDecoration: "none",
              margin: "0 20px",
            }}
          >
            Admissions
          </a>
          <a
            href="https://harbour.space/admissions/scholarships"
            style={{
              color: colors.white,
              fontSize: fontSize.sm,
              fontWeight: "400",
              textDecoration: "none",
              margin: "0 20px",
            }}
          >
            Scholarships
          </a>
          <a
            href="https://harbour.space/apply"
            style={{
              color: colors.white,
              fontSize: fontSize.sm,
              fontWeight: "400",
              textDecoration: "none",
              margin: "0 20px",
            }}
          >
            Apply
          </a>
        </div>
      </Section>

      {/* Main Footer Section - Purple 700 */}
      <Section
        style={{
          backgroundColor: colors.purple[700],
          padding: "64px 40px",
          marginTop: "0",
        }}
      >
        <div className="text-center">
          {/* White Logo */}
          <div style={{ marginBottom: "48px" }}>
            <Img
              src={getLogoUrl("white").svg}
              height="40"
              alt="Harbour.Space University"
              className="mx-auto"
              style={{ width: "auto" }}
            />
          </div>

          {/* Social Media Icons */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
              marginBottom: "48px",
            }}
          >
            <Link
              href="https://instagram.com/harbour.space"
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  backgroundColor: colors.purple[800],
                  borderRadius: "50%",
                  padding: "8px",
                  width: "32px",
                  height: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Img
                  src={getIconUrl("instagram").svg}
                  width="24"
                  height="24"
                  alt="Instagram"
                />
              </div>
            </Link>
            <Link
              href="https://linkedin.com/school/harbour-space-university"
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  backgroundColor: colors.purple[800],
                  borderRadius: "50%",
                  padding: "8px",
                  width: "32px",
                  height: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Img
                  src={getIconUrl("linkedin").svg}
                  width="24"
                  height="24"
                  alt="LinkedIn"
                />
              </div>
            </Link>
            <Link
              href="https://www.youtube.com/@HarbourSpaceUniversity"
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  backgroundColor: colors.purple[800],
                  borderRadius: "50%",
                  padding: "8px",
                  width: "32px",
                  height: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Img
                  src={getIconUrl("youtube").svg}
                  width="24"
                  height="24"
                  alt="YouTube"
                />
              </div>
            </Link>
            <Link
              href="https://www.tiktok.com/@harbour.space"
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  backgroundColor: colors.purple[800],
                  borderRadius: "50%",
                  padding: "8px",
                  width: "32px",
                  height: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Img
                  src={getIconUrl("tiktok").svg}
                  width="24"
                  height="24"
                  alt="TikTok"
                />
              </div>
            </Link>
            <Link
              href="https://facebook.com/harbour.space"
              style={{ textDecoration: "none" }}
            >
              <div
                style={{
                  backgroundColor: colors.purple[800],
                  borderRadius: "50%",
                  padding: "8px",
                  width: "32px",
                  height: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
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
          <Text
            style={{
              color: colors.white,
              fontSize: fontSize.base,
              fontWeight: "400",
              margin: "0 0 32px 0",
            }}
          >
            Harbour.Space, Carrer de Rosa Sensat, 9, 08005 Barcelona, Catalunya,
            Spain
          </Text>

          {/* Unsubscribe Link */}
          {includeUnsubscribe && (
            <Link
              href="#unsubscribe"
              style={{
                color: colors.white,
                textDecoration: "underline",
                fontSize: fontSize.base,
              }}
            >
              Unsubscribe
            </Link>
          )}
        </div>
      </Section>

      {/* Legal Links - Outside Purple Card */}
      <Section
        className="text-center"
        style={{ padding: "24px 20px", backgroundColor: colors.white }}
      >
        <Text
          className="text-xs text-hs-neutral-500 m-0"
          style={{ fontSize: fontSize.xs, color: semantic.textTertiary }}
        >
          <Link
            href="https://harbour.space/privacy"
            style={{ color: semantic.textTertiary, textDecoration: "none" }}
          >
            Privacy Policy
          </Link>
          {" • "}
          <Link
            href="https://harbour.space/terms"
            style={{ color: semantic.textTertiary, textDecoration: "none" }}
          >
            Terms of Service
          </Link>
          <br />© {new Date().getFullYear()} Harbour.Space University. All
          rights reserved.
        </Text>
      </Section>
    </>
  );
};
