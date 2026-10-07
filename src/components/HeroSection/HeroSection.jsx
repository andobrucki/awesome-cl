import "./HeroSection.module.scss";
import logo from "../../assets/images/A-logo.png";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <img src={logo} alt="Logo" className="hero-logo" />
      <h1 className="hero-title"></h1>
      <p className="hero-description"></p>
      <div className="hero-buttons">
        <button className="hero-btn learn-more"></button>
      </div>
    </section>
  );
};

export default HeroSection;
