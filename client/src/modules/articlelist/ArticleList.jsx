import Article from "../article/Article";
import styles from "./styles.module.css";
import React from "react";
import { useSelector } from 'react-redux';

function ArticleList() {
  const articles = useSelector((state) => state.articles);

  return (
    <div className={styles.list}>
      {Object.values(articles).map((article) => {
        return <Article key={article.id} article={article} />;
      })}
    </div>
  );
}

export default ArticleList;
