import React from 'react';
import Pluralize from 'pluralize';

function OrderSummary(props){

    const duration = props.duration + " " + Pluralize('day',parseInt(props.duration));

    // Initial total Calculation
    const initialTotal = props.duration * props.price;

    // Discount Calculation
    const discount = Math.floor((initialTotal / 100) * props.discount);

    // Subtotal (with Discount)
    const subTotal = initialTotal - discount;

    // Calculate tax
    const tax = Math.floor((subTotal / 100) * props.tax);

    // Total
    const total = subTotal + tax;

    return(
      <div className="OrderSummary">
        <div className="Title">Order Summary</div>
            <table>
            <tbody>
                <tr>
                    <td>{props.price} x {duration}</td>
                    <td>{initialTotal} EUR</td>
                </tr>
                <tr>
                    <td>Discount</td>
                    <td>{discount} EUR</td>
                </tr>
                <tr>
                    <td>Subtotal</td>
                    <td>{subTotal} EUR</td>
                </tr>
                <tr>
                    <td>Tax</td>
                    <td>{tax} EUR</td>
                </tr>
            </tbody>
            </table>
            <div className="Total">
                <div className="TotalLabel">Total</div>
                <div className="Amount">
                    {total} <small>EUR</small>
            </div>
        </div>
      </div>
    )
}

export default OrderSummary;