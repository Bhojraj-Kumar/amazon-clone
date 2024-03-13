import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import CheckoutProduct from "./CheckoutProduct";
import { UseStateValue } from "./StateProvider";
import "./Payment.css";
// import {element} from '@stripe/react-stripe-js'
import {
  CardElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { async } from "@firebase/util";

const Payment = () => {
  const [{ Basket, user }, dispatch] = UseStateValue();
  const stripe = useStripe();
  const element = useElements();
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [disabled, setDisable] = useState(true);
  const [clientSecret, setClientsecret] = useState(true);

  // HERE TO START **********************

  // useEffect(() => {
  //     const getClientsecret = async () => {
  //        const response = await axios
  //     }
  // })

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
  };
  const handleChange = (event) => {
    setDisable(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout(<Link to="/checkout">{Basket?.length} items / Back to checkout</Link>)
        </h1>
        <div className="payment__section">
          {/*payment address*/}
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payement__address">
            <p>{user?.email}</p>
            <p>Kolkata sector V</p>
            <p>IN</p>
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and Delivery</h3>
          </div>

          {/*payment review */}
          <div className="payment__items">
            {Basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                rating={item.rating}
                price={item.price}
              />
            ))}
          </div>
        </div>

        <div className="payment__section">
          {/*payment method */}
          <div className="payment__title">
            <h3>Payment Details</h3>
          </div>
          <div className="payment__details">
            {/*payment main process stripe*/}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment_priceDetails">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total : {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(Basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"} </span>
                </button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
