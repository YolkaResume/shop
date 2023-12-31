import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
import { addToCart, removeFromCart } from "../../redux/actions";
import Button from "@mui/joy/Button";

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { Box } from "@mui/joy";

export default function Article({ article }) {
  const dispatch = useDispatch();
  const articlesItem = useSelector(
    (state) => state.articles[state.articles.indexOf(article)]
  ); // Access the cart item for the current article

  const toCart = () => {
    dispatch(addToCart(article));
  };

  const fromCart = () => {
    dispatch(removeFromCart(article));
  };

  return article.amount > 0 ? (
    <Box className={styles.article}>
      <img src={`data:image/jpeg;base64,${article.photo}`} alt="Article" />
      <span className={styles.title}>{article.name}</span>
      <span className={styles.title}>
        {articlesItem.quantity ? articlesItem.quantity : 0}
      </span>
      <Box className={styles.buttons}>
        <Button onClick={toCart}>
          <AddShoppingCartIcon />
        </Button>
        {article.price}$
        <Button onClick={fromCart}>
          <RemoveShoppingCartIcon />
        </Button>
      </Box>
    </Box>
  ) : (
    <Box className={styles.article}>
      <img src={`data:image/jpeg;base64,${article.photo}`} alt="Article" />
      <span className={styles.title}>{article.name}</span>
      <span>No more products in the store</span>
    </Box>
  );
}
