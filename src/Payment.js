import React, { useState } from 'react'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider'
import "./Payment.css"
import { Link } from 'react-router-dom';
import {CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from "react-currency-format";
import  { getBasketTotal} from "./reducer";

const Payment = () => {
    const [{basket,user},dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();
    
    const [error , setError ] = useState(null);
    const [ disabled ,  setDisabled ] = useState(null);

    const handleChange =(e)=>{
       
    }
    const handleSubmit =(e) =>{
        setDisabled(e.empty);
        setError(e.error ? e.error.message : " " )
    }

    return (
        <div className="payment">
            <div className="payment__container">
            <h1> Checkout {<Link to="checkout">{basket?.length}</Link>} Items</h1>
             <div className="payment__section">
                <div className="payment__title">
                  <h3>Delivery Address</h3>
                </div>
                <div className="payment__address">
                   <p>{user?.email} </p>
                   <p> Tuckkerammalpuram,Tirunelveli,Tamil Nadu</p>
                   <p>India </p>
                </div>
             </div>
            </div>
            <div className="payment__section">
            <div className="payment__title"><h3>Review items and Delivery</h3>  </div>
               <div className="payment__items">
                {basket.map((item)=>(
                    <CheckoutProduct
                       id={item.id}
                       title={item.title}
                       image={item.image}
                       price={item.price}
                       rating={item.rating}
                    />
                ))}
                </div>
            </div>
            <div className="payment__section">
                <div className="payment__title">
                   <h3>Payment Method</h3>
                </div>
                <div className="payment__details">
                    <form onSubmit={handleSubmit}>
                      <CardElement onChange={handleChange} />
                      <div className="payment__priceContainer">
                        <CurrencyFormat 
                            renderText ={(value)=>(
                                <h3>Order Total: {value} </h3>
                            )}
                            decimalScale = {2}
                            value = {getBasketTotal(basket)}
                            displayType={"text"}
                            thousandSeparator ={true}
                            prefix={"₹"}
                        />
                      </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Payment
