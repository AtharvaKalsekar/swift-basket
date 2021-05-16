const express = require("express");
const app = express();
app.listen(5000, console.log("Server listening on port 5000"));

const products = require("./data/products");

app.get("/", (req, res) => {
  res.send("Listenig for /");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => {
    return p._id === req.params.id;
  });
  res.json(product);
});
