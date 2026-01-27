# Images Directory Structure

This directory contains all images used in the Kashmir Dry Delight website.

## Folder Structure

- **products/** - Product images (nuts, dates, berries, seeds, etc.)
- **categories/** - Category banner/icon images
- **banners/** - Hero banners and promotional banners
- **testimonials/** - Customer testimonial profile images
- **gift-boxes/** - Gift box product images
- **logos/** - Company logos and branding
- **icons/** - Icons and small graphics

## Image Naming Convention

Please follow these naming conventions:

- **Products**: `product-[name]-[variant].jpg` (e.g., `product-almonds-premium.jpg`)
- **Categories**: `category-[name].jpg` (e.g., `category-nuts.jpg`)
- **Banners**: `banner-[purpose].jpg` (e.g., `banner-hero.jpg`)
- **Testimonials**: `testimonial-[name].jpg` (e.g., `testimonial-john-doe.jpg`)
- **Gift Boxes**: `gift-box-[name].jpg` (e.g., `gift-box-premium.jpg`)

## Image Requirements

- **Format**: JPG, PNG, or WebP
- **Recommended Size**: 
  - Product images: 800x800px minimum
  - Banner images: 1920x1080px
  - Category images: 400x400px
  - Testimonial images: 200x200px
- **Optimization**: Compress images before uploading to reduce file size

## Usage in Components

Images in this folder can be referenced in components using:

```jsx
import productImage from '/assets/images/products/product-almonds.jpg';
// or
<img src="/assets/images/products/product-almonds.jpg" alt="Almonds" />
```

