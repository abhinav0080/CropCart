
function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <h2>🌱 CropCart</h2>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="#products">Products</a>
        <a href="#about">About</a>
        <a href="#login">Login</a>
        <a href="#cart">Cart ({cartCount})</a>
      </div>
    </nav>
  );
}

export default Navbar;