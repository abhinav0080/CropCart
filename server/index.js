
const express = require("express");
const productRoutes = require("./routes/productRoutes");

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("CropCart Backend is Running!");
});

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
