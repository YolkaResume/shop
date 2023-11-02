const initialState = {
    cart: {},
    articles: [],
    admin:false,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOAD_ARTICLES':
        const initializedArticles = action.articles.map((article) => ({
          ...article,
          quantity: article.amount,
        }));
  
        return {
          ...state,
          articles: initializedArticles,
        };
  
      case 'ADD_TO_CART':
        const updatedCartAdd = { ...state.cart };
        const updatedArticlesAdd = state.articles.map((article) => {
          if (article.name === action.article.name && action.article.quantity !== 0) {
            return {
              ...article,
              quantity: (article.quantity || 0) - 1,
            };
          }
          return article;
        });
  
        if (!updatedCartAdd[action.article.name]) {
          updatedCartAdd[action.article.name] = {
            ...action.article,
            quantity: 1,
          };
        } else if (action.article.quantity !== 0) {
          updatedCartAdd[action.article.name].quantity += 1;
        }
  
        return {
          ...state,
          cart: updatedCartAdd,
          articles: updatedArticlesAdd,
        };
  
      case 'REMOVE_FROM_CART':
        const updatedCartRemove = { ...state.cart };
        const updatedArticlesRemove = state.articles.map((article) => {
          if (article.name === action.article.name && article.amount > action.article.quantity) {
            return {
              ...article,
              quantity: (article.quantity || 0) + 1,
            };
          }
          return article;
        });
  
        if (updatedCartRemove[action.article.name]) {
          updatedCartRemove[action.article.name].quantity -= 1;
          if (updatedCartRemove[action.article.name].quantity <= 0) {
            delete updatedCartRemove[action.article.name];
          }
        }
  
        return {
          ...state,
          cart: updatedCartRemove,
          articles: updatedArticlesRemove,
        };
  
        case 'ADMIN_CHECK':
          return{
            ...state,
            admin:true,
          }  
      default:
        return state;
    }
  };
  
  export default reducer;
  