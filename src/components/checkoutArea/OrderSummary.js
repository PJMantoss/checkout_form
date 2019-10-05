import React from 'react';
import Pluralize from 'pluralize';

function OrderSummary(props){

    const duration = props.duration + " " +pluralize('day',parseInt(props.duration));

    // Initial total Calculation
    const initialTotal = props.duration * props.price;

    // Discount Calculation
    const discount = Math.floor((initialTotal / 100) * props.discount);

    // Subtotal (with Discount)
    const subTotal = initialTotal - discount;

    // Calculate tax
    const tax = Math.floor((subTotal / 100) * props.tax);

    return()
}

export default OrderSummary;