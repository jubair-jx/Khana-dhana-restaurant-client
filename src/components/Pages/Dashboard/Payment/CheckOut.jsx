import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../../Context/AuthProvider";
import "../Payment/CheckOut.css";
import Swal from "sweetalert2";

const CheckOut = ({ price, cart }) => {
  const stripe = useStripe();
  const [cardError, setCardError] = useState("");
  const elements = useElements();
  const { users } = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClienSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transctionId, setTranscrtionId] = useState("");
  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { price }).then((res) => {
      console.log(res.data.clientSecret);
      setClienSecret(res.data.clientSecret);
    });
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setCardError(error.message);
      console.log("error bhaiya", error);
    } else {
      setCardError("");
      console.log("payment Method", paymentMethod);
    }
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: users?.email || "unknown",
            name: users?.displayName || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    }
    console.log("paymentIntent", paymentIntent);
    setProcessing(false);

    if (paymentIntent.status === "succeeded") {
      const transcId = paymentIntent.id;
      setTranscrtionId(transcId);
      //save payment info to server
      const paymentInfo = {
        email: users?.email,
        transctionId: transcId,
        price,
        quantity: cart.length,
        date: new Date(),
        cartItems: cart.map((item) => item._id),
        menuItems: cart.map((id) => id.menuItemId),
        itemsName: cart.map((item) => item.name),
      };
      axiosSecure.post("payment", paymentInfo).then((res) => {
        console.log(res.data);
        if (res.data.result.insertedId) {
          Swal.fire("Your Payment is Done, Now You Can Chill....");
        }
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div>
          <button
            className="btn btn-primary"
            type="submit"
            disabled={!stripe || !clientSecret || processing}
          >
            Pay
          </button>
        </div>
      </form>
      <p className="text-red-500">{cardError}</p>
      {transctionId && (
        <p className="text-green-600">
          Your Transction is Complete TransctionId: {transctionId}
        </p>
      )}
    </div>
  );
};

export default CheckOut;
