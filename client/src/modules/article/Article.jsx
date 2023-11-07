import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.css';
import { addToCart, removeFromCart } from '../../redux/actions';

export default function Article({ article }) {
  const dispatch = useDispatch();
  const articlesItem = useSelector((state) => state.articles[state.articles.indexOf(article)]); // Access the cart item for the current article



  const toCart = () => {
    dispatch(addToCart(article));
  };

  const fromCart = () => {
      dispatch(removeFromCart(article));
  };

  return (
    <div className={styles.article}>
      <img src={`data:image/jpeg;base64,${article.photo}`} alt="Article" />
      <span className={styles.title}>{article.name}</span>
      <span className={styles.title}>{articlesItem.quantity ? articlesItem.quantity : 0}</span>
      <div className={styles.buttons}>
        <button onClick={toCart}>+</button>
        {article.price}$
        <button onClick={fromCart}>-</button>
      </div>
    </div>
  );
}
