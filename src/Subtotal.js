import React from 'react'
import './Subtotal.css'
import CurrencyFormat from "react-currency-format"
import { UseStateValue } from './StateProvider'
import { getBasketTotal } from './reducer'

const Subtotal = () => {
  const [{Basket}] = UseStateValue();
  
  return (
    <div className='subtotal'>
        <CurrencyFormat 
           renderText={(value) => (
               <>
               <p>
                   Subtotal ({Basket?.length} items):
                   <strong> {value}</strong>
               </p>
               <small className='subtotal__gift'>
                   <input type='checkbox'/>  This order contains a gift
               </small>
               </>
           )}
           decimalScale={2}
           value={getBasketTotal(Basket)}
           displayType={'text'}
           thousandSeparator={true}
           prefix={"$"}
        />
        <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal