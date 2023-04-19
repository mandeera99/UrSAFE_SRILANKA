import React from "react";
import { IconButton } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';
import axios from 'axios';
import { useState } from "react";

const EditableRow = ({
  storemed,
  editFormData,
  handleEditFormChange,
  handleCancelClick,
  handleEditFormSubmit,
  rowData,
  onUpdate
}) => {
  // const [lot_no, setLot_no] = useState(rowData.lot_no);
  // const [medicine_name, setMedicine_name] = useState(rowData.medicine_name);
  // const [brand, setBrand] = useState(rowData.brand);
  // const [quantity, setQuantity] = useState(rowData.quantity);
  // const [expiry_date, setExpiry_date] = useState(rowData.expiry_date);
  // const [supplier_name, setSupplier_name] = useState(rowData.supplier_name);
  
  
   const handleSaveClick = () => {
  //   axios.put(`/api/storemeds/${rowData._id}`, { lot_no,medicine_name,brand,quantity,expiry_date,supplier_name })
  //     .then(res => {
  //       onUpdate(res.data);
  //     })
  //     .catch(err => console.log(err));
   };

  // const handleSaveClick = async (event) => {
  //   event.preventDefault();
  //   try {
  //     await axios.post('/api/storemeds'+ storemed._id, editFormData);
  //     alert('Form updated successfully!');
  //   } catch (err) {
  //     alert('Error updating form.');
  //   }
  // }

// const handleSaveClick = async (event) => {
   
  // }
  // const handleSubmit = async (e) => {
  //   e.preventDefault()
    
  //   const storemed = {lot_no,medicine_name,brand,quantity,expiry_date,supplier_name}

  //   const response = await fetch('/api/storemeds',{
  //     method: 'POST',
  //     body: JSON.stringify(storemed),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //     })
  //     const json = await response.json()
  //     if(response.ok){

  //        setLot_no('')
  //        setMedicine_name('')
  //        setBrand('')
  //        setQuantity('')
  //        setExpiry_date('')
  //        setSupplier_name('')
  //       //setStoremeds(json)
  //       dispatch({type: 'CREATE_STOREMED', payload: json})

  //     }
  // }
  return (
    <tr key={storemed?._id}>
      <td>
        <input
          type="number"
          required="required"
          placeholder="lot_no"
          name="lot_no"
          value={editFormData.lot_no}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="medicine_name"
          name="medicine_name"
          value={editFormData.medicine_name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter brand"
          name="brand"
          value={editFormData.brand}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="number"
          required="required"
          placeholder="Enter quantity"
          name="quantity"
          value={editFormData.quantity}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="date"
          required="required"
          placeholder="Enter expired_date"
          name="expiry_date"
          value={editFormData.expiry_date}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter supplier_name"
          name="supplier_name"
          value={editFormData.supplier_name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
      <IconButton aria-label="Save" className='save' type="submit">
      <SaveIcon onclick={handleEditFormSubmit}/>
      {/* <SaveIcon /> */}
      </IconButton>

     <IconButton aria-label="Cancel" className='cancel'>
    <CancelIcon type="button" onClick={handleCancelClick}/>
      </IconButton>
        
      </td>
    </tr>
  );
};

export default EditableRow;