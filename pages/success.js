import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";
import { useStateContext } from "../context/StateContext";
import { runStar } from "../lib/confetti";
const Success = () => {
  const { setCartItems, setTotalQuantities, setTotalPrice } = useStateContext();
  useEffect(() => {
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runStar();
  }, []);
  return (
    <div className="succeess-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank you for your order</h2>
        <p className="email-msg">The receipt will be sent to your email</p>
        <p className="description">
          If you have any questions, please email to
          <a className="email" href="mailto:jpstore@example.com">
            jpstore@example.com
          </a>
        </p>
        <Link href="/">
          <button type="button" className="btn">
            Continue shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
