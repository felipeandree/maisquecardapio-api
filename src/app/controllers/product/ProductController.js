// const ProductModel = require('../../models/ProductModel');


// exports.post = (req, res, next) => {
//     try {
//         console.log(req.body)
//     } catch (err) {
//         console.log(err)
//     }
//     res.status(200).send("OK")
// }

// exports.get = async (req, res, next) => {
//      const product = await ProductModel.find();
//      res.status(200).send(product);
    
// } 

const ProductModel = require('../../models/ProductModel');

exports.post = async (req, res, next) => {
    try {
        const { name, price, description, image } = req.body;

        const newProduct = new ProductModel({
            name,
            price,
            description,
            image,
        });

        
        const savedProduct = await newProduct.save();

        res.status(200).json(savedProduct);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao salvar o produto na base de dados' });
    }
}

exports.get = async (req, res, next) => {
  const product = await ProductModel.find();
  res.status(200).send(product);
}; 

exports.delete = async (req, res, next) => {
    try {
        const { id } = req.params;

        // Busque o produto pelo ID e remova-o do banco de dados
        const deletedProduct = await ProductModel.findByIdAndDelete(id);
    
        // Retorne o produto removido como resposta
        res.status(200).json(deletedProduct)
        
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao remover o produto da base de dados' });
    }
}

exports.put = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, price, description, image } = req.body;

        const productUpdate = await ProductModel.findById(id);


        // Se o produto não existir, exibir mensagem de erro.
        if (!productUpdate) {
            return res.status(404).json({ error: 'Produto não encontrado' });
        }

        productUpdate.name = name;
        productUpdate.price = price;
        productUpdate.description = description;
        productUpdate.image = image;

        const updatedProduct = await productUpdate.save();

        res.status(200).json(updatedProduct);

    } catch(err) {
        console.log(err);
        res.status(500).json({ error: "Erro ao atualizar o produto no banco de dados "})
    }

}