import axios from 'axios';

const phphost = "http://127.0.0.1:8000";

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
  
  export const loadArticles = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get(`${phphost}/api/products`);
        const articles = response.data;
        dispatch({ type: 'LOAD_ARTICLES', articles });
      } catch (error) {
        // Обработка ошибок, например, вывод ошибки в консоль или диспетч другого действия
      }
    };
  };

  export const saveArticle = (name, price, amount) =>{
      console.log(name,price,amount);
      axios.post(`${phphost}/api/save/article`, { name, price, amount }).
      then((response)=>{
        console.log(` data: ${response.data.ok}\n status: ${response.status}`)
      }).
      catch((error)=>{
        console.log(error)
      })
  }

  export const updateArticles = (articles) => ({
    type: 'UPDATE_ARTICLES',
    articles,
  });

  export const adminLogin = (user)=>({
    type: 'ADMIN_CHECK',
    user,
  })