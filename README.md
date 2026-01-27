# Kashmir Dry Delight

A modern, responsive e-commerce website for premium dry fruits, inspired by dryfruithouse.com. Built with React and Vite.

## Features

- 🏠 **Home Page** with hero section, categories, featured products, gift boxes, testimonials, and newsletter
- 🛍️ **Shop Page** with category filtering and product listings
- 📖 **About Page** with company information
- 📞 **Contact Page** with contact form
- 📦 **Bulk Order Page** for wholesale inquiries
- 📱 **Fully Responsive** design for all devices
- 🎨 **Modern UI** with smooth animations and transitions

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd kashmir-dry-delight
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

To preview the production build:

```bash
npm run preview
```

## Project Structure

```
kashmir-dry-delight/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigation header
│   │   ├── Footer.jsx          # Footer component
│   │   ├── Hero.jsx            # Hero section
│   │   ├── Categories.jsx      # Product categories
│   │   ├── FeaturedProducts.jsx # Featured products section
│   │   ├── GiftBoxes.jsx       # Gift boxes section
│   │   ├── Features.jsx        # Features section
│   │   ├── Testimonials.jsx    # Customer testimonials
│   │   └── Newsletter.jsx      # Newsletter subscription
│   ├── pages/
│   │   ├── Home.jsx            # Home page
│   │   ├── Shop.jsx            # Shop page
│   │   ├── About.jsx           # About page
│   │   ├── Contact.jsx         # Contact page
│   │   └── BulkOrder.jsx       # Bulk order page
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Technologies Used

- **React 18** - UI library
- **React Router DOM** - Routing
- **Vite** - Build tool and dev server
- **CSS3** - Styling with custom properties

## Customization

### Colors

You can customize the color scheme by modifying the CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #d4a574;
  --secondary-color: #8b6f47;
  --text-dark: #333;
  --text-light: #666;
  --bg-light: #f8f8f8;
  --white: #ffffff;
  --border-color: #e0e0e0;
}
```

### Content

- Update product data in `src/pages/Shop.jsx`
- Modify testimonials in `src/components/Testimonials.jsx`
- Update contact information in `src/components/Footer.jsx` and `src/pages/Contact.jsx`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal and commercial use.

## Contact

For inquiries, please contact: info@kashmirdrydelight.com

