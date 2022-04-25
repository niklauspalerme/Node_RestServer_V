/////////////////////////////////////////////////////////////
// Importaciones o Constantes

const { ObjectId } = require('mongoose').Types;
const { Usuarios } = require('../models/usuario');

const coleccionesPermitidas = [
    'usuarios',
    'productos',
    'categorias',
    'roles'
]

const buscarUsuarios = async (termino = '', res) =>{

    const esMongoId = ObjectId.isValid(termino)

    console.log("Aja");

    if (esMongoId){
        const usuario = await Usuarios.findById(termino)
        return res.json({
           "msg": "GET /api/buscar/:coleccion/:termino",
           usuario
        })
    }

}


/////////////////////////////////////////////////////////////
// Funciones del Buscar


const buscar = (req,res) => {

   try {

        console.log("GET /api/buscar/:coleccion/:termino")

        const {coleccion, termino} = req.params;

        console.log(coleccion);

        if (!coleccionesPermitidas.includes(coleccion))
            return  res.status(400).json({
                "msg": `The coleccion allowed are: ${coleccionesPermitidas}`
             })

        switch (coleccion) {
            case 'productos':
                
                break;
            case 'categorias':
                
                break;
                        
            case 'usuarios':
                buscarUsuarios(termino, res)
                break;

            default:
                return res.status(500).json({
                    "msg": "Internal Server Error - Controllers/buscar"
                })
        }

       
   } catch (error) {
       console.log(error);
        res.status(500).json({
            "msg": error
        })
   }

}


/////////////////////////////////////////////////////////////
// Exportaciones

module.exports = {
   buscar
}