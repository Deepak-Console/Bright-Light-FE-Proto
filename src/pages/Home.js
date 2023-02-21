import axios from 'axios';
import React, { useEffect, useState } from "react";

/* import { Redirect } from "react-router-dom";  <Redirect to={redirect} />  */

const Home = () => {
  // let [redirect, satredirect] = useState(null)

  return <button onClick={PaymentHandler}>Pay Now</button>
}



const PaymentHandler = async ({ satredirect }) => {
  const API_URL = 'http://localhost:4000/payment/'
  // e.preventDefault();
  const orderUrl = `${API_URL}order`;
  const response = await axios.get(orderUrl);
  const { data } = response;
  const options = {
    key: "rzp_test_uSynS0fcrZneEe", //process.env.RAZOR_PAY_KEY_ID,
    name: "one audit",
    description: "Some Description",
    order_id: data.id,
    handler: async (response) => {
      try {
        const paymentId = response.razorpay_payment_id;
        const url = `${API_URL}capture/${paymentId}`;
        const captureResponse = await axios.post(url, {})
        console.log(captureResponse, satredirect);
        if (captureResponse.status == 200) {
          //satredirect(true)
          window.location.replace('http://localhost:3000/products/')
        }

      } catch (err) {
        console.log(err);
      }
    },
    theme: {
      color: "#686CFD",
    },
  };
  const rzp1 = new window.Razorpay(options);
  rzp1.open();

};

export default Home;