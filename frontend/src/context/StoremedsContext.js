import { createContext, useReducer } from 'react'

export const StoremedsContext = createContext()

export const storemedsReducer = (state, action) => {
  switch (action.type) {
    case 'SET_STOREMEDS':
      return { 
        storemeds: action.payload 
      }
    case 'CREATE_STOREMED':
      return { 
        storemeds: [action.payload, ...state.storemeds] 
      }
    case 'DELETE_STOREMED':
      return {
        storemeds: state.storemeds.filter((s) =>s._id !== action.payload._id)
      }
    case 'UPDATE_STOREMED':
      return  {
        storemeds: state.storemeds.map((s) =>
      s._id === action.payload._id ? action.payload : s
      )
      }
        // storemeds: storemeds.map((s) => s._id === action.payload._id ? action.payload : s
        // );
      
      
     
    default:
      return state
  }
}

export const StoremedsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(storemedsReducer, { 
    storemeds: null
  })
  
  // dispatch({type: 'SET_STOREMEDS', payload: [{}, {}]})

  return (
    <StoremedsContext.Provider value={{...state, dispatch }}>
      { children }
    </StoremedsContext.Provider>
  )
}

