import Sequelize  from "sequelize";
import {db} from "../database/conexion.js";

const adopcion = db.define("adopcion",{
    id:{
        type:Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },

},{
    timestamps:false
});


export {adopcion}