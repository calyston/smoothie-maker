//Imports
import React from "react";
import { useGlobalContext } from '../context'

const SmoothieIngredient = ({ id, name, category }) => {
  const { addIngredient, removeIngredient, removeAll } = useGlobalContext();
  return (
    <article>
      <p>{name}</p>
      <p>Category: {category}</p>
      <button onClick={() => addIngredient(id)}>Add</button>
      <button onClick={() => removeIngredient(id)}>Remove</button>
    </article>
  )
}

export default SmoothieIngredient;