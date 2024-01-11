import { adopcion } from "../modelos/adopcion.js";

const buscarA = (req,res)=>{
    
    try {
                 
            adopcion.findAll({ include: { all: true, nested: true }    

        }).then((resultado)=>{
            res.status(200).json(resultado); })
        
    } catch (error) {
        
    }

};

export { buscarA }