import React from "react";

import styles from "./styles.module.css";
import AdminArticle from "../AdminArticle/AdminArticle";

export default function ArticleTable({ articles }) {

  return (
    <div className={styles.Table}>
      {articles.map((article) => {
        return (
          <AdminArticle key={article.id} article={article}></AdminArticle>
        );
      })}
    </div>
  );
}
