// Tailwind configuration for React Email
// Maps our existing color system to Tailwind classes

import type { Config } from '@react-email/tailwind';

export const emailTailwindConfig: Config = {
  theme: {
    extend: {
      colors: {
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

        // Gray scale for text/backgrounds
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
        },

        // Semantic aliases for common use cases
        'text-primary': '#111827',    // gray-900
        'text-secondary': '#4B5563',  // gray-600  
        'text-tertiary': '#6B7280',   // gray-500
        'text-muted': '#9CA3AF',      // gray-400
        
        'bg-card': '#F9FAFB',         // gray-50
        'bg-muted': '#F3F4F6',        // gray-100
        
        'border-default': '#E5E7EB',  // gray-200
        'border-muted': '#F3F4F6',    // gray-100
        
        'primary': '#6D2CF3',         // purple-500
        'primary-dark': '#3C1E75',    // purple-800 (footer nav)
        'primary-medium': '#4B2696',  // purple-700 (footer main)
        'success': '#10B981',         // green-500
      },
      fontSize: {
        'xs': '12px',
        'sm': '14px',
        'base': '16px',
        'lg': '18px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '36px',
      },
      lineHeight: {
        'tight': '1.25',
        'normal': '1.5',
        'relaxed': '1.75',
      },
      fontWeight: {
        'normal': '400',
        'medium': '500',
        'bold': '700',
      },
      spacing: {
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '6': '24px',
        '8': '32px',
        '12': '48px',
        '16': '64px',
      },
      borderRadius: {
        'sm': '2px',
        'DEFAULT': '4px',
        'md': '6px',
        'lg': '8px',
        'full': '50%',
      },
      borderColor: {
        'gray-200': '#E5E7EB',
        'gray-300': '#D1D5DB',
        'default': '#E5E7EB',
      },
      borderWidth: {
        '1': '1px',
        '2': '2px',
        'DEFAULT': '1px',
      }
    },
  },
};