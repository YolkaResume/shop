export const addToCart = (article) => {
    return {
      type: 'ADD_TO_CART',
      article,
    };
  };
  
  export const removeFromCart = (article) => {
    return {
      type: 'REMOVE_FROM_CART',
      article,
    };
  };
  
  export const loadArticles = (articles) => {
    return {
      type: 'LOAD_ARTICLES',
      articles,
    };
  };