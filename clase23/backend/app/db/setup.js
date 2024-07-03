const Sequelize = require('sequelize'); 

const crearDatos = require('./init');
const HotelModel = require('../models/hotel.model');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './datos/hoteles.db'
});

const Hoteles = HotelModel(sequelize);

const iniciar = async(reset = false) => {
    try {
        await sequelize.sync({force: reset});
        console.log(`Base de datos inicializada`);
        if (reset) {
            await crearDatos(Hoteles);
        }
    }
    catch (err){
        console.log(`Error en la base de datos: ${err.message}`);
    }
}



const db = {iniciar, Hoteles}
module.exports = db;

