const db = require('../db/setup')
const Hoteles = db.Hoteles;
const {Op} = require('sequelize');

// Crea y salva un hotel
exports.create = (req, res) => {
  // Validar la petición
  if (!req.body.nombre || !req.body.ciudad) {
    res.status(400).send({
      message: "¡El contenido no puede estar vacío!"
    });
    return;
  }

  // Crear un hotel
  const hotel = {
    nombre: req.body.nombre,
    ciudad: req.body.ciudad,
    plazas: req.body.plazas,
  };

  // Salvar el hotel en la base de datos
  Hoteles.create(hotel)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ocurrió algún error creando el hotel."
      });
    });
};

// Recupera todos los hoteles de la base de datos.
exports.findAll = (req, res) => {
  const nombre = req.query.nombre;
  var condicion = nombre ? { nombre: { [Op.like]: `%${nombre}%` } } : null;

  Hoteles.findAll({ where: condicion })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ocurrió algún error recuperando los hoteles."
      });
    });
};

// Recupera un hotel por id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Hoteles.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `No se encontró el hotel con id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Ocurrió un error al recuperar el hotel con id=" + id
      });
    });
};

// Actualizar un hotel
exports.update = (req, res) => {
  const id = req.params.id;

  Hoteles.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "¡El hotel se actualizó exitosamente!"
        });
      } else {
        res.send({
          message: `No se pudo actualizar el hotel con id=${id}`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Ocurrió un error al actualizar el hotel con id=" + id
      });
    });
};

// Eliminar un hotel
exports.delete = (req, res) => {
  const id = req.params.id;

  Hoteles.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "¡El hotel se eliminó exitosamente!"
        });
      } else {
        res.send({
          message: `No se pudo borrar el hotel con id=${id}`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "No se pudo borrar el hotel con id=" + id
      });
    });
};