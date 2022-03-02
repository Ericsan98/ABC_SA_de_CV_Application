const mongoose = require('mongoose');

const  mongoAtlasUri = 'mongodb+srv://ServicioSocial:Tw1veK9yjmR2RsdA@cluster0.kotty.mongodb.net/ABC_SA_de_CV?retryWrites=true&w=majority'
try {
    mongoose.connect(
        mongoAtlasUri,
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => console.log(" Mongoose is connected")
    );

} catch (e) {
    console.log("Could not connect");
}

module.exports = mongoose;
//Contraseña_MongoDB = Tw1veK9yjmR2RsdA