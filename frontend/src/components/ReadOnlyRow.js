import React from "react";
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { useStoremedsContext } from "../hooks/useStoremedsContext";

const ReadOnlyRow = ({ storemed, handleEditClick}) => {

  const {dispatch} = useStoremedsContext()
  const handleDeleteClick = async () =>{
    const response = await fetch('/api/storemeds/'+ storemed._id, {
      method: 'DELETE'
  
    })
    const json = await response.json()
  
    if (response.ok){
      dispatch({type: 'DELETE_STOREMED', payload:json})
    }
  }

  return (
    <tr key={storemed?._id}>
      <td>{storemed?.lot_no}</td>
      <td>{storemed?.medicine_name}</td>
      <td>{storemed?.brand}</td>
      <td>{storemed?.quantity}</td>
      <td>{storemed?.expiry_date}</td>
      <td>{storemed?.supplier_name}</td>
      <td>
        {/* <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button> */}
        <IconButton aria-label="Edit" className='Edit'>
        <ModeEditIcon type="button"
          onClick={(event) => handleEditClick(event, storemed)}/>
        </IconButton>
        <IconButton aria-label="Delete" className='delete'>
        <DeleteIcon type="button"
          onClick={(event) => handleDeleteClick(storemed._id)} />
        </IconButton>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
