import React from 'react'
import { useSelector } from 'react-redux'
import Footer from './Footer'
import { remove } from '../store/Cartslice'
import { useDispatch } from 'react-redux'
const Cart = () => {
  const dispatch = useDispatch();
  function handleremove(item){
    dispatch(remove(item))
  }
 
  const product = useSelector((state)=>state.cart)
  const totalPrice = product.reduce((total, item) => {
    return total + item.price;
  }, 0);
  const formattedTotalPrice = totalPrice.toFixed(2);
  return (
    <>
    <div className='main'  style={{display:'flex', flexWrap:'wrap'}}>
      {
        product.map((item,id)=>{
          return <div key={id} className='card' style={{textAlign:'center', width:'250px', height:'auto'}}>
    
          <img src={item.image} alt="" style={{width:'100px', height:'150px'}}/>
          <span style={{marginTop:'10px'}}>{item.title}</span>
          <p style={{fontWeight:'500'}}>Price: {item.price} $</p>
          <button onClick={()=>handleremove(item.id)}>Add to cart</button>
           </div>
        })
      }
     
    </div>
<div className='' style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
<h4>Total Price: {
formattedTotalPrice === 0 ? null : formattedTotalPrice
     }</h4>
     <button style={{margin:'0px 10px'}}>Checkout</button>
</div>

 {/* <Footer /> */}
 </>
  )
}

export default Cart