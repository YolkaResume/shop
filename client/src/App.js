import './App.css';

import { useDispatch } from 'react-redux';
import { loadArticles } from './redux/actions';

import Layout from './modules/layout/Layout';
import ArticleList from './modules/articlelist/ArticleList';
import { useEffect } from 'react';



function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadArticles());
  }, [dispatch]);

  return (
    <Layout >
      <ArticleList />
    </Layout>
  );
}
export default App;
