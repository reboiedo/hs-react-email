// Email Color System for Harbour.Space
// Centralized color constants matching our Tailwind config

export const colors = {
  // Harbour.Space Purple Scale
  purple: {
    50: '#F4F2FF',
    100: '#E1DBFF', 
    200: '#C1B4FF',
    300: '#9A83FF',
    400: '#7D51FF',
    500: '#6D2CF3',  // Primary brand color
    600: '#5929B9',
    700: '#4B2696',
    800: '#3C1E75',
    900: '#2B1751',
    950: '#200745'
  },
  
  // Harbour.Space Neutral Scale
  neutral: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#E5E5E5',
    300: '#D4D4D4',
    400: '#A3A3A3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0A0A0A'
  },
  
  // Harbour.Space Green Scale (Success/Accent)
  green: {
    50: '#ECFDF5',
    100: '#D1FAE5',
    200: '#A7F3D0',
    300: '#6EE7B7',
    400: '#34D399',
    500: '#10B981',
    600: '#059669',
    700: '#047857',
    800: '#065F46',
    900: '#064E3B',
    950: '#022C22'
  },

  // Common email colors (mapped from standard palette)
  white: '#FFFFFF',
  black: '#000000',
  
  // Gray scale for text/backgrounds (commonly used values)
  gray: {
    50: '#F9FAFB',   // Card backgrounds
    100: '#F3F4F6',  // Light backgrounds
    200: '#E5E7EB',  // Borders
    300: '#D1D5DB',
    400: '#9CA3AF',  // Placeholder text
    500: '#6B7280',  // Secondary text
    600: '#4B5563',  // Body text
    700: '#374151',  // Headings
    800: '#1F2937',
    900: '#111827'   // Dark headings
  }
} as const;

// Semantic color aliases for common use cases
export const semantic = {
  // Text colors
  textPrimary: colors.gray[900],     // #111827
  textSecondary: colors.gray[600],   // #4B5563  
  textTertiary: colors.gray[500],    // #6B7280
  textMuted: colors.gray[400],       // #9CA3AF
  
  // Background colors
  bgPrimary: colors.white,           // #FFFFFF
  bgCard: colors.gray[50],           // #F9FAFB
  bgMuted: colors.gray[100],         // #F3F4F6
  
  // Border colors
  borderDefault: colors.gray[200],   // #E5E7EB
  borderMuted: colors.gray[100],     // #F3F4F6
  
  // Brand colors
  primary: colors.purple[500],       // #6D2CF3
  primaryDark: colors.purple[800],   // #3C1E75 (footer nav)
  primaryMedium: colors.purple[700], // #4B2696 (footer main)
  success: colors.green[500],        // #10B981
} as const;