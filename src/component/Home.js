import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { add } from '../store/Cartslice';
import { useSelector, useDispatch } from 'react-redux';
import Footer from './Footer';

const Home = () => {
  const dispath = useDispatch();
  const [product, setProduct] = useState([])
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then((res)=>res.json())
    .then((data)=>setProduct(data))
  },[])
  const getTitle = (title) => {
    const words = title.split(' ');
    if (words.length > 10) {
      return words.slice(0, 2).join(' ') + '...';
    }
    return title;
  };
  function handleadd(item){
    dispath(add(item))
  }
  return (
    <>
    <h4 style={{display:'block'}}>Home Products</h4>
    <div className='main' style={{display:'flex', flexWrap:'wrap'}}>

     
      <br />
      {
product.map((item,id)=>{
  return <div key={id} className='card' style={{textAlign:'center', width:'250px', height:'auto'}}>
    
    <img src={item.image} alt="" style={{width:'100px', height:'150px'}}/>
    <span style={{marginTop:'10px'}}>{getTitle(item.title)}</span>
    <p style={{fontWeight:'500'}}>Price: {item.price} $</p>
    <button onClick={()=>handleadd(item)}>Add to cart</button>
     </div>
}) 
      }
    </div>
    <Footer />
    </>
  )
}

export default Home