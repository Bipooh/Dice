const mainController = require('../controllers/mainController');
const express=require('express');
const router=express.Router();

// no hace falta const controllerProductos = require('../controllers/controllerProductos');

// Moví multer a rutasUsuarios.js
//const multer=require('multer')
//const path=require('path')
//const storage = multer.diskStorage({
//    destination: function(req, file, cb){
//        cb(null, './public/images/profile_pics');
//
//    },
//    filename:function(req, file, cb){
//        cb(null, `${Date.Now()}_img_${path.extname(file.originalname)}`)
//    }
//})
//const uploadFile=multer({storage})


router.get('/', mainController.index);
// Borrar estaba repetido
// router.get('/login', mainController.login)
// router.get('/register', mainController.register)
// router.get('/productdetails', controllerProductos.productDetails)
// router.get('/cart', controllerProductos.carrito)

module.exports=router;