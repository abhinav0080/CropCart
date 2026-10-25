
import { useState } from "react";

function Checkout({ cart }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  // Calculate the cart total
  const totalPrice = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  // Handle checkout
  function handlePlaceOrder(event) {
    event.preventDefault();

    if (
      !name.trim() ||
      !phone.trim() ||
      !email.trim() ||
      !address.trim()
    ) {
      alert("Please fill in all delivery details.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(phone.trim())) {
      alert("Enter a valid 10-digit Indian mobile number.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      alert("Enter a valid email address.");
      return;
    }

    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    alert(
      `Demo Order Confirmed!\n` +
      `Customer: ${name}\n` +
      `Email: ${email}\n` +
      `Total: ₹${totalPrice}\n\n` +
      `This is a frontend demo. No order has been submitted.`
    );
  }

  return (
    <section id="checkout">
      <h2>Checkout</h2>

      <form onSubmit={handlePlaceOrder}>
        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="phone">Phone Number</label>
        <input
          id="phone"
          type="tel"
          placeholder="Enter 10-digit mobile number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="address">Delivery Address</label>
        <textarea
          id="address"
          placeholder="Enter your complete address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />

        <h3>Order Total: ₹{totalPrice}</h3>

        <button type="submit">
          Place Order
        </button>
      </form>
    </section>
  );
}

export default Checkout;
