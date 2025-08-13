# CLAUDE.md - AI Context File

> **Purpose**: This file provides essential context for AI assistants working on the Harbour.Space email template system.

## 🎯 Project Overview

This is a production-ready React Email system for Harbour.Space University. The project creates responsive, branded email templates with a design token system, Cloudinary asset management, and SendGrid integration.

## 🏗️ Key Architecture Principles

### Design Tokens First
- **Always use design tokens** from `emails/_utils/colors.ts` and `emails/_utils/typography.ts`
- **Never hardcode colors or sizes** - use semantic tokens like `semantic.primaryMedium` instead of `#4B2696`
- **Purple 700 (#4B2696)** is the primary accent color for buttons and key elements

### Component Hierarchy
- **HSLayout**: Main email wrapper with header/footer, mobile responsiveness
- **HSButton**: Primary/secondary/outline variants using design tokens  
- **HSEmailHeader**: Logo with optional headerType (e.g., "Events")
- **HSEmailFooter**: Social links, legal info, address, unsubscribe

## 🎨 Brand Guidelines (Critical)

### Colors - OFFICIAL HARBOUR.SPACE PALETTE
```typescript
// Primary Brand Colors
purple: {
  500: '#6D2CF3',  // Primary brand (NOT commonly used in emails)
  700: '#4B2696',  // MAIN accent color for buttons, highlights
  800: '#3C1E75',  // Footer background
}

// Semantic Aliases (USE THESE)
semantic: {
  primaryMedium: '#4B2696',    // Purple 700 - main accent
  textPrimary: '#171717',      // Neutral 900 - main text
  textSecondary: '#525252',    // Neutral 600 - secondary text
  textTertiary: '#A3A3A3',    // Neutral 400 - tertiary text
}
```

### Typography
```typescript
fontSize: {
  xs: '12px',     // Legal text, small labels
  sm: '14px',     // Secondary text, navigation
  base: '16px',   // Body text, addresses
  '2xl': '24px',  // "Spot Reserved!" - DO NOT make smaller
}
```

### Critical Design Rules
1. **"Spot Reserved!" text MUST be 24px** (`fontSize['2xl']`) - user corrected this multiple times
2. **Purple 700 (#4B2696)** for all buttons and accents - not purple 500
3. **NO "Institute of Technology" tagline** - user corrected this repeatedly
4. **Header type goes in top-right corner** (e.g., "Events") in purple 700
5. **Medium font weight (400)** for headings, not bold

## 📱 Mobile Responsiveness 

### Mobile Email Client Issue (SOLVED)
- **Problem**: Grey background padding showed on mobile email clients
- **Solution**: CSS media query changes background to white on mobile:
```css
@media only screen and (max-width: 480px) {
  .bg-gray-100 {
    background-color: ${colors.white} !important;
  }
}
```

### Layout Structure
- **Desktop**: Grey background with white content card (600px max-width)
- **Mobile**: White background, full-width content
- **All elements**: Use design tokens, never hardcoded values

## 🔧 Development Patterns

### Component Creation
```tsx
import { fontSize, semantic } from "../_utils";

// GOOD - Uses design tokens
<Text style={{ fontSize: fontSize.base, color: semantic.textPrimary }}>

// BAD - Hardcoded values
<Text style={{ fontSize: '16px', color: '#171717' }}>
```

### Asset Management
- **Development**: Uses local files from `emails/static/`
- **Production**: Uses Cloudinary CDN with optimization
- **Always use**: `getLogoUrl('main')` for logos, `getImageUrl()` for images

## 🚨 Common User Corrections

### Things the user repeatedly corrected:
1. **"Institute of Technology" tagline** - NEVER add this to headers
2. **24px text size** for "Spot Reserved!" - don't make it smaller
3. **Purple 700, not 500** - use #4B2696 for buttons and accents  
4. **Medium weight fonts** - use 400, not bold
5. **Mobile grey padding** - use media queries to remove on mobile

## 📧 Email Template Structure

### Event Confirmation Template
```tsx
// Props interface
interface EventConfirmationEmailProps {
  firstName: string;
  lastName: string;
  eventTitle: string;
  eventDate: string;
  eventTime: string;
  location: string; // "Online Event" | "Address" | "Hybrid"
}

// Usage pattern
<HSLayout headerType="Events" showFooter={true}>
  <Text style={{ fontSize: fontSize['2xl'], color: semantic.primaryMedium }}>
    Spot Reserved!
  </Text>
  {/* Event details with proper design tokens */}
</HSLayout>
```

## 🛠️ Technical Stack

- **React Email**: Template rendering system
- **Tailwind CSS**: Utility classes (email-optimized config)
- **TypeScript**: Full type safety
- **Cloudinary**: Asset CDN and optimization
- **SendGrid**: Email delivery service

## 📁 File Structure Patterns

```
emails/
├── _components/          # Reusable components with HS prefix
├── _utils/              # Design tokens and utilities  
│   ├── colors.ts        # ALWAYS import semantic colors
│   ├── typography.ts    # ALWAYS import fontSize tokens
│   └── assets.ts        # Cloudinary helpers
├── static/              # Development-only assets
└── [category]/          # Template categories (events, admissions, etc.)
```

## 🚀 Future Development Guidelines

### Adding New Templates
1. Create in appropriate category folder (`emails/admissions/`, `emails/events/`)
2. Use HSLayout wrapper for consistency
3. Follow TypeScript interface patterns
4. Use design tokens exclusively
5. Test mobile responsiveness

### Expanding Components  
1. Prefix with "HS" (HSButton, HSCard, etc.)
2. Use design tokens from `_utils/` 
3. Support multiple variants (primary/secondary/outline)
4. Include proper TypeScript interfaces
5. Follow email-client compatibility patterns

## ⚠️ Critical Reminders

- **NEVER** hardcode colors or font sizes
- **ALWAYS** use semantic design tokens
- **NEVER** add "Institute of Technology" to headers
- **ALWAYS** use purple 700 (#4B2696) for accents, not purple 500
- **REMEMBER** "Spot Reserved!" must be 24px
- **TEST** mobile email clients for grey background issues

This context should help maintain consistency with the established patterns and avoid the common mistakes that were repeatedly corrected during development.