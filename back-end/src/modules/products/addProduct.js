import { query } from "../../../database/dbConnection.js"
import express from 'express'
const router =express.Router()

router.post('/products',(req,res)=>{
    const {name,price,description} = req.body
    query.execute(`insert into products (name,price,description) values('${name}','${price}','${description}')`)
    res.json({message:'success'})
})

export default router