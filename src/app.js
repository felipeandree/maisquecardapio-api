const express = require("express");
const routes = require("./routes");
const cors = require("cors");
const Product = require("./app/models/ProductModel"); // ajuste o caminho conforme seu projeto

const app = express();
app.use(express.json());
app.use(cors());

app.use(routes);

app.get("/", (req, res) => {
    return res.send("Hello World");
});

app.get("/api/products", async (req, res) => {
    try {
        const products = await Product.find();
        return res.send(products);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

app.get("/api/products/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        return res.send(product);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
});

app.post("/api/product", async (req, res) => {
    const product = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
    });
    await product.save();
    return res.send(product);
});

app.delete("/api/product/:id", async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id);
    return res.send(product);
});

app.put("/api/product/:id", async (req, res) => {
    const product = await Product.findByIdAndUpdate(
        req.params.id,
        {
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image: req.body.image,
        },
        {
            new: true,
        }
    );
    return res.send(product);
});

module.exports = app;
