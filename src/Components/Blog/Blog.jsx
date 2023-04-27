import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './blog.css'

const Product = (props) => {
const {img,name,seller,price,quantity,ratings}  =props.product;
const handleAddtoCart=props.handleAddtoCart

return (
<div className='product'>
    <img src={img} alt="" />
    <div className='product-info'>
        <h5 className='product-name'>{name}</h5>
        <p className='product-price'>Price: ${price}</p>
        <p className='product-manufacturer'>Manufacturer: {seller}</p>
        <p className='product-rattig'>Rattings:{ratings}Stars</p>
    </div>
    <button onClick={()=>handleAddtoCart(props.product)} className='bookmark_btn'>Add To Cart <FontAwesomeIcon icon={ faShoppingCart} /></button>

</div>
)
}

export default Product