import * as React from "react";
import { Html, Head, Body, Tailwind, Container } from "@react-email/components";
import { HSEmailHeader } from "./HSEmailHeader";
import { HSEmailFooter } from "./HSEmailFooter";
import { colors } from "../_utils";
import tailwindConfig from "../../tailwind.config";

interface HSLayoutProps {
  children: React.ReactNode;
  previewText?: string;
  title?: string;
  showHeader?: boolean;
  showFooter?: boolean;
  includeUnsubscribe?: boolean;
  headerType?: string;
}

export const HSLayout: React.FC<HSLayoutProps> = ({
  children,
  previewText = "Harbour.Space University",
  title = "Harbour.Space Email",
  showHeader = true,
  showFooter = true,
  includeUnsubscribe = false,
  headerType
}) => {
  return (
    <Tailwind config={tailwindConfig}>
      <Html lang="en">
        <Head>
          <title>{title}</title>
          {previewText && (
            <meta name="description" content={previewText} />
          )}
          <style>{`
            @media only screen and (max-width: 480px) {
              .bg-gray-100 {
                background-color: ${colors.white} !important;
              }
              .mobile-container {
                max-width: none !important;
                width: 100% !important;
              }
            }
          `}</style>
        </Head>
        <Body className="bg-gray-100 font-sans text-hs-neutral-900" style={{ backgroundColor: colors.gray[100] }}>
          <Container className="mx-auto mobile-container" style={{ maxWidth: '600px', padding: '0', width: '100%' }}>
            
            {/* Header Section - Logo at top */}
            {showHeader && (
              <div style={{ backgroundColor: colors.white, paddingTop: '24px', paddingBottom: '24px', paddingLeft: '24px', paddingRight: '24px' }}>
                <HSEmailHeader headerType={headerType} />
              </div>
            )}
            
            {/* Main Content - White background */}
            <div style={{ backgroundColor: colors.white, padding: '0 24px 48px 24px' }}>
              {children}
            </div>
            
            {/* Footer Section - Purple Card Design */}
            {showFooter && (
              <HSEmailFooter includeUnsubscribe={includeUnsubscribe} />
            )}
            
          </Container>
        </Body>
      </Html>
    </Tailwind>
  );
};