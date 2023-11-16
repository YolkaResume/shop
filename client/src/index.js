// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from './admin/Admin';
import ConfirmOrder from './modules/Order/ConfirmOrder';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/confirm" element={<ConfirmOrder />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  </Provider>
);
