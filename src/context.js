import React, { useContext, useReducer } from 'react'
import ingredients from './data'
import reducer from './reducer'
const AppContext = React.createContext()

const initialState = {
  smoothie: ingredients,
  added: false,
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addIngredient = (id) => {
    dispatch({ type: 'ADD_INGREDIENT' })
  }

  const removeIngredient = (id) => {
    dispatch({ type: 'REMOVE_INGREDIENT' })
  }

  const removeAll = () => {
    dispatch({ type: 'REMOVE_ALL' })
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        addIngredient,
        removeIngredient,
        removeAll,
      }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }