const mongoose = require("mongoose");
const app = require("./app");

// Substitua pela sua string de conexão
mongoose
    .connect(
        "mongodb+srv://felipe8:RXESHft5ZmjmPBmO@cluster0.wtrnjtb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        // {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        // }
    )
    .then(() => {
        console.log("Conectado ao MongoDB");
        app.listen(3000, () => {
            console.log("Servidor iniciado na porta 3000");
        });
    })
    .catch((err) => {
        console.error("Erro ao conectar ao MongoDB:", err.message);
    });
