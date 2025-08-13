#!/usr/bin/env node
/**
 * Cloudinary Asset Upload Script for Harbour.Space Email Templates
 * 
 * This script uploads assets to Cloudinary with automatic optimization
 * and generates an asset manifest for use in email templates.
 */

const { v2: cloudinary } = require('cloudinary');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Asset manifest to track all uploaded assets
const assetManifest = {
  lastUpdated: new Date().toISOString(),
  baseUrl: `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}`,
  assets: {}
};

/**
 * Upload a single asset to Cloudinary
 */
async function uploadAsset(localPath, cloudinaryPath, options = {}) {
  try {
    console.log(`Uploading ${localPath} to ${cloudinaryPath}...`);
    
    const result = await cloudinary.uploader.upload(localPath, {
      public_id: cloudinaryPath,
      folder: 'harbour-space-emails',
      resource_type: 'auto',
      quality: 'auto:good',
      ...options
    });

    console.log(`✅ Uploaded: ${result.secure_url}`);
    
    // Add to manifest
    assetManifest.assets[cloudinaryPath] = {
      url: result.secure_url,
      publicId: result.public_id,
      width: result.width,
      height: result.height,
      format: result.format,
      bytes: result.bytes,
      uploadedAt: new Date().toISOString()
    };

    return result;
  } catch (error) {
    console.error(`❌ Failed to upload ${localPath}:`, error.message);
    throw error;
  }
}

/**
 * Upload all assets from the static directory
 */
async function uploadAllAssets() {
  const staticDir = path.join(__dirname, '../emails/static');
  
  if (!fs.existsSync(staticDir)) {
    console.log('No static directory found, creating it...');
    fs.mkdirSync(staticDir, { recursive: true });
    return;
  }

  console.log('🚀 Starting asset upload to Cloudinary...\n');

  // Define asset mapping (local file -> Cloudinary path)
  const assetMappings = {
    // Logos - SVG and PNG versions
    'Logo_Purple.svg': 'logos/harbour-space-logo',
    'Logo_White.svg': 'logos/harbour-space-logo-white',
    'harbour-space-logo.png': 'logos/harbour-space-logo-fallback',
    'harbour-space-logo-white.png': 'logos/harbour-space-logo-white-fallback',
    
    // Social Media Icons - SVG and PNG versions
    'mdi_facebook.svg': 'icons/facebook',
    'mdi_facebook.png': 'icons/facebook-fallback',
    'mdi_instagram.svg': 'icons/instagram',
    'mdi_instagram.png': 'icons/instagram-fallback',
    'mdi_linkedin.svg': 'icons/linkedin',
    'mdi_linkedin.png': 'icons/linkedin-fallback',
    'mdi_tiktok.svg': 'icons/tiktok',
    'mdi_tiktok.png': 'icons/tiktok-fallback',
    'mdi_youtube.svg': 'icons/youtube',
    'mdi_youtube.png': 'icons/youtube-fallback',
    
    // UI Icons
    'mdi_map.svg': 'icons/map',
    
    // Event Images
    'event-test-asset.png': 'images/events/test-asset',
  };

  try {
    // Upload each asset
    for (const [localFile, cloudinaryPath] of Object.entries(assetMappings)) {
      const localPath = path.join(staticDir, localFile);
      
      if (fs.existsSync(localPath)) {
        await uploadAsset(localPath, cloudinaryPath);
      } else {
        console.log(`⚠️  File not found: ${localPath}`);
      }
    }

    // Save manifest
    const manifestPath = path.join(__dirname, '../assets.json');
    fs.writeFileSync(manifestPath, JSON.stringify(assetManifest, null, 2));
    console.log(`\n✅ Asset manifest saved to ${manifestPath}`);

    console.log('\n🎉 Upload complete! Assets are now available via Cloudinary CDN.');
    console.log(`📊 Total assets: ${Object.keys(assetManifest.assets).length}`);

  } catch (error) {
    console.error('\n❌ Upload failed:', error.message);
    process.exit(1);
  }
}

/**
 * Upload a single file (for manual uploads)
 */
async function uploadSingleFile(filePath, cloudinaryPath) {
  if (!fs.existsSync(filePath)) {
    console.error(`❌ File not found: ${filePath}`);
    process.exit(1);
  }

  try {
    await uploadAsset(filePath, cloudinaryPath);
    
    // Save updated manifest
    const manifestPath = path.join(__dirname, '../assets.json');
    fs.writeFileSync(manifestPath, JSON.stringify(assetManifest, null, 2));
    
    console.log('\n✅ Single file upload complete!');
  } catch (error) {
    console.error('❌ Upload failed:', error.message);
    process.exit(1);
  }
}

/**
 * Check Cloudinary configuration
 */
function checkConfig() {
  const required = ['CLOUDINARY_CLOUD_NAME', 'CLOUDINARY_API_KEY', 'CLOUDINARY_API_SECRET'];
  const missing = required.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    console.error('❌ Missing required environment variables:');
    missing.forEach(key => console.error(`   - ${key}`));
    console.error('\nPlease add these to your .env file.');
    process.exit(1);
  }
}

// CLI interface
async function main() {
  checkConfig();

  const [,, command, ...args] = process.argv;

  switch (command) {
    case 'upload':
      if (args.length === 2) {
        await uploadSingleFile(args[0], args[1]);
      } else {
        await uploadAllAssets();
      }
      break;
    
    case 'list':
      console.log('📋 Current assets in manifest:');
      const manifestPath = path.join(__dirname, '../assets.json');
      if (fs.existsSync(manifestPath)) {
        const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
        Object.entries(manifest.assets).forEach(([key, asset]) => {
          console.log(`   ${key} -> ${asset.url}`);
        });
      } else {
        console.log('   No manifest found. Run upload first.');
      }
      break;
    
    default:
      console.log(`
📋 Harbour.Space Email Asset Management

Usage:
  node scripts/upload-assets.js upload              # Upload all static assets
  node scripts/upload-assets.js upload <file> <id>  # Upload single file
  node scripts/upload-assets.js list               # List current assets

Examples:
  node scripts/upload-assets.js upload
  node scripts/upload-assets.js upload logo.png logos/new-logo
  node scripts/upload-assets.js list
      `);
  }
}

// Run if called directly
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { uploadAsset, uploadAllAssets, assetManifest };