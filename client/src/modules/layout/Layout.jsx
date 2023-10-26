import React from 'react';
import styles from "./styles.module.css";
import Basket from '../basket/Basket';

export default function Layout({ children, cart }) {
  return (
    <>
      <header className={styles.header}>
        <span>Наш интернет магазин</span>
        <Basket cart={cart} />
      </header>
      {children}
      <footer>
        <span>Все права защищены &copy;</span>
      </footer>
    </>
  );
}
