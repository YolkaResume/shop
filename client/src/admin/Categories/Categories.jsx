import React, { useState } from 'react'
import {addNewCategory} from "../../redux/actions"
import Category from '../Category/Category'

import {loadCategories} from "../../redux/actions"
import { useDispatch } from "react-redux";

export default function Categories({categories}) {

    const dispatch = useDispatch();
    const [nameToAdd, setName] = useState() 
    const handleNameChange = (e) =>{
        setName(e.target.value);
    }

    const addCategory=()=>{
        console.log(nameToAdd)
        addNewCategory(nameToAdd)
        setTimeout(() => {
          dispatch(loadCategories());
        }, 100);
    }

  return (
    <div>
      {categories.map((category)=>{
        return(
            <Category key={category.id} category={category}></Category>
        )
      })}
      <div>
        add category
        <input onChange={handleNameChange} type='text'></input>
        <button onClick={addCategory}>add</button>
      </div>
    </div>
  )
}
