import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "../App.css";
import data from "../mock-data.json";
import ReadOnlyRow from "../componenets/ReadOnlyRow";
import EditableRow from "../componenets/EditableRow";
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/Button";

const Stable = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
        lot_no: "",
        medicine_name: "",
        brand: "",
        quantity: "",
        expiry_date: "",
        supplier_name: "",
  });

  const [editFormData, setEditFormData] = useState({
        lot_no: "",
        medicine_name: "",
        brand: "",
        quantity: "",
        expiry_date: "",
        supplier_name: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      lot_no: addFormData.lot_no,
      medicine_name: addFormData.medicine_name,
      brand: addFormData.brand,
      quantity: addFormData.quantity,
      expiry_date: addFormData.expiry_date,
      supplier_name: addFormData.supplier_name,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      lot_no: editFormData.lot_no,
      medicine_name: editFormData.medicine_name,
      brand: editFormData.brand,
      quantity: editFormData.quantity,
      expiry_date: editFormData.expiry_date,
      supplier_name: editFormData.supplier_name,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
        lot_no: contact.lot_no,
        medicine_name: contact.medicine_name,
        brand: contact.brand,
        quantity: contact.quantity,
        expiry_date: contact.expiry_date,
        supplier_name: contact.supplier_name,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div>
        
      <form onSubmit={handleAddFormSubmit}>
        <input
          type="text"
          name="lot_no"
          required="required"
          placeholder="Enter lot no..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="medicine_name"
          required="required"
          placeholder="Enter medicine name..."
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="brand"
          required="required"
          placeholder="Enter brand name"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="quantity"
          required="required"
          placeholder="Enter quantity"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="expiry_date"
          required="required"
          placeholder="Enter expiry date"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="Supplier_name"
          required="required"
          placeholder="Enter supplier name"
          onChange={handleAddFormChange}
        />
        
        
        <Button type="submit" variant="primary">Add medicine</Button>{' '}
            
      </form>

     

      <form onSubmit={handleEditFormSubmit}>
        <Table striped bordered hover>
          <thead>
            <tr>
            <th>Lot No</th>
                <th>Medicine name</th>
                <th>Brand</th>
                <th>Quantity</th>
                <th>Expiry Date</th>
                <th>Supplier Name</th>
                <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </Table>
      </form>

      
    </div>
  );
};

export default Stable;
