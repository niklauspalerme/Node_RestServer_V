/////////////////////////////////////////////////////////////
// Importaciones

const { Categorias } = require("../models/categoria");


/////////////////////////////////////////////////////////////
// Funciones del Comtrolador - Categoria


//#1
const obtenerCategorias = async (req,res) => {


    console.log("GET /api/categorias");

    const { page = '0', limit = '5', to = 0 , estado = true} = req.query

    const [total,categorias] = await Promise.all([
        Categorias.countDocuments({estado}),
        Categorias.find({estado}).skip(to).limit(limit).populate('usuario', 'nombre')

    ]);

    res.status(200).json({
        "Message": "GET /api/categorias",
        total,
        categorias
    });

}


//#2
const obtenerCategoria = async (req,res) =>{

    try {

        const {id} = req.params

        const categoria = await Categorias.findById(id).populate('usuario', 'nombre');

        res.status(200).json({
            "Message": "GET /api/categorias/:id",
            categoria
        });
        
    } catch (error) {
        
        console.log(error);
        res.status(500).json({
            msg: "Internal Server Error"
        });

    }
}

//#3
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


const actualizarCategoria = async (req,res) =>{

}


const borrarCategoria = async (req,res) =>{

}





/////////////////////////////////////////////////////////////
// Exportaciones


module.exports={
    crearCategoria,
    obtenerCategorias,
    obtenerCategoria,
    actualizarCategoria,
    borrarCategoria
}