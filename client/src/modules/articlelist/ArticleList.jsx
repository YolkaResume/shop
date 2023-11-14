import Article from "../article/Article";
import styles from "./styles.module.css";
import React, { useState } from "react";
import { useSelector } from 'react-redux';

import SortIcon from '@mui/icons-material/Sort';

function ArticleList() {
  const articles = useSelector((state) => state.articles);
  const [sortType, setSortType] = useState('category');

  const handleSortChange = (type) => {
    setSortType(type);
  };

  const getSortedArticles = () => {
    return Object.values(articles).sort((a, b) => {
      if (sortType === 'price') {
        return a.price - b.price;
      } else if (sortType === 'quantity') {
        return a.quantity - b.quantity;
      } else if (sortType === 'category') {
        return a.category_id - b.category_id;
      } else {
        return 0;
      }
    });
  };

  const sortedArticles = getSortedArticles();

  return (
    <>
    <div className={styles.selector}>
          <SortIcon></SortIcon>
          <select className={styles.select} value={sortType} onChange={(e) => handleSortChange(e.target.value)}>
            <option className={styles.option} value="price">Цена</option>
            <option className={styles.option} value="quantity">Количество</option>
            <option className={styles.option} value="category">Категория</option>
          </select>
      </div>
    <div className={styles.list}>
      
      {sortedArticles.map((article) => {
        return <Article key={article.id} article={article} />;
      })}
    </div>
    </>
  );
}

export default ArticleList;
