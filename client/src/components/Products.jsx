
import ProductCard from "./ProductCard";

function Products({ addToCart }) {
  const products = [
    { id: 1, name: "Tomatoes", price: 40, image: "/tomato.jpg" },
    { id: 2, name: "Potatoes", price: 30, image: "/potato.jpg" },
    { id: 3, name: "Carrots", price: 50, image: "/carrot.jpg" },
  ];

  return (
    <section className="products" id="products">
      <h2>Fresh Products</h2>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </section>
  );
}

export default Products;
