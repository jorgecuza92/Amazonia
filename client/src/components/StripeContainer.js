import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
  "pk_test_51InooQI8DnU952mciJkky4KinKWswmQfXzWxZGL92FeoCLCRgxwdWssWnygXv63LSX4UgLJTwp9Dmh1yx64rRMyf000zqKm7sh";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>      
      <PaymentForm />
    </Elements>
  );
}
