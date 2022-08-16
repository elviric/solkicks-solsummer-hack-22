import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { MdKeyboardArrowLeft } from "react-icons/md";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Checkout = () => {
  const state = useSelector((state) => state.addItem);

  const cartItems = (cartItem) => {
    return (
      <div className="checkoutItem" key={cartItem.id}>
        <input type="checkbox" name="" id="" />
        <img
          src={cartItem.imgSrc}
          alt="cartItemImage"
          width={173}
          height={173}
          className="cartItemImg"
        />
        <div className="itemName">
          <h2>{cartItem.itemTitle}</h2>
          <p>{cartItem.itemName}</p>
          <div className="priceDiv">
            <p>
              Exclusive price: <span>{cartItem.itemSalePrice}/-</span>
            </p>
            <p className="originalPrice">
              Original price: {cartItem.itemPrice}/-
            </p>
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className="div">
        <p>Your Cart is Empty</p>
      </div>
    );
  };

  const totalFinalAmount = state.reduce(
    (a, c) => a + Number(c.itemSalePrice),
    0
  );

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="checkoutWrapper">
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            className="backButton"
          >
            <MdKeyboardArrowLeft size={20} color="#82798B" />
            <span>Back</span>
          </Link>

          <div className="checkout-row">
            <div className="col-left">
              <h1>Checkout</h1>

              {/* Cart Item Logic Here */}
              {state.length === 0 && emptyCart()}
              {state.length !== 0 && state.map(cartItems)}
            </div>

            <div className="col-right">
              <div className="billWrapper">
                <p>Billing Summary</p>

                <div className="priceCount">
                  <p>Subtotal</p>
                  <p>SOL {totalFinalAmount === "" ? 0 : totalFinalAmount}</p>
                </div>

                <hr />

                <div className="totalPrice">
                  <p>Total</p>
                  <p>SOL {totalFinalAmount === "" ? 0 : totalFinalAmount}</p>
                </div>

                <Link
                  to="/orders"
                  style={{ textDecoration: "none" }}
                  className="backButton"
                >
                  <button className="payBtn">
                    PAY SOL {totalFinalAmount === "" ? 0 : totalFinalAmount}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
