import React, { Children } from 'react'
import './cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart,handleclearcart,children}) => {
//console.log(cart);
let total=0;
let totalShipping=0;
for(let product of cart){
total= total+product.price
totalShipping=totalShipping+product.shipping;
}
const tax=(total*5)/100;
const grand_total=total+tax
return (
<div className='cart'>
  <h4>Order Summary</h4>
  <p className='cart-item'>Added Product:{cart.length}</p>
  <p className='cart-item'>Total Price:${total}</p>
  <p className='cart-item'>Total Shipping Charge:${totalShipping}</p>
  <p className='cart-item'>Tax: ${tax}</p>
  <p className='grand-total'>Grand Total:${grand_total} </p>
  <button onClick={handleclearcart} className='btn-clear-cart'>Clear Cart
    <FontAwesomeIcon className='delete-icon-cart' icon={faTrash} />
  </button>
  {children}
</div>
)
}

export default Cart