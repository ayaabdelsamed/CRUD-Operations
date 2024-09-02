
//params to get single product
import { query } from "../../../database/dbConnection.js";
import express from 'express'
const router = express.Router()

router.get('/products/:id',(req,res)=>{
    const {id} = req.params;
   // error first parameter
    query.execute(`select * from products where id=${id}`,(err,data)=>{
        if(err){
            res.json({message:'error',err})
        }else{
            res.json({message:'success',data})
        }
    })
})

export default router