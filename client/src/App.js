import './App.css';

import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, loadArticles } from './redux/actions';

import Layout from './modules/layout/Layout';
import ArticleList from './modules/articlelist/ArticleList';
import { useEffect } from 'react';



function App() {
  const dispatch = useDispatch();

  const handleAddToCart = (article) => {
    dispatch(addToCart(article));
  };

  const handleRemoveFromCart = (article) => {
    dispatch(removeFromCart(article));
  };

  useEffect(() => {
    dispatch(loadArticles());
  }, [dispatch]);

  return (
    <Layout >
      <ArticleList onAddToCart={handleAddToCart} onRemoveFromCart={handleRemoveFromCart} />
    </Layout>
  );
}
export default App;
