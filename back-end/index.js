import express from 'express'
const app = express()
import { router } from './src/modules/products/product.router.js';
import productRouter from './src/modules/products/getSingleProduct.js';
import addProductRouter from './src/modules/products/addProduct.js';
import updateProductRouter from './src/modules/products/updateProduct.js';
import deleteProduct from './src/modules/products/deleteProduct.js';
import cors from 'cors'

app.use(cors())
app.use(express.json())
app.use(router)
app.use(productRouter)
app.use(addProductRouter)
app.use(updateProductRouter)
app.use(deleteProduct)

app.listen(3000, () =>{
    console.log(`server listening on port 3000!`)
})
