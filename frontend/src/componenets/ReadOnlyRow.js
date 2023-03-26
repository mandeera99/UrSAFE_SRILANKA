import React from "react";
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td>{contact.lot_no}</td>
      <td>{contact.medicine_name}</td>
      <td>{contact.brand}</td>
      <td>{contact.quantity}</td>
      <td>{contact.expiry_date}</td>
      <td>{contact.supplier_name}</td>
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
          onClick={(event) => handleEditClick(event, contact)}/>
        </IconButton>
        <IconButton aria-label="Delete" className='delete'>
        <DeleteIcon type="button"
          onClick={(event) => handleDeleteClick(contact.id)} />
        </IconButton>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
