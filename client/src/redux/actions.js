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

  export const buyItems = (items,email) =>{
    axios.post(`${phphost}/api/products/buy`, { items,email }).then((response)=>{
      console.log(response.data);
      
      
    }).
    catch((error)=>{
      console.log(error)
    })
  }

  export const clearCart = () => ({
    type: 'CLEAR_CART',
  });
  
  export const loadArticles = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get(`${phphost}/api/products`);
        const articles = response.data;
        console.log(articles)
        dispatch({ type: 'LOAD_ARTICLES', articles });
      } catch (error) {
        // Обработка ошибок, например, вывод ошибки в консоль или диспетч другого действия
      }
    };
  };

  export const loadCategories = () => {
    return async (dispatch) => {
      try {
        const response = await axios.get(`${phphost}/api/categories`);
        const categories = response.data;
        dispatch({ type: 'SET_CATEGORIES', categories });
      } catch (error) {
        
      }
    };
  };

  export const saveArticle = (name, price, amount) =>{
      axios.post(`${phphost}/api/save/article`, { name, price, amount }).
      then((response)=>{
        console.log(` ok?: ${response.data.ok}\n status: ${response.status}`)
      }).
      catch((error)=>{
        console.log(error)
      })
  }

  export const addNewCategory = (name) => {
    axios.post(`${phphost}/api/add/category`, { name: name })
      .then((response) => {
        console.log(response.data); // Добавьте обработку успешного ответа
      })
      .catch((error) => {
        console.log(error); // Обработка ошибок
      });
  }

  export const addArticle = (name, price, amount, photo, category) => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('amount', amount);
    formData.append('category', category);
    formData.append('photo', photo);  // Directly append the file
  
    axios.post(`${phphost}/api/add/article`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }).then((response) => {
      console.log(response);
    }).catch((error) => {
      console.log(error);
    });
  }
  

  export const updateArticles = (articles) => ({
    type: 'UPDATE_ARTICLES',
    articles,
  });

  export const adminLogin = (user) => {
    return (dispatch) => {
      console.log(user);
      axios.post(`${phphost}/api/login/admin`, user)
        .then((response) => {
          console.log(response);
          const admin = response.data.success;
          dispatch({ type: 'SET_ADMIN', admin });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  