import { Router } from "express";
import { createCarrito, getProductsCart, addProductCart } from '../controllers/cart.controller.js'

const routerCart = Router()

routerCart.post("/", createCarrito)
//routerCart.put("/:id", updateProductCart)
//routerCart.delete("/:id", deleteProductCart)

routerCart.post("/:id", addProductCart)
routerCart.get("/:id", getProductsCart)
//routerCart.put("/product/:id", updateProductCart)
//routerCart.delete("/product/:id", deleteProductCart)

//routerCart.post("/:cid/purchase", addPurchaseCart)



export default routerCart