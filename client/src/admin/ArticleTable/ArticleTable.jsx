import React from "react";

import styles from "./styles.module.css";
import AdminArticle from "../AdminArticle/AdminArticle";
import { Box } from "@mui/joy";

export default function ArticleTable({ articles }) {

  return (
    <Box className={styles.Table}>
      {articles.map((article) => {
        return (
          <AdminArticle key={article.id} article={article}></AdminArticle>
        );
      })}
    </Box>
  );
}
