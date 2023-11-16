import React from 'react';
import styles from "./styles.module.css";
import Cart from '../cart/Cart';

import StoreIcon from '@mui/icons-material/Store';

export default function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <span>
          <StoreIcon/>
          ImageHub</span>
        <Cart />
      </header>
      {children}
      <footer>
        <span>All rights copyrited &copy;</span>
      </footer>
    </>
  );
}
