/////////////////////////////////////////////////////////////
// Importaciones

const { Categorias } = require("../models/categoria");





/////////////////////////////////////////////////////////////
// Funciones del Comtrolador - Categoria

const crearCategoria = async (req,res)=>{

    const nombre = req.body.nombre.toUpperCase(); 


    const categoriaDB = await Categorias.findOne({nombre})

    console.log(categoriaDB)

    if (categoriaDB){
        return  res.status(400).json({
            msg: 'The category already exists on the DB. Please try with another one.'
        })
    }

    const data = {
        nombre,
        usuario: req.usuario._id
    }

    const categoria = new Categorias (data); 
    await categoria.save();

    res.status(201).json({
        msg: 'POST /api/categorias',
        categoria
    })

}







/////////////////////////////////////////////////////////////
// Exportaciones


module.exports={
    crearCategoria
}