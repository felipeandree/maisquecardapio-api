

app.get("/", (req, res) => {
    return res.send("Hello World");
})

app.get("/products", async (req, res) => {
    const product = await Product.find();
    return res.send(product);
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


app.listen(port, () => {
    mongoose.connect("mongodb+srv://felipeandree8:ZLDy0HMDClBcAJVB@maisquecardapioapi.pvcccz1.mongodb.net/?retryWrites=true&w=majority");
    console.log(`App running http://localhost:${port}`);
})

module.exports = app;