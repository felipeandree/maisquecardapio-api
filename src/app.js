app.get("/", (req, res) => {
    return res.send("Hello World");
})

app.get("api/products", async (req, res) => {
    try {
    const product = await Product.find();
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
    })
    await product.save()
    return res.send(product);
});

app.delete("/api/product/:id", async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id);
    return res.send(product);
});

app.put("/api/product/:id", async (req, res) => {
    const product = await Product.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
    }, {
        new: true,
    });
    return res.send(product);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    mongoose.connect("mongodb+srv://felipe8:nav1jOjk7ALsbtbY@cluster0.wtrnjtb.mongodb.net/?retryWrites=true&w=majority");
    console.log(`App running http://localhost:${port}`);
})

module.exports = app;