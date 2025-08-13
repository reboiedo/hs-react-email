# Harbour.Space University - Email Templates

A modern React Email system for Harbour.Space University featuring responsive templates, design tokens, Cloudinary asset management, and SendGrid integration.

## ✨ Features

- **React Email Components** - Modern email templates built with React
- **SVG Support** - Crisp logos with PNG fallback for unsupported clients
- **Design System** - Consistent colors, typography, and spacing using design tokens
- **Cloudinary CDN** - Optimized asset management and delivery
- **SendGrid Integration** - Reliable email delivery with dynamic templates
- **Mobile Responsive** - Email-optimized layouts for all devices
- **TypeScript Support** - Full type safety across all components

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   Configure your SendGrid API key and Cloudinary credentials.

3. **Start development server:**
   ```bash
   npm run dev
   ```
   Preview emails at [http://localhost:3000](http://localhost:3000)

## 📧 Asset Management Workflow

### How It Works

#### Development Mode
- **Location**: Assets served from `emails/static/`
- **Access**: Direct file serving via `/static/filename.svg`
- **Benefits**: Instant updates, no upload needed
- **Usage**: Automatic when `NODE_ENV` is not set to `production`

#### Production Mode
- **Location**: Assets served from Cloudinary CDN
- **Access**: Optimized URLs like `https://res.cloudinary.com/...`
- **Benefits**: Global CDN, automatic optimization, caching
- **Usage**: Automatic when `NODE_ENV=production`

### Asset Upload Process

1. **Add new assets locally:**
   ```bash
   # Place SVG and PNG files in emails/static/
   emails/static/Logo_Purple.svg
   emails/static/mdi_facebook.svg
   ```

2. **Upload to Cloudinary:**
   ```bash
   node scripts/upload-assets.js upload
   ```
   This uploads all mapped assets and creates `assets.json` manifest.

3. **List uploaded assets:**
   ```bash
   node scripts/upload-assets.js list
   ```

### SVG Support with PNG Fallback

The system now supports SVG logos and icons with automatic PNG fallback:

```typescript
// In components
import { getLogoUrl, getIconUrl } from "../_utils";

// Get logo URLs (returns both SVG and PNG)
const logo = getLogoUrl('main'); // Returns { svg, png, default }

// Use in email template
<Img src={logo.svg} /> // 92% of clients support SVG

// Icons work the same way
const icon = getIconUrl('facebook');
<Img src={icon.svg} />
```

**Email Client Support:**
- ✅ Gmail Desktop: Full SVG support
- ⚠️ Gmail Mobile: Partial (non-Google accounts only)
- ✅ Outlook: Supported across versions
- ✅ Apple Mail: Full support
- Overall: ~92% SVG support

## 📁 Project Structure

```
emails/
├── _components/          # Reusable components
│   ├── HSLayout.tsx     # Main email wrapper
│   ├── HSEmailHeader.tsx # Logo with SVG support
│   ├── HSEmailFooter.tsx # Social icons (local SVGs)
│   └── HSButton.tsx     # Styled buttons
├── _utils/              # Design system & helpers
│   ├── colors.ts        # Brand color tokens
│   ├── typography.ts    # Font size tokens
│   └── assets.ts        # Asset URL helpers with SVG/PNG
├── static/              # Local assets
│   ├── Logo_Purple.svg  # Main logo SVG
│   ├── Logo_White.svg   # White logo SVG
│   ├── mdi_*.svg       # Social media icons
│   └── *.png           # PNG fallbacks
└── events/              # Event templates
    └── confirmation.tsx # Event confirmation email
```

## 🎨 Design System

### Colors
```typescript
// Primary accent (buttons, highlights)
purple[700]: '#4B2696'

// Text colors
semantic.textPrimary: '#171717'
semantic.textSecondary: '#525252'
```

### Typography
```typescript
fontSize: {
  xs: '12px',   // Legal text
  sm: '14px',   // Secondary text
  base: '16px', // Body text
  '2xl': '24px' // Headlines
}
```

## 🔧 Scripts

- `npm run dev` - Development server with live preview
- `npm run build` - Build email templates
- `npm run export` - Export as HTML files
- `node scripts/upload-assets.js upload` - Upload assets to Cloudinary

## 📚 SendGrid Integration

```typescript
import { render } from "@react-email/render";
import EventConfirmationEmail from "./emails/events/confirmation";

const html = render(EventConfirmationEmail({
  firstName: "John",
  eventTitle: "Tech Talk",
  eventDate: "March 15, 2024",
  location: "Barcelona Campus"
}));

// Send via SendGrid
await sendEmail({ to, subject, html });
```

## 🚀 Production Deployment

1. **Upload assets to Cloudinary:**
   ```bash
   node scripts/upload-assets.js upload
   ```

2. **Set production environment:**
   ```bash
   NODE_ENV=production
   ```

3. **Deploy application**
   - Assets automatically load from Cloudinary
   - SVG logos display for supported clients
   - PNG fallbacks ensure 100% compatibility

## 📧 Email Client Compatibility

Tested and optimized for:
- Gmail (Desktop & Mobile)
- Apple Mail (Desktop & iOS)
- Outlook (Web, Desktop & Mobile)
- Yahoo Mail
- Thunderbird

## 🤝 Contributing

1. Add assets to `emails/static/`
2. Update `scripts/upload-assets.js` mappings if needed
3. Run upload script before deployment
4. Use design tokens for consistency
5. Test across email clients

## License

MIT License