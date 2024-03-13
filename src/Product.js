import React from 'react'
import './Product.css'
import { UseStateValue } from './StateProvider'

const Product = ({id, title, price, image, rating}) => {

  const [{Basket}, dispatch] = UseStateValue();
  console.log(Basket);

  const addToBasket = () =>{  
  // dispatch the item into the data layer
     dispatch({
       type:"ADD_TO_BASKET",
       item:{
         id:id,
         title:title,
         price:price,
         image:image,
         rating:rating,
       },
     });
  };
  return (
    <div className='product'>
        <div className='product__info'>
           <p>{title}</p>
           <p className='product__price'>
               <small>$</small>
               <strong>{price}</strong>
            <div className='product__rating'>
                {Array(rating).fill().map((_, i)=>(<p>⭐</p>))}              
            </div>
           </p>
        </div>
        <img src={image} alt=''/>
        <button onClick={addToBasket}>Add to cart</button>
        
    </div>
  )
}

export default Product;