import React, { useState } from 'react';
import styles from './styles.module.css';

export default function Article({ article, onAddToCart, onRemoveFromCart }) {
  const id = article.id;
  const name = article.name;
  const price = article.price;
  const [amount, setAmount] = useState(article.amount);


  const toCart = ()=>{
    if(amount>0){
    onAddToCart(article);
    setAmount(amount-1)
    }
  }
  const fromCart = () =>{
    if(article.amount>amount){
      onRemoveFromCart(article);
      setAmount(amount+1)
    }
  }

  return (
    <div className={styles.article}>
      <span className={styles.title}>{name}</span>
      <span className={styles.title}>{amount}</span>
      <div className={styles.buttons}>
        <button onClick={toCart}>+</button>
        {price}$
        <button onClick={fromCart}>-</button>
      </div>
    </div>
  );
}
