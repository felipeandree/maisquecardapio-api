const ProductModel = require("../../models/ProductModel");

exports.post = async (req, res, next) => {
    try {
        const { name, price, description, image, category } = req.body;

        const newProduct = new ProductModel({
            name,
            price,
            description,
            image,
            category,
        });

        const savedProduct = await newProduct.save();

        res.status(200).json(savedProduct);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: "Erro ao salvar o produto na base de dados",
        });
    }
};

exports.get = async (req, res, next) => {
    const product = await ProductModel.find();
    res.status(200).send(product);
};

exports.getById = async (req, res, next) => {
    try {
        const { id } = req.params;

        const product = await ProductModel.findById(id);

        if (!product) {
            return res.status(404).json({ message: "Produto não encontrado" });
        }

        return res.status(200).json(product);
    } catch (error) {
        // Handle errors
        console.error(error);
        return res.status(500).json({ message: "Erro" });
    }
};

exports.delete = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedProduct = await ProductModel.findByIdAndDelete(id);

        // Retorna o produto removido como resposta
        res.status(200).json(deletedProduct);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: "Erro ao remover o produto da base de dados",
        });
    }
};

exports.put = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, price, description, image, category } = req.body;

        const productUpdate = await ProductModel.findById(id);

        // Se o produto não existir, exibir mensagem de erro.
        if (!productUpdate) {
            return res.status(404).json({ error: "Produto não encontrado" });
        }

        productUpdate.name = name;
        productUpdate.price = price;
        productUpdate.description = description;
        productUpdate.image = image;
        productUpdate.category = category;

        const updatedProduct = await productUpdate.save();

        res.status(200).json(updatedProduct);
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: "Erro ao atualizar o produto no banco de dados ",
        });
    }
};
