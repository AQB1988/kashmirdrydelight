# Products Data Management

All products are stored in `products.json` and organized by category. This makes it easy to add, edit, or remove products without modifying any code.

## File Structure

The `products.json` file is organized by categories:
- `nuts` - Nuts and dry fruits
- `dates` - Dates
- `exclusives` - Exclusive products
- `berries` - Berries
- `seeds` - Seeds
- `gift-boxes` - Gift boxes and hampers

## Adding a New Product

To add a new product, simply add it to the appropriate category array in `products.json`:

```json
{
  "nuts": [
    {
      "id": 21,
      "name": "New Product Name",
      "basePrice": 999,
      "category": "nuts",
      "image": "/assets/images/products/product-name.jpg",
      "description": "Product description here"
    }
  ]
}
```

### Required Fields:
- `id` - Unique number (must be unique across all products)
- `name` - Product name
- `basePrice` - Base price in rupees (number, no currency symbol)
- `category` - Must match the category key (nuts, dates, exclusives, berries, seeds, gift-boxes)
- `image` - Image URL (can be local path or external URL)
- `description` - Product description

### Example: Adding a New Gift Box

```json
"gift-boxes": [
  {
    "id": 21,
    "name": "New Year Gift Box",
    "basePrice": 1999,
    "category": "gift-boxes",
    "image": "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&h=800&fit=crop&q=80",
    "description": "Special New Year gift box with premium dry fruits."
  }
]
```

## Adding a New Category

To add a completely new category:

1. Add the category key to `products.json`:
```json
{
  "new-category": [
    {
      "id": 22,
      "name": "Product Name",
      "basePrice": 999,
      "category": "new-category",
      "image": "/path/to/image.jpg",
      "description": "Product description"
    }
  ]
}
```

2. Update the category filter in `src/pages/Shop.jsx` to include your new category.

## Notes

- Product IDs must be unique across all categories
- The `basePrice` is used to calculate prices for different weights on the product detail page
- Images can be:
  - Local paths: `/assets/images/products/product-name.jpg`
  - External URLs: `https://images.unsplash.com/photo-...`
- After adding products, the changes will appear automatically on the website

## Category Reference

- **nuts**: Nuts & Dry Fruits
- **dates**: Dates
- **exclusives**: KDD Exclusives
- **berries**: Berries
- **seeds**: Seeds & More
- **gift-boxes**: Gift Boxes

