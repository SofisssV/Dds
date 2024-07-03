const {DataTypes} = require('sequelize');

const HotelModel = (sequelize) => {

    return sequelize.define(
      "hotel", {
        id: { 
            type: DataTypes.INTEGER, 
            autoIncrement: true, 
            primaryKey: true },
        nombre: { 
            type: DataTypes.STRING 
        },
        ciudad: { 
            type: DataTypes.STRING 
        },
        plazas: { 
            type: DataTypes.INTEGER 
        },
        }, 
        {
            timestamps: false
        }
    );
  
};

module.exports = HotelModel;