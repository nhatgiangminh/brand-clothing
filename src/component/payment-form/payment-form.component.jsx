import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

import { Button } from '../button/button.component';
import { PaymentFormContainer } from './payment-form.styles';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: 10000 }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    const paymentConfirm = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: 'Nhat Giang',
        },
      },
    });

    if (paymentConfirm.error) {
      alert(paymentConfirm.error.message);
    } else {
      if (paymentConfirm.paymentIntent.status === 'succeeded') {
        alert('Payment Success !');
      }
    }
  };
  return (
    <PaymentFormContainer>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <Button>Pay now</Button>
      </form>
    </PaymentFormContainer>
  );
};
export default PaymentForm;
