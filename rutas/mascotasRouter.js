import express from "express";
import {crear,buscarId,buscar,actualizar,eliminar} from "../controladores/mascotasControler.js";
import {crearP,buscarP} from "../controladores/padresController.js";
import { buscarA } from "../controladores/adopcionController.js";
const routerMascotas = express.Router();
const routerMascotas1 = express.Router();
const routerMascotas2 = express.Router();

routerMascotas.get("/",(req,res)=>{
    res.send("Bienvenido a Mascotas");
});

routerMascotas.post("/crear",(req,res)=>{
    crear(req,res);
});

routerMascotas.get("/buscar/:id",(req,res)=>{
    buscarId(req,res);
});

routerMascotas.get("/buscar",(req,res)=>{
    buscar(req,res);
});


routerMascotas.put("/actualizar/:id",(req,res)=>{
    actualizar(req,res);
});

routerMascotas.delete("/eliminar/:id",(req,res)=>{
    eliminar(req,res);
});

routerMascotas1.post("/crearP",(req,res)=>{
    crearP(req,res);
});

routerMascotas1.get("/buscarP",(req,res)=>{
    buscarP(req,res);
});

routerMascotas2.get("/buscarA",(req,res)=>{
    buscarA(req,res);
   
        
});


export { routerMascotas, routerMascotas1, routerMascotas2 }

