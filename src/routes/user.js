import { Router } from 'express';
import ManagerUser from '../controllers/user.controller.js'
import passport from 'passport'

const userM = new ManagerUser()

const routerUser = Router()

routerUser.get('/', async (req, res) => {    
    let limite = parseInt(req.query.limit);    
    if(!limite) return res.send(await userM.getElements());
    let todos = await userM.getElements();    
    let algunos = todos.slice(0, limite);
    res.send(await algunos);    
}) 

routerUser.get('/:id', async (req, res) => {  
    await userM.getElementById(req.params.id);    
    res.send("user encontrado");
})

routerUser.delete('/:id', async (req, res) => {  
    await userM.deleteElement(req.params.id);    
    res.send("baja user registrada");
})

routerUser.post('/', async (req, res) => {  
    await userM.addElements(req.body)
    res.send("user creado");
})

routerUser.post('/register', async (req, res) => {  
    await userM.addElements(req.body)
    res.send("user creado");
})

routerUser.put('/:id', async (req, res) => {     
    await userM.updateElementById(req.params.id, req.body)
    res.send("user modificado");
})

export default routerUser;

/*
import { Router } from "express";
import { createUser, getUserById } from "../controllers/user.controller.js";
import passport from "passport";

const routerUser = Router()

routerUser.post("/register", passport.authenticate('register'), createUser)
routerUser.get("/:id", getUserById)

export default routerUser
*/