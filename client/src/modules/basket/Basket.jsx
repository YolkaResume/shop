import React, { useState } from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';

export default function Basket() {
  const cart = useSelector((state) => state.cart);
  const [isBasketOpen, setIsBasketOpen] = useState(false);

  const cartItems = Object.values(cart);

  const toggleBasket = () => {
    setIsBasketOpen(!isBasketOpen);
  };

  return (
    <div className={styles.menu}>
      <button className={styles.cartBtn} onClick={toggleBasket}>Корзина</button>
      <div className={isBasketOpen ? styles.basketOpen : styles.basketClosed}>
        <h2>Your Cart</h2>
        <ul>
          {cartItems.map((cartItem) => (
            <li key={cartItem.id}>
              {cartItem.name} - Quantity: {cartItem.quantity} - Price: {cartItem.price * cartItem.quantity}$
            </li>
          ))}
          {cartItems.length < 1 ?
            <></>:
            <button className={styles.buyBtn}>
            BUY
          </button>
          }
          
        </ul>
        
      </div>
    </div>
  );
}
