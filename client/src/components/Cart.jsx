
function Cart({ cart }) {
  return (
    <section id="cart">
      <h2>Your Shopping Cart</h2>
      
{cart.length === 0 ? (
  <p>Your cart is empty.</p>
) : (
  cart.map((item) => (
    <div key={item.id}>
      <h3>{item.name}</h3>
      <p>Price: ₹{item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Total: ₹{item.price * item.quantity}</p>
    </div>
  ))
)}
    </section>
  );
}

export default Cart;
