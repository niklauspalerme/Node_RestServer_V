/////////////////////////////////////////////////////////////
// Importaciones y Requeriments


const { Router } = require("express");
const { check } = require('express-validator');
const { crearCategoria, obtenerCategorias, obtenerCategoria } = require("../controllers/categorias");
const { existeCategoria } = require("../helpers/db-validator");
const { validarJWT, validarCampos } = require("../middlewares");
const router = Router();


/////////////////////////////////////////////////////////////
// Implementación

router.get('/',obtenerCategorias)

router.get('/:id', [
    check('id', "The id is not a valid id. Please try agaian").isMongoId(),
    check('id', 'The id doesnt exits. Please try with another one').custom(existeCategoria),
    validarCampos],
    obtenerCategoria)


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