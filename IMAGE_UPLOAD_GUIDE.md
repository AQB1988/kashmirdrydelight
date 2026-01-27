# Image Upload Guide

This guide explains where to upload images for the Kashmir Dry Delight website.

## Folder Structure

All images should be placed in the `public/assets/images/` directory, organized by category:

```
public/
└── assets/
    └── images/
        ├── products/          # Product images
        ├── categories/        # Category images
        ├── banners/           # Hero/banner images
        ├── testimonials/      # Customer testimonial photos
        ├── gift-boxes/        # Gift box product images
        ├── logos/             # Company logos
        └── icons/             # Icons and small graphics
```

## Image Requirements

### Products (`products/`)
- **Format**: JPG, PNG, or WebP
- **Size**: 800x800px minimum (square recommended)
- **Naming**: `product-[name]-[variant].jpg`
- **Examples**:
  - `product-almonds.jpg`
  - `product-medjool-dates.jpg`
  - `product-breakfast-seeds.jpg`

### Categories (`categories/`)
- **Format**: JPG, PNG, or WebP
- **Size**: 400x400px (square)
- **Naming**: `category-[name].jpg`
- **Examples**:
  - `category-nuts.jpg`
  - `category-dates.jpg`
  - `category-gift-boxes.jpg`

### Banners (`banners/`)
- **Format**: JPG, PNG, or WebP
- **Size**: 1920x1080px (16:9 aspect ratio)
- **Naming**: `banner-[purpose].jpg`
- **Examples**:
  - `banner-hero.jpg` (main hero banner)

### Testimonials (`testimonials/`)
- **Format**: JPG, PNG, or WebP
- **Size**: 200x200px (square, will be displayed as circle)
- **Naming**: `testimonial-[name].jpg`
- **Examples**:
  - `testimonial-roshan.jpg`
  - `testimonial-bilal.jpg`

### Gift Boxes (`gift-boxes/`)
- **Format**: JPG, PNG, or WebP
- **Size**: 800x800px (square)
- **Naming**: `gift-box-[name].jpg` or `gift-box-signature-[number].jpg`
- **Examples**:
  - `gift-box-festival.jpg`
  - `gift-box-premium.jpg`
  - `gift-box-signature-1.jpg`

### Logos (`logos/`)
- **Format**: PNG (with transparency) or SVG
- **Size**: Variable (will be scaled to 50px height)
- **Naming**: `logo.png` or `logo.svg`

## How Images Are Used

### In Components
Images are referenced using absolute paths from the `public` folder:

```jsx
// Example from Hero component
<img src="/assets/images/banners/banner-hero.jpg" alt="Hero Banner" />
```

### Fallback Behavior
All image components have fallback behavior:
- If an image fails to load, a placeholder (emoji or gradient) will be displayed
- This ensures the site works even if images are missing

## Upload Process

1. **Prepare Images**:
   - Resize images to recommended dimensions
   - Optimize file size (use tools like TinyPNG or ImageOptim)
   - Use descriptive filenames

2. **Upload to Correct Folder**:
   - Place each image in its corresponding folder
   - Follow the naming conventions

3. **Test**:
   - Run `npm run dev` to see images in development
   - Verify images load correctly
   - Check responsive behavior on different screen sizes

## Image Optimization Tips

1. **Compress Images**: Use tools like:
   - TinyPNG (https://tinypng.com/)
   - ImageOptim (https://imageoptim.com/)
   - Squoosh (https://squoosh.app/)

2. **Use WebP Format**: For better compression (modern browsers)

3. **Lazy Loading**: Images are automatically optimized by Vite

4. **Responsive Images**: Consider creating multiple sizes for different devices

## Current Image References

The following images are expected by the components:

### Hero Section
- `/assets/images/banners/banner-hero.jpg`

### Categories
- `/assets/images/categories/category-nuts.jpg`
- `/assets/images/categories/category-dates.jpg`
- `/assets/images/categories/category-exclusives.jpg`
- `/assets/images/categories/category-berries.jpg`
- `/assets/images/categories/category-seeds.jpg`
- `/assets/images/categories/category-gift-boxes.jpg`

### Products (Featured)
- `/assets/images/products/product-breakfast-seeds.jpg`
- `/assets/images/products/product-medjool-dates.jpg`
- `/assets/images/products/product-brazil-nuts.jpg`
- `/assets/images/products/product-walnuts.jpg`
- `/assets/images/products/product-pistachios.jpg`
- `/assets/images/products/product-almonds.jpg`

### Gift Boxes
- `/assets/images/gift-boxes/gift-box-festival.jpg`
- `/assets/images/gift-boxes/gift-box-premium.jpg`
- `/assets/images/gift-boxes/gift-box-deluxe.jpg`
- `/assets/images/gift-boxes/gift-box-luxury.jpg`
- `/assets/images/gift-boxes/gift-box-royal.jpg`
- `/assets/images/gift-boxes/gift-box-exclusive.jpg`
- `/assets/images/gift-boxes/gift-box-signature-1.jpg` through `gift-box-signature-6.jpg`

### Testimonials
- `/assets/images/testimonials/testimonial-roshan.jpg`
- `/assets/images/testimonials/testimonial-bilal.jpg`
- `/assets/images/testimonials/testimonial-prashanth.jpg`
- `/assets/images/testimonials/testimonial-lucent.jpg`
- `/assets/images/testimonials/testimonial-devraj.jpg`
- `/assets/images/testimonials/testimonial-rajkumar.jpg`

### Logo
- `/assets/images/logos/logo.png`

## Notes

- All image paths are relative to the `public` folder
- Images in `public` are served statically and accessible at `/assets/images/...`
- Missing images will show fallback placeholders
- Always use descriptive alt text for accessibility

