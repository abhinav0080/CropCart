
const getProducts = (req, res) => {
  const products = [
    { id: 1, name: "Tomatoes", price: 40, image: "/tomato.jpg" },
    { id: 2, name: "Potatoes", price: 30, image: "/potato.jpg" },
    { id: 3, name: "Carrots", price: 50, image: "/carrot.jpg" }
  ];

  res.json(products);
};

module.exports = { getProducts };
