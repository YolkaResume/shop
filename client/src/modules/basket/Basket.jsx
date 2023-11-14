import React, { useState } from "react";
import styles from "./styles.module.css";
import { useSelector, useDispatch } from 'react-redux';
import Button from "@mui/joy/Button";

import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import {buyItems,loadArticles,clearCart } from "../../redux/actions"

export default function Basket() {

  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart);
  const [isBasketOpen, setIsBasketOpen] = useState(false);

  const [email,setEmail] = useState();
  const changeMail = (e)=>{
    setEmail(e.target.value);
  }
  const cartItems = Object.values(cart);

  const toggleBasket = () => {
    setIsBasketOpen(!isBasketOpen);
  };

  const buy = () =>{
    buyItems(cartItems,email);
    setTimeout(()=>{
      dispatch(loadArticles());
      dispatch(clearCart());
    },350)
    
  }

  return (
    <div className={styles.menu}>
      <Button color="success" className={styles.cartBtn} onClick={toggleBasket}>
        <ShoppingCartIcon />
      </Button>
      <div className={isBasketOpen ? styles.basketOpen : styles.basketClosed}>
        <ul className={styles.list}>
          {cartItems.map((cartItem) => (
            <li key={cartItem.id}>
              {cartItem.name} - Quantity: {cartItem.quantity} - Price:{" "}
              {cartItem.price * cartItem.quantity}$
            </li>
          ))}
          {cartItems.length < 1 ? (
            <></>
          ) : (
            <>
            <input onChange={changeMail} type="text"/>
            <Button
              sx={{
                width: "100%",
              }}
              onClick={buy}
            >
              <ShoppingCartCheckoutIcon />
            </Button>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
