import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

import { Button, BUTTON_TYPES } from '../button/button.component';
import { PaymentFormContainer } from './payment-form.styles';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTotalCost } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import { FormContainer } from './payment-form.styles';
import { setCartItems } from '../../store/cart/cart.action';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const totalCost = useSelector(selectTotalCost);
  const [isLoadingPayment, setIsLoadingPayment] = useState(false);
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    setIsLoadingPayment(true);
    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: totalCost * 100 }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    const paymentConfirm = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser.displayName ?? 'Guest',
        },
      },
    });
    setIsLoadingPayment(false);
    if (paymentConfirm.error) {
      alert(paymentConfirm.error.message);
    } else {
      if (paymentConfirm.paymentIntent.status === 'succeeded') {
        alert('Payment Success !');
        dispatch(setCartItems([]));
      }
    }
  };
  return (
    <PaymentFormContainer>
      {currentUser ? (
        <FormContainer onSubmit={handleSubmit}>
          <h3>Credit Card Payment: </h3>
          <CardElement />
          <Button isLoading={isLoadingPayment}>Pay now</Button>
        </FormContainer>
      ) : (
        <h2>You need to login to finish this payment </h2>
      )}
    </PaymentFormContainer>
  );
};
export default PaymentForm;
