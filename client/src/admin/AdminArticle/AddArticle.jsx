import React, { useState } from 'react';
import Divider from "@mui/joy/Divider";
import { addArticle } from "../../redux/actions";

export default function AddArticle({ article }) {
  const [name, setName] = useState(article.name);
  const [price, setPrice] = useState(article.price);
  const [amount, setAmount] = useState(article.amount);
  const [photo, setPhoto] = useState(null);

  const add = () => {
    console.log(name, price, amount, photo)
    addArticle(name, price, amount, photo);
  }

  return (
    <div key={article.id}>
      <div>
        <label htmlFor="name">Name</label>
        <input onChange={(e) => setName(e.target.value)} type='text' name='name' defaultValue={article.name} />

        <label htmlFor="price">Price</label>
        <input onChange={(e) => setPrice(e.target.value)} type='number' name='price' defaultValue={article.price} />

        <label htmlFor="amount">Amount</label>
        <input onChange={(e) => setAmount(e.target.value)} type='number' name='amount' defaultValue={article.amount} />

        <label htmlFor="photo">Photo</label>
        <input onChange={(e) => setPhoto(e.target.files[0])} type='file' name='photo' />

        <button onClick={add}>Save</button>
      </div>

      <Divider
        sx={{
          height: "2px",
          width: "100%",
          marginTop: "10px",
          background: "#222",
        }}
      ></Divider>
    </div>
  )
}
