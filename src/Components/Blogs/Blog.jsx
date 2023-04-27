import React, { useEffect, useState } from 'react'
import Cart from '../Cart/Cart'
import Product from '../Blog/Blog'
import { addToDb, getShoppingCart } from '../utilities/fakedb'
import './shop.css'
const Shop = () => {
const [products,setproducts]=useState([])
const [cart,setcart]=useState([])
useEffect(()=>{
fetch('products.json')
.then(res=>res.json())
.then(data=>setproducts(data))
},[]);

useEffect(()=>{
let storedCart=getShoppingCart()
const savedCart=[];
// console.log(storedCart);
//step 1 : Get Id
for(const id in storedCart){
    // console.log(id)
    //Sep 2: Get the product using id.
    const savedProduct=products.find(product=>product.id===id);
    console.log(savedProduct);

    //Stem 3 : Get the quantity from the product
    if(savedProduct){
    const quantity=storedCart[id];
    //console.log(quantity);
    savedProduct.quantity=quantity;
    //console.log(savedProduct.quantity)
    //savedProduct.quantity=quantity;
    //step 4 : added product add the saved cart.
    savedCart.push(savedProduct);
    }
}
setcart(savedCart);
},[products]);
const handleAddtoCart=(product)=>{
const newCart=[...cart,product]
setcart(newCart)
addToDb(product.id)
}
return (
<div className='shopContainer'>
    <div className='productContainer'>
        {
        products.map(product=><Product key={product.id} product={product} handleAddtoCart={handleAddtoCart}></Product>)
        }
    </div>
    <div className='cartContainer'>
        <Cart cart={cart}></Cart>
    </div>

</div>
)
}

export default Shop