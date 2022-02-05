//Imports
import React, { useState } from "react";
import { useGlobalContext } from '../context'
import SmoothieIngredient from "./SmoothieIngredient";

const CreateSmoothie = () => {
  const { smoothie, removeAll } = useGlobalContext();
  return (
    <div>
      <article>
        {smoothie.map((item) => {
          return <SmoothieIngredient key={item.id} {...item} />
        })}
      </article>
      <button onClick={() => removeAll()}>Remove All</button>
    </div>
  )
}

export default CreateSmoothie;