module.exports = app => {
    const hotelesController = require('../controllers/hoteles.controllers');
  
    var router = require("express").Router();
  
    // Crear un nuevo hotel
    router.post("/", hotelesController.create);
  
    // Recuperar todos los hotel
    router.get("/", hotelesController.findAll);
  
    // Recuperar un hotel por id
    router.get("/:id", hotelesController.findOne);
  
    // Actualizar un hotel
    router.put("/:id", hotelesController.update);
  
    // Eliminar un hotel
    router.delete("/:id", hotelesController.delete);
  
    app.use('/api/hoteles', router);
};