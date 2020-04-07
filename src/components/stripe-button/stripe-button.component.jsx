import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ( { price } ) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_DOkEX3N327bJPLmctX2BCsHt00ymPixPfd';

    const onToken = token => {
        console.log(token);
        alert("Payment succesful");
    }

    return(
        <StripeCheckout 
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}


export default StripeCheckoutButton;