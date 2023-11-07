import React, { useState } from 'react';
import Divider from "@mui/joy/Divider";
import { addArticle } from "../../redux/actions";

export default function AddArticle({ article }) {
  const [name, setName] = useState(article.name);
  const [price, setPrice] = useState(article.price);
  const [amount, setAmount] = useState(article.amount);
  const [photo, setPhoto] = useState(new Blob());

  const handleAdd = (e) => {
    e.preventDefault(); // Остановить стандартное поведение формы
    console.log(name, price, amount, photo);
    addArticle(name, price, amount, photo);
  }

  const handlePhotoChange = (e) => {
    const selectedFile = e.target.files[0];
    setPhoto(selectedFile);
  }

  return (
    <form key={article.id} onSubmit={handleAdd}>
      <div>
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

        <label htmlFor="photo">Photo</label>
        <input
          type='file'
          name='photo'
          onChange={handlePhotoChange}
        />

        <button type="submit">Save</button>
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
