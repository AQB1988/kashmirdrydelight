import { Link } from "react-router-dom";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Premium Dry Fruits from Kashmir</h1>
        <p>
          Discover the finest selection of nuts, dates, berries, and more from
          the beautiful valleys of Kashmir
        </p>
        <Link to="/shop" className="btn btn-primary">
          Shop Now
        </Link>
      </div>
      <div className="hero-image">
        <div className="banner-video-container">
          <video
            src="/assets/images/banners/12.MOV"
            className="hero-banner-video"
            autoPlay
            loop
            muted
            playsInline
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextElementSibling.style.display = "flex";
            }}
          >
            Your browser does not support the video tag.
          </video>
          <div className="video-placeholder" style={{ display: "none" }}>
            <p>Video unavailable</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
