import { query } from "../../../database/dbConnection.js"
import express from 'express' 
const router = express.Router()

router.put('/products',(req,res)=>{
    const {id,name,price,description} = req.body
    query.execute(`update products set name ='${name}',price = '${price}',description = '${description}' where id = ${id}`)
    res.json({message:'success'})
})

export default router
