import Checkout from "./components/Checkout";
import Cart from "./components/Cart";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import "./App.css";

function App() {
  
const [cart, setCart] = useState(() => {
  try {
    const savedCart = localStorage.getItem("cropcart-cart");
    const parsedCart = savedCart ? JSON.parse(savedCart) : [];

    return Array.isArray(parsedCart) ? parsedCart : [];
  } catch {
    return [];
  }
});

useEffect(() => {
  localStorage.setItem("cropcart-cart", JSON.stringify(cart));
}, [cart]);



  function addToCart(product) {
    setCart((previousCart) => {
      const existingProduct = previousCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return previousCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...previousCart, { ...product, quantity: 1 }];
    });
  }

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div>
      <Navbar cartCount={cartCount} />
      <Hero />
      <Products addToCart={addToCart} />
      <Cart cart={cart} />
      <Checkout cart={cart} />
    </div>
  );
}

export default App;
