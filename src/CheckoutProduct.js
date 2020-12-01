import React from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from './StateProvider';


function CheckoutProduct({title,image,price,rating,id}) {
    const [{basket},dispatch ] = useStateValue();
    
const removeFromBasket =()=>{
    dispatch({
        type : "REMOVE_FROM_BASKET",
        id:id,
    })
}

    return (
        <div className="checkoutproduct">
            <img className="checkoutProduct__image" src={image} />

            <div className="checkoutProduct__info">
              <p className="checkoutProduct__title">{title}</p>
              <p className="checkoutProduct__price">
                <small>₹ </small>
                <strong>{price}</strong>
              </p>
              <div>
                {Array(rating)
                  .fill()
                  .map((_,i)=>(
                      <span>⭐</span>
                  ))
                }
              </div>
              <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
