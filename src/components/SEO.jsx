import { Helmet } from 'react-helmet-async'

const SEO = ({ 
  title = 'Kashmir Dry Delight - Premium Dry Fruits & Nuts Online Store | Buy Dry Fruits Online India',
  description = 'Buy premium quality dry fruits, nuts, dates, berries, and gift boxes from Kashmir. 100% quality guarantee, fast shipping across India. Best prices on almonds, cashews, walnuts, pistachios, dates, and more. Shop now!',
  keywords = 'dry fruits, dryfruits, kashmir dry fruit, kashmir dry fruits, buy dry fruits online, online dry fruits, premium dry fruits, nuts online, almonds online, cashews online, dates online, kashmir nuts, dry fruits india, best dry fruits, quality dry fruits, organic dry fruits, wholesale dry fruits, dry fruits delivery, gift boxes dry fruits, premium nuts, mamra almonds, kashmiri almonds, premium cashews, medjool dates, deglet noor dates, walnuts, pistachios, berries, cranberries, blueberries, sunflower seeds, pumpkin seeds, dry fruits shop, dry fruits store, kashmir dry delight',
  image = '/assets/images/logos/logo.png',
  url = '',
  type = 'website',
  product = null,
  breadcrumbs = null
}) => {
  const siteUrl = 'https://kashmirdrydelights.vercel.app'
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl
  const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`

  // Enhanced Structured Data (JSON-LD) for maximum SEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Kashmir Dry Delight",
    "alternateName": "KDD",
    "url": siteUrl,
    "logo": fullImageUrl,
    "description": "Premium quality dry fruits, nuts, dates, berries, and gift boxes from Kashmir. 100% quality guarantee with fast shipping across India.",
    "sameAs": [],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "areaServed": ["IN"],
      "availableLanguage": ["English", "Hindi"],
      "availableCountry": "IN"
    },
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Jammu and Kashmir",
      "addressCountry": "IN"
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Kashmir Dry Delight - Premium Dry Fruits Online Store",
    "url": siteUrl,
    "description": "India's leading online store for premium quality dry fruits, nuts, dates, and berries from Kashmir. Buy authentic Kashmiri dry fruits with 100% quality guarantee.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteUrl}/shop?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    "inLanguage": "en-IN"
  }

  // LocalBusiness schema for local SEO
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}#business`,
    "name": "Kashmir Dry Delight",
    "image": fullImageUrl,
    "url": siteUrl,
    "description": "Premium quality dry fruits, nuts, dates, berries, and gift boxes from Kashmir. Online store with fast delivery across India.",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Jammu and Kashmir",
      "addressCountry": "IN"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "priceRange": "₹299-₹3499",
    "servesCuisine": "Dry Fruits, Nuts, Dates, Berries",
    "telephone": "+91-XXXXXXXXXX"
  }

  // Product schema if product data is provided
  let productSchema = null
  if (product && type === 'product') {
    productSchema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": product.name,
      "image": product.image ? (product.image.startsWith('http') ? product.image : `${siteUrl}${product.image}`) : fullImageUrl,
      "description": product.description || description,
      "brand": {
        "@type": "Brand",
        "name": "Kashmir Dry Delight"
      },
      "offers": {
        "@type": "Offer",
        "url": fullUrl,
        "priceCurrency": "INR",
        "price": product.price || product.basePrice || "0",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@type": "Organization",
          "name": "Kashmir Dry Delight"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "150"
      }
    }
  }

  // BreadcrumbList schema if breadcrumbs are provided
  let breadcrumbSchema = null
  if (breadcrumbs && Array.isArray(breadcrumbs)) {
    breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": crumb.url ? (crumb.url.startsWith('http') ? crumb.url : `${siteUrl}${crumb.url}`) : fullUrl
      }))
    }
  }

  return (
    <Helmet>
      {/* Primary Meta Tags - Enhanced for maximum SEO */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Kashmir Dry Delight" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="1 days" />
      <meta name="rating" content="general" />
      <meta name="distribution" content="global" />
      <meta name="geo.region" content="IN-JK" />
      <meta name="geo.placename" content="Kashmir" />
      <meta name="geo.position" content="34.0837;74.7973" />
      <meta name="ICBM" content="34.0837, 74.7973" />
      
      {/* Open Graph / Facebook - Enhanced */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Kashmir Dry Delight - Premium Dry Fruits" />
      <meta property="og:site_name" content="Kashmir Dry Delight" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:locale:alternate" content="hi_IN" />
      
      {/* Twitter - Enhanced */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content="Kashmir Dry Delight - Premium Dry Fruits" />
      <meta name="twitter:site" content="@kashmirdrydelight" />
      <meta name="twitter:creator" content="@kashmirdrydelight" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#d4a574" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-mobile-web-app-title" content="Kashmir Dry Delight" />
      <meta name="application-name" content="Kashmir Dry Delight" />
      <meta name="msapplication-TileColor" content="#d4a574" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Alternate Language Tags */}
      <link rel="alternate" hrefLang="en" href={fullUrl} />
      <link rel="alternate" hrefLang="hi" href={fullUrl} />
      <link rel="alternate" hrefLang="x-default" href={fullUrl} />
      
      {/* Structured Data - Comprehensive Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      {productSchema && (
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      )}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  )
}

export default SEO

