import React, { useState } from 'react';
import {Divider,Button} from "@mui/joy";
import { addArticle } from "../../redux/actions";

import styles from "./styles.module.css"

export default function AddArticle({ article, categories }) {
  const [name, setName] = useState(article.name);
  const [price, setPrice] = useState(article.price);
  const [amount, setAmount] = useState(article.amount);
  const [categoryID, setCategoryID] = useState(categories[0].id);
  const [photo, setPhoto] = useState(new Blob());

  const handleAdd = (e) => {
    e.preventDefault(); // Остановить стандартное поведение формы
    console.log(name, price, amount, photo, categoryID);
    addArticle(name, price, amount, photo, categoryID);
  }

  const handleCategoryChange = (event) => {
    const newCategoryID = event.target.value;
    setCategoryID(newCategoryID);
  };

  const handlePhotoChange = (e) => {
    const selectedFile = e.target.files[0];
    setPhoto(selectedFile);
  }

  return (
    <form key={article.id} onSubmit={handleAdd}>
      <div className={styles.article}>
        <label htmlFor="name">Name</label>
        <input
          onChange={(e) => setName(e.target.value)}
          type='text'
          name='name'
          value={name}
        />

        <label htmlFor="price">Price</label>
        <input
          onChange={(e) => setPrice(e.target.value)}
          type='number'
          name='price'
          value={price}
        />

        <label htmlFor="amount">Amount</label>
        <input
          onChange={(e) => setAmount(e.target.value)}
          type='number'
          name='amount'
          value={amount}
        />

        <label htmlFor="category">Category</label>
        <select onChange={handleCategoryChange} name="category" >
          {categories.map((item)=>{
            return(<option key={item.id} value={item.id}>{item.name}</option>)
          })}
        </select>

        <label htmlFor="photo">Photo</label>
        <input
          type='file'
          name='photo'
          onChange={handlePhotoChange}
        />

        <Button type="submit">Add</Button>
      </div>

      <Divider
        sx={{
          height: "2px",
          width: "100%",
          marginTop: "10px",
          background: "#222",
        }}
      ></Divider>
    </form>
  );
}
