/**
 * Asset Helper Utility for Harbour.Space Email Templates
 * 
 * This utility provides consistent asset URL generation for both development and production.
 * It handles Cloudinary transformations and provides fallbacks for missing assets.
 */

// Asset manifest type
interface AssetInfo {
  url: string;
  publicId: string;
  width?: number;
  height?: number;
  format: string;
  bytes: number;
  uploadedAt: string;
}

interface AssetManifest {
  lastUpdated: string;
  baseUrl: string;
  assets: Record<string, AssetInfo>;
}

// Environment detection
const isProduction = process.env.NODE_ENV === 'production';
const cloudName = process.env.CLOUDINARY_CLOUD_NAME || 'demo';

/**
 * Load asset manifest (in production, this would be pre-loaded)
 */
function loadAssetManifest(): AssetManifest | null {
  if (typeof window !== 'undefined') return null; // Client-side, skip
  
  try {
    const fs = require('fs');
    const path = require('path');
    const manifestPath = path.join(process.cwd(), 'assets.json');
    
    if (fs.existsSync(manifestPath)) {
      return JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    }
  } catch (error) {
    console.warn('Failed to load asset manifest:', error.message);
  }
  
  return null;
}

/**
 * Generate Cloudinary URL with transformations
 */
function generateCloudinaryUrl(
  publicId: string,
  transformations: Record<string, any> = {}
): string {
  const baseUrl = `https://res.cloudinary.com/${cloudName}/image/upload`;
  
  // Build transformation string
  const transformParts: string[] = [];
  
  // Common email optimizations
  const defaultTransforms = {
    f_auto: true, // Automatic format selection
    q_auto: 'good', // Automatic quality
    dpr_auto: true, // Automatic DPR for retina displays
    ...transformations
  };
  
  Object.entries(defaultTransforms).forEach(([key, value]) => {
    if (value === true) {
      transformParts.push(key);
    } else if (value !== false && value !== null && value !== undefined) {
      transformParts.push(`${key}_${value}`);
    }
  });
  
  const transformString = transformParts.length > 0 ? `/${transformParts.join(',')}` : '';
  return `${baseUrl}${transformString}/${publicId}`;
}

/**
 * Get asset URL with optional transformations
 */
export function getAssetUrl(
  assetId: string,
  transformations?: Record<string, any>
): string {
  // In development, use local static files
  if (!isProduction) {
    return `/static/${assetId.split('/').pop()}.png`;
  }
  
  // In production, use Cloudinary
  const manifest = loadAssetManifest();
  
  if (manifest && manifest.assets[assetId]) {
    const asset = manifest.assets[assetId];
    const publicId = `harbour-space-emails/${assetId}`;
    return generateCloudinaryUrl(publicId, transformations);
  }
  
  // Fallback: construct URL from asset ID
  const publicId = `harbour-space-emails/${assetId}`;
  return generateCloudinaryUrl(publicId, transformations);
}

/**
 * Get optimized logo URL with SVG support and PNG fallback
 * Returns an object with both SVG and PNG URLs for email client compatibility
 */
export function getLogoUrl(variant: 'main' | 'white' | 'icon' = 'main'): { svg: string; png: string; default: string } {
  const logoMap = {
    main: {
      svg: 'logos/harbour-space-logo',
      png: 'logos/harbour-space-logo-fallback'
    },
    white: {
      svg: 'logos/harbour-space-logo-white',
      png: 'logos/harbour-space-logo-white-fallback'
    },
    icon: {
      svg: 'logos/harbour-space-icon',
      png: 'logos/harbour-space-icon-fallback'
    }
  };
  
  const logo = logoMap[variant];
  
  // In development, return local files
  if (!isProduction) {
    const svgFile = variant === 'main' ? 'Logo_Purple.svg' : 'Logo_White.svg';
    const pngFile = variant === 'main' ? 'harbour-space-logo.png' : 'harbour-space-logo-white.png';
    
    return {
      svg: `/static/${svgFile}`,
      png: `/static/${pngFile}`,
      default: `/static/${pngFile}` // Default to PNG for safety
    };
  }
  
  // In production, return Cloudinary URLs
  return {
    svg: getAssetUrl(logo.svg, { f: 'svg' }),
    png: getAssetUrl(logo.png, {
      h: 48, // 48px height for email headers
      f: 'png',
      q: 'auto:best',
      fl: 'png8'
    }),
    default: getAssetUrl(logo.png, { h: 48, f: 'png', q: 'auto:best' })
  };
}

/**
 * Get icon URL with SVG support and PNG fallback
 * Specifically for social media and UI icons
 */
export function getIconUrl(
  iconName: 'facebook' | 'instagram' | 'linkedin' | 'tiktok' | 'youtube' | 'map' | 'calendar' | 'clock',
  size: number = 24
): { svg: string; png: string; default: string } {
  // In development, use local files
  if (!isProduction) {
    const svgFile = `mdi_${iconName}.svg`;
    const pngFile = `mdi_${iconName}.png`;
    
    return {
      svg: `/static/${svgFile}`,
      png: `/static/${pngFile}`,
      default: `/static/${pngFile}` // Default to PNG for safety
    };
  }
  
  // In production, use Cloudinary
  const svgPath = `icons/${iconName}`;
  const pngPath = `icons/${iconName}-fallback`;
  
  return {
    svg: getAssetUrl(svgPath, { f: 'svg', w: size, h: size }),
    png: getAssetUrl(pngPath, { 
      f: 'png',
      w: size,
      h: size,
      q: 'auto:good'
    }),
    default: getAssetUrl(pngPath, { f: 'png', w: size, h: size })
  };
}

/**
 * Get optimized image URL for email
 */
export function getImageUrl(
  assetId: string,
  width?: number,
  height?: number
): string {
  const transformations: Record<string, any> = {};
  
  if (width) transformations.w = width;
  if (height) transformations.h = height;
  
  // Email-specific optimizations
  transformations.c = 'fill'; // Crop to fill dimensions
  transformations.g = 'auto'; // Automatic gravity for smart cropping
  
  return getAssetUrl(assetId, transformations);
}

/**
 * Get all available assets
 */
export function getAvailableAssets(): Record<string, AssetInfo> {
  const manifest = loadAssetManifest();
  return manifest?.assets || {};
}

/**
 * Preload critical assets (for email templates)
 */
export function getCriticalAssets(): Record<string, string> {
  return {
    logo: getLogoUrl('main'),
    logoWhite: getLogoUrl('white'),
    icon: getLogoUrl('icon')
  };
}

// Export asset categories for easy access
export const assets = {
  logos: {
    main: () => getLogoUrl('main'),
    white: () => getLogoUrl('white'),
    icon: () => getLogoUrl('icon')
  },
  
  images: {
    get: (id: string, width?: number, height?: number) => 
      getImageUrl(id, width, height)
  },
  
  // Utility for custom transformations
  custom: (assetId: string, transforms: Record<string, any>) =>
    getAssetUrl(assetId, transforms)
};

export default { getAssetUrl, getLogoUrl, getIconUrl, getImageUrl, assets };