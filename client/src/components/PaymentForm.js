import React from 'react'
import { CardElement, useElements, useStripe} from '@stripe/react-stripe-js';
import axios from 'axios';
import './PaymentForm.css'
import {useState} from 'react'

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: '#171717',
      color: "#f4f4f4",
      fontWeight: 500,
      fontFamily: "Roboto, Ariel, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder" : { color: "#87bbfd" }
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee"
    }
  }
}



export default function PaymentForm() {
  
  const [success, setSuccess] = useState(false)
  const stripe = useStripe()
  const elements = useElements()


  const handleSubmit = async (e) => {
    e.preventDefault()
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    })

  if(!error) {
    try {
      const {id} = paymentMethod
      const response = await axios.post('http://localhost:5000/payment', {
        amount: 10,
        id
      })

      if(response.data.success) {
        console.log('Successful payment')
        setSuccess(true)
      }

    } catch (error) {
      console.log("Error", error)
    }
  } else {
    console.log(error.message)
  }
}
  return (
    <>
    {!success ?
    <form onSubmit={handleSubmit}>
      <div className="formContainer">
      <fieldset className="FormGroup">
        <div className="FormRow">
          <CardElement options={CARD_OPTIONS} />
        </div>
      </fieldset>
      <button>Pay</button>
      </div>
    </form>  
    :
    <div>
      <h2>You just bought a a product!</h2>
    </div>
  }
    </>
  )
}