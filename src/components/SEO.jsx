import { Helmet } from 'react-helmet-async'

const SEO = ({ 
  title = 'Kashmir Dry Delight - Premium Dry Fruits & Nuts',
  description = 'Buy premium quality dry fruits, nuts, dates, berries, and gift boxes from Kashmir. 100% quality guarantee, fast shipping across India.',
  keywords = 'dry fruits, nuts, almonds, cashews, dates, berries, kashmir dry fruits, premium nuts, gift boxes',
  image = '/assets/images/logos/logo.png',
  url = '',
  type = 'website'
}) => {
  const siteUrl = 'https://kashmirdrydelights.vercel.app'
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl
  const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`

  // Structured Data (JSON-LD) for better SEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Kashmir Dry Delight",
    "url": siteUrl,
    "logo": fullImageUrl,
    "description": description,
    "sameAs": [],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "areaServed": "IN",
      "availableLanguage": "English"
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Kashmir Dry Delight",
    "url": siteUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteUrl}/shop?search={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  }

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImageUrl} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
    </Helmet>
  )
}

export default SEO

