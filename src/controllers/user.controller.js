import mongoose from 'mongoose';
import { userModel } from '../dao/MongoDB/models/User.js'
import { createHash } from '../utils/bcrypt.js'

export default class ManagerUsers {    
     
    constructor(collection, schema) {
        this.url = process.env.MONGODBURL;
        this.collection = "users";
        this.schema = userModel.schema
        this.model = mongoose.model(this.collection, this.schema)
    }
        
    async setConnection() {
        try {
            await mongoose.connect(this.url)
            console.log("MongoDB connected")
        } catch(error) {
            console.log("Connection MongoDB failed", error)
            return error
        }
    }    

    async getElements() {
        this.setConnection()
        try {
            const elements = await this.model.find()
            return elements
        } catch(error) {
            console.log("Error en consulta de elementos MongoDB", error)
        }
    }

    async addElements(elements) {         
        
        this.setConnection()

        let first_namex = elements.first_name 
        let last_namex = elements.last_name
        let agex = elements.age
        let emailx = elements.email
        let rolx = elements.rol
        let passwordx = elements.password 

        const passwordHash = createHash(passwordx)
        let toditos = {
            first_name: first_namex, 
            last_name: last_namex, 
            age: agex, 
            email: emailx, 
            rol: rolx, 
            password: passwordHash        
        }

        console.log(toditos)
                
        try {
            const userAdd = await this.model.insertMany(toditos)            
            return userAdd
        } catch(error) {
            console.log("Error al agregar elemento/s en MongoDB", error)
        }
    }

    
    async getElementById(id) { //Agrego 1 o varios elementos
           this.setConnection()
           try {
            const userFind =  await this.model.findById(id) 
            return userFind
           } catch (error) {
               return error
           }
       }

    async updateElementById(id, ...info) {
        this.setConnection()        
        try {
            const userUpdate = await this.model.findByIdAndUpdate(id, ...info)
            return userUpdate
        } catch(error) {
            console.log("Error en Update de elemento en MongoDB", error)
        }
    }

    async deleteElement(id) {
        this.setConnection()        
        try {
            const userDelete = await this.model.findByIdAndRemove(id)
            return userDelete
        } catch(error) {
            console.log("Error al eliminar elemento en MongoDB", error)
        }
    }
    
    async getElementByEmail(email) { //Agrego 1 o varios elementos
        this.setConnection()
        try {
         const emailFind =  await this.model.findOne({email: email})  
         console.log(emailFind)       
         return emailFind
        } catch (error) {
            return error
        }
    }
    
}