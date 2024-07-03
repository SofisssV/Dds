const db = require('../db/setup')
const Albumes = db.Albumes;
const {Op} = require('sequelize');

// Crea y salva un album
exports.create = (req, res) => {
  // Validar la petición
  if (!req.body.titulo || !req.body.artista) {
    res.status(400).send({
      message: "¡El contenido no puede estar vacío!"
    });
    return;
  }

  // Crear un album
  const album = {
    nombre: req.body.titulo,
    ciudad: req.body.artista,
    genero: req.body.genero,
    soporte: req.body.soporte,
    precio: req.body.precio,
  };

  // Salvar el album en la base de datos
  Albumes.create(album)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ocurrió algún error creando el album."
      });
    });
};

// Recupera todos los albumes de la base de datos.
exports.findAll = (req, res) => {
  const titulo = req.query.titulo;
  const genero = req.query.genero;
  let condicion = [];
  titulo && condicion.push({ titulo: { [Op.like]: `%${titulo}%` } });
  genero && condicion.push({ genero: { [Op.like]: `%${genero}%` } });

  console.log(condicion)

  Albumes.findAll({ where: condicion, include: {all: true} })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ocurrió algún error recuperando los álbumes."
      });
    });
};



// Eliminar un album
exports.delete = (req, res) => {
  const id = req.params.id;

  Albumes.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "¡El album se eliminó exitosamente!"
        });
      } else {
        res.send({
          message: `No se pudo borrar el album con id=${id}`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "No se pudo borrar el album con id=" + id
      });
    });
};