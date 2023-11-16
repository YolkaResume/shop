// Cart.js
import React, { useState } from 'react';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import Button from '@mui/joy/Button';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/joy';

export default function Cart() {

  const cart = useSelector((state) => state.cart);
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const cartItems = Object.values(cart);
  const navigate = useNavigate();

  const toggleBasket = () => {
    setIsBasketOpen(!isBasketOpen);
  };

  const confirm = () => {
      navigate('/confirm', { state: { items: cartItems } });
  };
  

  return (
    <Box className={styles.menu}>
      <Button color="success" className={styles.cartBtn} onClick={toggleBasket}>
        <ShoppingCartIcon />
      </Button>
      <Box className={isBasketOpen ? styles.basketOpen : styles.basketClosed}>
        <ul className={styles.list}>
          {cartItems.map((cartItem) => (
            <li key={cartItem.id}>
              {cartItem.name} - Quantity: {cartItem.quantity} - Price: {cartItem.price * cartItem.quantity}$
            </li>
          ))}
          {cartItems.length < 1 ? (
            <></>
          ) : (
            <>
              <Button
                sx={{
                  width: '100%',
                }}
                onClick={confirm}
              >
                <ShoppingCartCheckoutIcon />
              </Button>
            </>
          )}
        </ul>
      </Box>
    </Box>
  );
}
