
import { padres } from "../modelos/padresModelo.js";

const crearP = (req,res)=>{
    if(!req.body.nombre){
        res.status(400).json({
            mensaje: "El nombre no puede estar vacio."
        }) ;
        return;
    }
    const dataset={
        nombre: req.body.nombre,
        cedula: req.body.cedula,
        direcion: req.body.direcion,
        telefono: req.body.telefono
    };

    //Usar Sequelize para crear el recurso
    padres.create(dataset).then((resultado)=>{
        res.status(200).json({
            mensaje: "Registro creado correctamente"
        })
    }).catch((err)=>{
        res.status(500).json({
            mensaje: `Error al crear el registro ::: ${err}`
        })

    })
};
const buscarP = (req,res)=>{
    
    padres.findAll().then((resultado)=>{
        res.status(200).json(resultado);    
    }).catch((err)=>{
        res.status(500).json({
            mensaje: `No se encontraron Registros ::: ${err}`
        });
    });

};


export {crearP,buscarP,}
