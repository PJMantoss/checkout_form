import React from 'react';
import OrderSummary from './OrderSummary';
import PaymentFormComponents from './PaymentFormComponents';

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

export default Checkout;