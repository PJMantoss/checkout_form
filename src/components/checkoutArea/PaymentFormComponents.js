import React from 'react'

function BuiltInput(props){
    return(
        <div className="BasicInput">
            <label htmlFor={props.name}>{props.label}</label>
            <input 
               id={props.name} 
               type={props.type} 
               placeholder={props.placeholder} 
            />
        </div>
    );
}

function ExpiryDate(props){
    return(
        <div className="ExpiryDate">
            <div>
                <label>Expires On</label>
                <div className="Expiry">
                    <select>
                        <option value="">January</option>
                        <option value="">February</option>
                        <option value="">March</option>
                        <option value="">April</option>
                        <option value="">May</option>
                        <option value="">June</option>
                        <option value="">July</option>
                        <option value="">August</option>
                        <option value="">September</option>
                        <option value="">October</option>
                        <option value="">November</option>
                        <option value="">December</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

function PaymentFormComponents(){
    return (
        <div>
            
        </div>
    )
}

export default PaymentFormComponents
