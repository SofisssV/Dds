module.exports = app => {
    const albumesController = require('../controllers/albumes.controller');
  
    var router = require("express").Router();
  
    // Crear un nuevo album
    router.post("/", albumesController.create);
  
    // Recuperar todos los albumes
    router.get("/", albumesController.findAll);
  
    // Eliminar un album
    router.delete("/:id", albumesController.delete);
  
    app.use('/api/albumes', router);
};