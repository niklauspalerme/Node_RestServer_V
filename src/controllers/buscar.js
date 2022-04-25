/////////////////////////////////////////////////////////////
// Importaciones




/////////////////////////////////////////////////////////////
// Funciones del Buscar



const buscar = (req,res) => {

   try {

        console.log("GET /api/buscar/:coleccion/:termino")


        res.json({
           "msg": "GET /api/buscar/:coleccion/:termino"
        })
       
   } catch (error) {
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