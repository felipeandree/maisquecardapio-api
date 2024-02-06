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
        const { name, price, description } = req.body;

        // Crie uma nova instância do modelo ProductModel com os dados recebidos
        const newProduct = new ProductModel({
            name,
            price,
            description
        });

        // Salve o novo produto no banco de dados
        const savedProduct = await newProduct.save();

        // Retorne o produto salvo como resposta
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
