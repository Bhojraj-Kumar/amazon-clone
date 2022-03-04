import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import { UseStateValue } from './StateProvider'
import Subtotal from './Subtotal'

const Checkout = () => {
  const [{Basket, user}, dispatch] = UseStateValue();
  return (
  <div className='checkout'>
    <div className='checkout__left'>
        <img className='checkout__ad' 
        src='https://images-na.ssl-images-amazon.com/images/G/01/credit/img16/storefront/swp/swp-background6.png' 
        alt=''/>
        <div>
          <h3>Hello, {user?.email}</h3>
            <h2 className='checkout__title'>
            Your shopping Basket</h2>
             {/* Testing */}
            {/* <CheckoutProduct 
                 id='133'
                 title="lorem ipsem testing lorem ipsem testing lorem ipsem testing lorem ipsem testing"
                 image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                 rating="*****"
                 price={5363}
               />
            <CheckoutProduct 
                 id='133'
                 title="lorem ipsem testing lorem ipsem testing lorem ipsem testing lorem ipsem testing"
                  image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                 rating="*****"
                 price={5363}
               />
              <CheckoutProduct 
                 id='133'
                 title="lorem ipsem testing lorem ipsem testing lorem ipsem testing lorem ipsem testing"
                 image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                 rating="*****"
                 price={5363}
               /> */}
            {Basket.map(item => (
               <CheckoutProduct 
                 id={item.id}
                 title={item.title}
                 image={item.image}
                 rating={item.rating}
                 price={item.price}
               />))
            }
            {/*BasketItem*/}
            {/*BasketItem*/}
            {/*BasketItem*/}
        </div>       
    </div>
    <div className='checkout__right'>
        <Subtotal/>
    </div>
  </div>
   
  )
}

export default Checkout