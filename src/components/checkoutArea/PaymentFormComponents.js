import React from 'react'

function BasicInput(props){
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
                    <select name="" id="">
                        <option value="">2019</option>
                        <option value="">2020</option>
                        <option value="">2021</option>
                        <option value="">2022</option>
                        <option value="">2023</option>
                        <option value="">2024</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

function CheckoutButton(props){
    return(
        <div className="CheckoutButton">
            <button>Book Securely</button>
            <span>
                <div className="icon-lock"><img src="https://img.icons8.com/android/24/000000/lock.png"/></div> 
                Your credit card information is encrypted
            </span>
        </div>
    )
}

function PaymentFormComponents(props){
    return (
        <div className="PaymentForm">
            <form onSubmit={props.onSubmit}>
                <div className="Title">Payment information</div>
                <BasicInput 
                   name="name" 
                   label="Name on credit card" 
                   type="text" 
                   placeholder="Joel Mantoss" 
                />
                <BasicInput 
                   name="card" 
                   label="Credit card number" 
                   type="number" 
                   placeholder="0000 0000 0000 0000" 
                />
                <ExpiryDate />
                <CheckoutButton />
            </form>
        </div>
    )
}

export default PaymentFormComponents;
