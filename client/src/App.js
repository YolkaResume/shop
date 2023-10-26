import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, loadArticles } from './redux/actions';

import Layout from './modules/layout/Layout';
import ArticleList from './modules/articlelist/ArticleList';
import { useEffect } from 'react';

const articles = [
  {
    id: 1,
    name: "tshirt",
    price: 15,
    amount: 5,
  },
  {
    id: 2,
    name: "hat",
    price: 25,
    amount: 5,
  },
  {
    id: 8,
    name: "jeans",
    price: 50,
    amount: 5,
  },
  {
    id: 7,
    name: "shirt",
    price: 23,
    amount: 5,
  },
  {
    id: 10,
    name: "mark",
    price: 35,
    amount: 12,
  },
];

function App() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleAddToCart = (article) => {
    dispatch(addToCart(article));
  };

  const handleRemoveFromCart = (article) => {
    dispatch(removeFromCart(article));
  };

  useEffect(() => {
    dispatch(loadArticles(articles));
  }, [dispatch]);

  return (
    <Layout cart={cart}>
      <ArticleList articles={articles} onAddToCart={handleAddToCart} onRemoveFromCart={handleRemoveFromCart} />
    </Layout>
  );
}
export default App;
