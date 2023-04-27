import { getShoppingCart } from "../../utilities/fakedb";

const cartProductLoader=async()=>{
const loadedProducts= await fetch('products.json');

//if cart data is in database, you have to use async await
const storedCart=getShoppingCart();
const savedCart=[];
const products=await loadedProducts.json();
console.log(storedCart)
console.log(products)
for(const id in storedCart){
    const addedProduct=products.find(pd=>pd.id==id)
    if(addedProduct){
        const quantity=storedCart[id];
        addedProduct.quantity=quantity; 
        savedCart.push(addedProduct)
    }
}
return savedCart
}

export default cartProductLoader;