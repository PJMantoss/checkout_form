import React from 'react';
import OrderSummary from './components/checkoutArea/OrderSummary';
import PaymentFormComponents from './components/checkoutArea/PaymentFormComponents';

function Checkout(props){
    return(
        <div>
            <OrderSummary 
                duration={props.duration} 
                discount={props.discount} 
                tax={props.tax} 
                price={props.price} 
            />
            <PaymentFormComponents onSubmit={props.onSubmit} />
        </div>
    )
}
