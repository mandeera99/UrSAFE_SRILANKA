import { StoremedsContext } from "../context/StoremedsContext"
import { useContext } from "react"

export const useStoremedsContext = () => {
  const context = useContext(StoremedsContext)

  if(!context) {
    throw Error('useStoremedsContext must be used inside an StoremedsContextProvider')
  }

  return context
}