const Sequelize = require('sequelize'); 

const crearDatos = require('./init');
const AlbumModel = require('../models/album.model');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './datos/albumes.db'
});

const Albumes = AlbumModel(sequelize);

const iniciar = async(reset = false) => {
    try {
        await sequelize.sync({force: reset});
        console.log(`Base de datos inicializada`);
        if (reset) {
            await crearDatos(Albumes);
        }
    }
    catch (err){
        console.log(`Error en la base de datos: ${err.message}`);
    }
}


const db = {iniciar, Albumes}
module.exports = db;

