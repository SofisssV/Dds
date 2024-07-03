const {DataTypes} = require('sequelize');

const AlbumModel = (sequelize) => {

    return sequelize.define(
      "album", {
        id: { 
            type: DataTypes.INTEGER, 
            autoIncrement: true, 
            primaryKey: true },
        titulo: { 
            type: DataTypes.STRING 
        },
        artista: { 
            type: DataTypes.STRING 
        },
        genero: { 
            type: DataTypes.STRING 
        },
        soporte: { 
            type: DataTypes.STRING 
        },
        precio: { 
            type: DataTypes.INTEGER 
        },
        }, 
        {
            timestamps: false, 
            tableName: 'albumes'
        }
    );
  
};

module.exports = AlbumModel;