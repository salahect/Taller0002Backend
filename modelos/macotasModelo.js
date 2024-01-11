import Sequelize  from "sequelize";
import {db} from "../database/conexion.js";
import {adopcion} from "./adopcion.js";

const mascotas = db.define("mascotas",{
    idMascotas:{
        type:Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nombre:{
        type: Sequelize.STRING,
        allowNull: true
    },
    edad:{
        type: Sequelize.INTEGER,
        allowNull:true
    },
    raza:{
        type: Sequelize.STRING,
        allowNull: true
    },
    color:{
        type: Sequelize.STRING,
        allowNull: true
    },
    sexo:{
        type: Sequelize.STRING,
        allowNull: true
    }

   

},{
    timestamps:false,
    createdat:false,
    updatedat:false
});

mascotas.hasMany(adopcion,{
    foreignKey:'idMascotas',
    sourceKey: 'idMascotas'
});

adopcion.belongsTo(mascotas,{
    foreignKey: "idMascotas",
    targetKey: "idMascotas",

})

export {mascotas}