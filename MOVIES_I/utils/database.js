const mongoose = require("mongoose");
const dotenv = require("dotenv");

const MONGO_URI = process.env.MONGO_URI;

const connect = async () => {
    try {
        const db = await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        const { name, host } = db.connection;
        console.log(`Conectado a DB: ${name} y host ${host}`);

    } catch (error) {
        console.log("Error al conectarse a la base de datos", error);        
    }
}

module.exports = connect;