import React from 'react'
import './reviewitem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = ({order,handleRemovefromcart}) => {
//console.log(order)
const {id,img,price,name,quantity}=order;
return (
<div className='review-item'>
    <img src={img} alt="" />
    <div className='review-details'>
        <p className='product-title'> {name}</p>
        <p>Price:<span className='orange-text'> ${price}</span></p>
        <p>Order Quantity:<span className='orange-text'> {quantity}</span></p>
    </div>
    <button onClick={()=>handleRemovefromcart(id)} className='review-btn'>
        <FontAwesomeIcon className='delete-icon' icon={faTrash} />
    </button>
</div>
)
}

export default ReviewItem