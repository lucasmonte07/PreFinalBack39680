import { Router } from 'express';
import ManagerTicket from '../controllers/ticket.controller.js'
import passport from 'passport'

const ticketM = new ManagerTicket()

const routerTicket = Router()

routerTicket.get('/', async (req, res) => {    
    let limite = parseInt(req.query.limit);    
    if(!limite) return res.send(await ticketM.getElements());
    let todos = await ticketM.getElements();    
    let algunos = todos.slice(0, limite);
    res.send(await algunos);    
}) 

routerTicket.get('/:id', async (req, res) => {  
    await ticketM.getElementById(req.params.id);    
    res.send("ticket encontrado");
})

routerTicket.delete('/:id', async (req, res) => {  
    await ticketM.deleteElement(req.params.id);    
    res.send("baja ticket registrada");
})

routerTicket.post('/', async (req, res) => {  
    await ticketM.addElements(req.body)
    res.send("ticket creado");
})

routerTicket.post('/register', async (req, res) => {  
    await ticketM.addElements(req.body)
    res.send("ticket creado");
})

routerTicket.put('/:id', async (req, res) => {     
    await ticketM.updateElementById(req.params.id, req.body)
    res.send("ticket modificado");
})

export default routerTicket;

/*
import { Router } from "express";
import { createUser, getUserById } from "../controllers/user.controller.js";
import passport from "passport";

const routerUser = Router()

routerUser.post("/register", passport.authenticate('register'), createUser)
routerUser.get("/:id", getUserById)

export default routerUser
*/