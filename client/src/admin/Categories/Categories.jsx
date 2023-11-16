import React, { useState } from 'react'
import {addNewCategory} from "../../redux/actions"
import Category from '../Category/Category'

import {loadCategories} from "../../redux/actions"
import { useDispatch } from "react-redux";
import { Box } from '@mui/joy';

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
    <Box>
      {categories.map((category)=>{
        return(
            <Category key={category.id} category={category}></Category>
        )
      })}
      <Box>
        add category
        <input onChange={handleNameChange} type='text'></input>
        <button onClick={addCategory}>add</button>
      </Box>
    </Box>
  )
}
