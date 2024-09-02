import express from "express"

const router = express.Router()

import { query } from "../../../database/dbConnection.js"


//get all products 
router.get('/products',(req,res)=>{
    //error first parameter
    query.execute(`select * from products`,(err,data)=>{
        if(err){
            res.json({message:'error',err})
        }else{
            res.json({message:'success',data})
        }

    })
})

export{
    router
}