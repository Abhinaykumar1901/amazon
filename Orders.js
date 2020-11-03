import React from "react";
import "./Orders.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Orders() {
  const [{basket, user }, dispatch]=useStateValue();

  return (
    <div className="ordders">
      <div className="orders__left">
        <img
          className="orders__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="orders__title">Your Orders  </h2>
                    
          {basket.map(item => (
            <CheckoutProduct
            
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            
            />
          ))}


          {/* CheckoutProduct */}
          {/* CheckoutProduct */}
          {/* CheckoutProduct */}
          
        </div>
      </div>
      <div className="orders__right">
        <Subtotal />
        
      </div>
    </div>
  );
}

export default Orders;
