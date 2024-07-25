// components/PaymentForm.js  
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';  
import { useState, useEffect } from 'react';  

const PaymentForm = () => {  
  const stripe = useStripe();  
  const elements = useElements();  
  const [clientSecret, setClientSecret] = useState('');  
  const [error, setError] = useState(null);  
  const [success, setSuccess] = useState(null);  
  const [loading, setLoading] = useState(false);  

  useEffect(() => {  
    // Create a PaymentIntent on component mount  
    fetch('http://localhost:5000/api/stripe/pay', {  
      method: 'POST',  
      headers: { 'Content-Type': 'application/json' },  
      body: JSON.stringify({ amount: 2000, client_stripe_secret_key: process.env.NEXT_SECRET_STRIPE_SECRET_KEY }), // Example amount in cents ($20.00)
    })  
      .then((response) => response.json())  
      .then((data) => setClientSecret(data.clientSecret));  
  }, []);  

  const handleSubmit = async (event:any) => {  
    event.preventDefault();  
    setError(null);  
    setSuccess(null);  
    setLoading(true);  

    if (!stripe || !elements) {  
      return;  
    }  

    const cardElement = elements.getElement(CardElement);  

    const { error } = await stripe.confirmCardPayment(clientSecret, {  
      payment_method: {  
        card: cardElement,  
      },  
    });  

    if (error) {  
      setError(error.message);  
      setLoading(false);  
    } else {  
      setSuccess('Payment succeeded!');  
      setLoading(false);  
    }  
  };  

  return (  
    <form onSubmit={handleSubmit} className='bg-slate-200'>
      <CardElement />  
      <button type="submit" className='bg-purple-200' disabled={!stripe || loading}>  
        Pay  
      </button>  
      {error && <div>{error}</div>}  
      {success && <div>{success}</div>}  
    </form>  
  );  
};  

export default PaymentForm;