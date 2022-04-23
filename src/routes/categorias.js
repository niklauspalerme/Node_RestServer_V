/////////////////////////////////////////////////////////////
// Importaciones y Requeriments


const { Router } = require("express");
const { check } = require('express-validator');
const { crearCategoria } = require("../controllers/categorias");
const { validarJWT, validarCampos } = require("../middlewares");
const router = Router();


/////////////////////////////////////////////////////////////
// Implementación

router.get('/', (req,res)=>{
    res.json({
        msg: 'GET /api/categorias'
    })
})

router.get('/:id', (req,res)=>{
    res.json({
        msg: 'GET /api/categorias/:id'
    })
})


router.post('/', [
    validarJWT,
    check('nombre', 'The name is required').not().isEmpty(),
    validarCampos],
    crearCategoria)


router.put('/:id', (req,res)=>{
    res.json({
        msg: 'PUT /api/categorias/:id'
    })
})


router.delete('/:id', (req,res)=>{
    res.json({
        msg: 'DELETE /api/categorias/:id'
    })
})



/////////////////////////////////////////////////////////////
// Exportamos

module.exports = router