
function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h4>FRESH FROM LOCAL FARMS</h4>

        <h1>Fresh Food, Better Living.</h1>

        <p>
          Shop fresh fruits and vegetables
          directly from local farmers.
        </p>

        <a href="#products" className="shop-btn">
          Shop Now
        </a>
      </div>

      <div className="hero-image">
        <img
          src="/hero.jpg"
          alt="Fresh vegetables"
        />
      </div>
    </section>
  );
}

export default Hero;
