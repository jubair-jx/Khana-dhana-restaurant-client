import React from "react";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "./CheckOut";
import useCart from "../../../../hooks/useCart";

//TODO: Add publish key
const stripePromise = loadStripe(import.meta.env.VITE_Stripe_Key);
const Payment = () => {
  const [cart] = useCart();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));
  return (
    <div>
      <SectionTitle
        heading={"Payment"}
        subHeading={"You Can Proceed Now"}
      ></SectionTitle>
      <Elements stripe={stripePromise}>
        <CheckOut cart={cart} price={price}></CheckOut>
      </Elements>
    </div>
  );
};

export default Payment;
