import { query } from "../../../database/dbConnection.js"
import express from 'express'
const router = express.Router()

router.delete('/products',(req,res)=>{
    const {id} = req.body
    query.execute(`delete from products where id=${id}`)
    res.json({message:'success'})
})

export default router