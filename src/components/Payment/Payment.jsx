import { Button } from "@material-ui/core";
import { useSnackbar } from "notistack";
import React, { useEffect } from "react";
import { IMG_BASE_URL } from "../../config";

export const PayByRazorPay = ({ newOptions, buyer, cart, setPaymentStatus }) => {
  const { enqueueSnackbar } = useSnackbar();
  const options = {
    key: "rzp_live_err9CaENR36pnu",
    name: "SOLRUF",
    description: "processing your order",
    image: `${IMG_BASE_URL}images/common/logo.png`,
    handler: function (response) {
      enqueueSnackbar("Your order has been placed successfully", { variant: "success" });
      setPaymentStatus();
    },
    prefill: { contact: buyer.phone, email: buyer.email },
    readonly: { contact: true, email: true },
    theme: {
      color: "#ffd05b",
      hide_topbar: false,
    },
  };
  const openPayModal = () => {
    options.order_id = newOptions.orderId;
    options.amount = newOptions.amount;
    options.currency = newOptions.currency;
    var rzp1 = new window.Razorpay(options);
    rzp1.open();
  };
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <>
      <Button
        fullWidth
        style={{ backgroundColor: "#ffd05b", color: "black" }}
        variant="contained"
        color="primary"
        onClick={openPayModal}
        outline="true"
      >
        <strong>Pay Now</strong>
      </Button>
    </>
  );
};
