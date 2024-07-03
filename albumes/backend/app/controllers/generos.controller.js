const db = require('../db/setup')
const Albumes = db.Albumes;
const {Op} = require('sequelize');



// Recupera todos los generos de la base de datos.
exports.findAll = (req, res) => {
  Albumes.aggregate('genero', 'distinct', { plain: false })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ocurrió algún error recuperando los generos"
      });
    });
};

