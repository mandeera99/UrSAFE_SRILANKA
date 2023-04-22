import { useState } from "react";
import { useStoremedsContext } from "../hooks/useStoremedsContext";
import Button from "react-bootstrap/Button";


const StoremedForm = () => {
const { dispatch } = useStoremedsContext()

const [lot_no, setLot_no] = useState('')
const [medicine_name, setMedicine_name] = useState('')
const [brand, setBrand] = useState('')
const [quantity, setQuantity] = useState('')
const [expiry_date, setExpiry_date] = useState('')
const [supplier_name, setSupplier_name] = useState('')

const handleSubmit = async (e) => {
    e.preventDefault()
    
    const storemed = {lot_no,medicine_name,brand,quantity,expiry_date,supplier_name}

    const response = await fetch('/api/storemeds',{
      method: 'POST',
      body: JSON.stringify(storemed),
      headers: {
        'Content-Type': 'application/json'
      }
      })
      const json = await response.json()
      if(response.ok){

         setLot_no('')
         setMedicine_name('')
         setBrand('')
         setQuantity('')
         setExpiry_date('')
         setSupplier_name('')
        //setStoremeds(json)
        dispatch({type: 'CREATE_STOREMED', payload: json})

      }
  }

  return(
   
      
        
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          // name="lot_no"
          value={lot_no}
          required="required"
          placeholder="Enter lot no..."
          onChange={(e) => setLot_no(e.target.value)}
        />
        <input
          type="text"
          // name="medicine_name"
          value={medicine_name}
          required="required"
          placeholder="Enter medicine name..."
          onChange={(e) => setMedicine_name(e.target.value)}
        />
        <input
          type="text"
          // name="brand"
          value={brand}
          required="required"
          placeholder="Enter brand name"
          onChange={(e) => setBrand(e.target.value)}
        />
        <input
          type="number"
          // name="quantity"
          value={quantity}
          required="required"
          placeholder="Enter quantity"
          onChange={(e) => setQuantity(e.target.value)}
        />
        <input
          type="date"
          // name="expiry_date"
          value={expiry_date}
          required="required"
          placeholder="Enter expiry date"
          onChange={(e) => setExpiry_date(e.target.value)}
        />
        <input
          type="text"
          // name="supplier_name"
          value={supplier_name}
          required="required"
          placeholder="Enter supplier name"
          onChange={(e) => setSupplier_name(e.target.value)}
        />
        
        
        <Button type="submit" variant="primary">Add medicine</Button>{' '}
            
      </form>

  )
}

export default StoremedForm