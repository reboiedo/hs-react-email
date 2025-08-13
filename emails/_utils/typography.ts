// Email Typography System for Harbour.Space
// Simple, scalable type system optimized for email clients

export const fontSize = {
  // Headings
  '3xl': '32px',  // Major headings
  '2xl': '24px',  // Section headings
  'xl': '20px',   // Card headings
  'lg': '18px',   // Subsection headings
  
  // Body text
  'base': '16px', // Primary body text, navigation links
  'sm': '14px',   // Secondary text, labels, event details
  'xs': '12px',   // Fine print, metadata
  'xxs': '11px',  // Legal text, copyright
} as const;

export const fontWeight = {
  light: '300',
  normal: '400',
  medium: '500', 
  semibold: '600',
  bold: '700',
} as const;

export const lineHeight = {
  tight: '1.25',
  normal: '1.5', 
  relaxed: '1.6',
} as const;

// Predefined text styles for common use cases
export const textStyles = {
  // Headers
  heroTitle: { fontSize: fontSize['3xl'], fontWeight: fontWeight.bold },
  sectionTitle: { fontSize: fontSize['2xl'], fontWeight: fontWeight.semibold },
  cardTitle: { fontSize: fontSize.xl, fontWeight: fontWeight.medium },
  subheading: { fontSize: fontSize.lg, fontWeight: fontWeight.medium },
  
  // Body text
  body: { fontSize: fontSize.base, fontWeight: fontWeight.normal, lineHeight: lineHeight.relaxed },
  bodyMedium: { fontSize: fontSize.base, fontWeight: fontWeight.medium },
  
  // UI elements
  button: { fontSize: fontSize.base, fontWeight: fontWeight.medium },
  navigation: { fontSize: fontSize.base, fontWeight: fontWeight.normal },
  label: { fontSize: fontSize.sm, fontWeight: fontWeight.medium },
  caption: { fontSize: fontSize.sm, fontWeight: fontWeight.normal },
  
  // Fine print
  metadata: { fontSize: fontSize.xs, fontWeight: fontWeight.normal },
  legal: { fontSize: fontSize.xxs, fontWeight: fontWeight.normal },
} as const;

export type FontSize = keyof typeof fontSize;
export type FontWeight = keyof typeof fontWeight;
export type TextStyle = keyof typeof textStyles;