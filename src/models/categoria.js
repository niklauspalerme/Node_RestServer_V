/////////////////////////////////////////////////////////////
// Importaciones


const { Schema, model } = require('mongoose');


/////////////////////////////////////////////////////////////
// Funciones

const CategoriaSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    estado: {
        type: Boolean,
        default: true
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }

})

const Categorias = model('Categoria', CategoriaSchema);


/////////////////////////////////////////////////////////////
// Exportamos

module.exports = {
    Categorias
}