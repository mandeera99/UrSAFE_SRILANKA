import React from "react";
import { IconButton } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';

const EditableRow = ({
  storemed,
  editFormData,
  handleEditFormChange,
  handleCancelClick,
  handleEditFormSubmit,
  rowData,
  onUpdate
}) => {
  
  
   const handleSaveClick = () => {
  
   };

  
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
        <input
          type="number"
          required="required"
          placeholder="Enter the price"
          name="price"
          value={editFormData.price}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
      <IconButton aria-label="Save" className='save' type="submit">
      <SaveIcon onclick={handleEditFormSubmit}/>
      </IconButton>

     <IconButton aria-label="Cancel" className='cancel'>
    <CancelIcon type="button" onClick={handleCancelClick}/>
      </IconButton>
        
      </td>
    </tr>
  );
};

export default EditableRow;