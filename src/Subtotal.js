import React from 'react'
import './Subtotal.css'
import CurrencyFormat from "react-currency-format"
import { UseStateValue } from './StateProvider'
import { getBasketTotal } from './reducer'
import { useNavigate } from 'react-router-dom'

const Subtotal = () => {
  const navigate = useNavigate();
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
        <button onClick={e => navigate('/payment') }>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal