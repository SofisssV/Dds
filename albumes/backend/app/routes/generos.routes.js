module.exports = app => {
    const generosController = require('../controllers/generos.controller');
  
    var router = require("express").Router();
 
    // Recuperar todos los generos
    router.get("/", generosController.findAll);
  
    app.use('/api/generos', router);
};