const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://felipeandree8:ZLDy0HMDClBcAJVB@maisquecardapioapi.pvcccz1.mongodb.net/?retryWrites=true&w=majority").then(() => {
    console.log("Conectado ao banco de dados");
}).catch((err) => {
    console.log("Erro ao conectar ao banco de dados");
    console.log(err);
});

module.exports = mongoose;