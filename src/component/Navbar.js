import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'



const Navbar = () => {
  const product = useSelector((state)=>state.cart)
  const totalPrice = product.reduce((total, item) => {
    return total + item.price;
  }, 0);
  const formattedTotalPrice = totalPrice.toFixed(2);
  const cart = useSelector((state)=>state.cart)
  return (
    <div className='nav'>
      <ul>
      <li>
       <span style={{fontWeight:'500'}}>React-Redux</span> 
        </li>
        <li>
   <Link to='/'>Home</Link>
        </li>
        <li>
        <Link to='/cart'>Cart</Link>  
        </li>
      
      </ul>
      <span>Items in Cart: {cart.length}</span>
      <span>Total price: ${formattedTotalPrice}</span>
   
    </div>
  )
}

export default Navbar