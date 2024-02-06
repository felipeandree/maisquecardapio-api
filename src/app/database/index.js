const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://felipe8:nav1jOjk7ALsbtbY@cluster0.wtrnjtb.mongodb.net/?retryWrites=true&w=majority").then(() => {
    console.log("Conectado ao banco de dados");
}).catch((err) => {
    console.log("Erro ao conectar ao banco de dados");
    console.log(err);
});

module.exports = mongoose;