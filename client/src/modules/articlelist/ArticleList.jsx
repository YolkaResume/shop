import Article from "../article/Article";
import styles from "./styles.module.css"
import React from "react";

export default function ArticleList({ articles,onAddToCart, onRemoveFromCart }) {
  return (
    <div className={styles.list}>
      {articles.map((article,index) => {
        return <Article key={index} onAddToCart={onAddToCart} onRemoveFromCart={onRemoveFromCart} article={article} />;
      })}
    </div>
  );
}
