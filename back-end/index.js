const express = require('express')
const app = express()
const port = 3000

var cors = require('cors')

const mysql = require('mysql2')

const query = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'shopping'
})

app.use(cors())
app.use(express.json())

//insert product 

app.post('/products',(req,res)=>{
    const {name,price,description} = req.body
    query.execute(`insert into products (name,price,description) values
    ('${name}','${price}','${description}')`)
    res.json({message:'success'})

})

//get all products 
app.get('/products',(req,res)=>{
    //error first parameter
    query.execute(`select * from products`,(err,data)=>{
        if(err){
            res.json({message:'error',err})
        }else{
            res.json({message:'success',data})
        }

    })
})

//params to get single product

app.get('/products/:id',(req,res)=>{
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

//delete product

app.delete('/products',(req,res)=>{
    const {id} = req.body
    query.execute(`delete from products where id=${id}`)
    res.json({message:'success'})
})

//update product

app.put('/products',(req,res)=>{
    const {id,name,price,description} = req.body
    query.execute(`update products set name ='${name}',price = '${price}',description = '${description}' where id = ${id}`)
    res.json({message:'success'})
})




app.listen(port, () => console.log(`Example app listening on port ${port}!`))