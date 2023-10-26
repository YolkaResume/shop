import './App.css';

import Layout from './modules/layout/Layout';
import ArticleList from './modules/articlelist/ArticleList';
import { useState } from 'react';

const articles = [
  {
    id:1,
    name:"tshirt",
    price:15,
    amount:5,
  },
  {
    id:2,
    name:"hat",
    price:25,
    amount:5,
  },
  {
    id:3,
    name:"jeans",
    price:50,
    amount:5,
  },
  {
    id:4,
    name:"shirt",
    price:23,
    amount:5,
  },
  {
    id:5,
    name:"mark",
    price:25,
    amount:5,
  },
]


function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (article) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[article.id]) {
        updatedCart[article.id].quantity += 1;
      } else {
        updatedCart[article.id] = { ...article, quantity: 1 };
      }
      return updatedCart;
    });
  };

  const removeFromCart = (article) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[article.id]) {
        if (updatedCart[article.id].quantity === 1) {
          delete updatedCart[article.id];
        } else {
          updatedCart[article.id].quantity -= 1;
        }
      }
      return updatedCart;
    });
  };

  return (
    <Layout cart={cart}>
    <ArticleList articles={articles} onAddToCart={addToCart} onRemoveFromCart={removeFromCart} />
  </Layout>
  );
}

export default App;
