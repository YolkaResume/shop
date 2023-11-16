import React, { useState } from 'react'
import Divider from "@mui/joy/Divider";
import {saveArticle} from "../../redux/actions"

import styles from "./styles.module.css"
import Button from '@mui/joy/Button';

export default function AdminArticle({article}) {

    const [name,setName] = useState(article.name)
    const [price,setPrice] = useState(article.price)
    const [amount,setAmount] = useState(article.amount)
    const id = article.id;
    const save = ()=>{
        saveArticle(name,price,amount,id)
    }

    return (
        <div key={article.id}>
          <div className={styles.article}>
            <label htmlFor="name">Name</label>
            <input onChange={(e) => setName(e.target.value)} type='text' name='name' defaultValue={article.name}/>

            <label htmlFor="price">Price</label>
            <input onChange={(e) => setPrice(e.target.value)} type='number' name='price' defaultValue={article.price}/>

            <label htmlFor="amount">Amount</label>
            <input onChange={(e) => setAmount(e.target.value)} type='number' name='amount' defaultValue={article.amount}/>

            <Button onClick={save}>Save</Button>
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
