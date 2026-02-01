import SEO from "../components/SEO";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import GiftBoxes from "../components/GiftBoxes";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import FeaturedProducts from "../components/FeaturedProducts";
import SignatureGiftBoxes from "../components/SignatureGiftBoxes";
import "./Home.css";

const Home = () => {
  return (
    <main>
      <SEO
        title="Kashmir Dry Delight - Premium Dry Fruits & Nuts Online Store | Buy Dry Fruits Online India | Best Dry Fruits Shop"
        description="Buy premium quality dry fruits, nuts, dates, berries, and gift boxes from Kashmir. 100% quality guarantee, fast shipping across India. Best prices on almonds, cashews, walnuts, pistachios, dates, and more. Shop authentic Kashmiri dry fruits online now!"
        keywords="dry fruits, dryfruits, kashmir dry fruit, kashmir dry fruits, buy dry fruits online, online dry fruits, premium dry fruits, nuts online, almonds online, cashews online, dates online, kashmir nuts, dry fruits india, best dry fruits, quality dry fruits, organic dry fruits, wholesale dry fruits, dry fruits delivery, gift boxes dry fruits, premium nuts, mamra almonds, kashmiri almonds, premium cashews, medjool dates, deglet noor dates, walnuts, pistachios, berries, cranberries, blueberries, sunflower seeds, pumpkin seeds, dry fruits shop, dry fruits store, kashmir dry delight, buy dry fruits, dry fruits online shopping, online dry fruits store, best dry fruits online, premium dry fruits online, kashmiri dry fruits online, dry fruits website, dry fruits ecommerce, dry fruits online india, dry fruits delivery india"
        url="/"
      />
      <Hero />
      <Categories />
      <GiftBoxes />

      <FeaturedProducts />
      <SignatureGiftBoxes />
      <Features />
      {/* <Testimonials /> */}
      <Newsletter />
    </main>
  );
};

export default Home;
