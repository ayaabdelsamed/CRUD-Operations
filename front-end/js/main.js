
let products = [];
getData()
function getData(){
    
    fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(ResponseData =>{
        if(ResponseData.message == "success"){
            products = ResponseData.data
            showdata()
        }
        console.log(products)
})
}
function showdata(){
    let rowdata = ``;
    for (let i =0 ; i< products.length; i++){
        rowdata += `
        <tr>
        <td>${products[i].name}</td>
        <td>${products[i].price}</td>
        <td>${products[i].description}</td>
        <td>
            <button onclick='deleteProduct(${products[i].id})' class="btn btn-danger">Delete</button>
            <button onclick="preFillForm(${products[i].id}, '${products[i].name}', ${products[i].price}, '${products[i].description}')" class="btn btn-success">Update</button>

        </td>
    </tr>
    `
    }
    document.getElementById('tbody').innerHTML=rowdata
}

function getInputValue(){
    let NameProduct = document.getElementById('NameProduct').value
    let PriceProduct = document.getElementById('PriceProduct').value
    let Description = document.getElementById('Description').value
    let productsobj = {
        name: NameProduct,
        price:PriceProduct,
        description:Description
    }
    ApiCRUD('POST',productsobj)
}

function ApiCRUD(endPoint,body){
    fetch('http://localhost:3000/products', {
        method: endPoint,
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(Data =>{
            if(Data.message == "success"){
                getData()
            }
    })
}


function deleteProduct(id){
    ApiCRUD('DELETE',{id})
}

function preFillForm(id, name, price, description) {
    document.getElementById('NameProduct').value = name;
    document.getElementById('PriceProduct').value = price;
    document.getElementById('Description').value = description;
    document.getElementById('id').value = id;
    
    document.getElementById('add').style.display = 'none';
    document.getElementById('Update').style.display = 'inline-block';
}


function updateProduct(){
    let NameProduct = document.getElementById('NameProduct').value
    let PriceProduct = document.getElementById('PriceProduct').value
    let Description = document.getElementById('Description').value
    let id = document.getElementById('id').value;
    let productsobj = {
        id: id,
        name: NameProduct,
        price:PriceProduct,
        description:Description,
    }
    ApiCRUD('PUT',productsobj)
    document.getElementById('NameProduct').value = '';
    document.getElementById('PriceProduct').value = '';
    document.getElementById('Description').value = '';
    document.getElementById('id').value = '';

    document.getElementById('Update').style.display = 'none';
    document.getElementById('add').style.display = 'inline-block';
}