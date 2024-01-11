import Sequelize  from "sequelize";
import {db} from "../database/conexion.js";
import { adopcion } from "./adopcion.js"; 

const padres = db.define("padres",{
    idPadres:{
        type:Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nombre:{
        type: Sequelize.STRING,
        allowNull: true
    },
    cedula:{
        type: Sequelize.INTEGER,
        allowNull: true
    },
    direcion:{
        type: Sequelize.STRING,
        allowNull: true
    },
    telefono:{
        type: Sequelize.INTEGER,
        allowNull: true
    }
},{
    timestamps:false
});
padres.hasMany(adopcion,{
    foreignKey:'idPadres',
    sourceKey: 'idPadres'
});

adopcion.belongsTo(padres,{
    foreignKey: "idPadres",
    targetKey: "idPadres"

})

export{padres}
