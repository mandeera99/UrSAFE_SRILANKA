import React, { useEffect, useState, Fragment } from "react";
import "../App.css";
import ReadOnlyRow from "../components/ReadOnlyRow"
import EditableRow from "../components/EditableRow"
import StoremedForm from "../components/StoremedForm";
import Table from 'react-bootstrap/Table';
import { useStoremedsContext } from '../hooks/useStoremedsContext'
import { useAuthContext } from '../hooks/useAuthContext'
const Stable = () => {
  const {user} = useAuthContext();
  const { storemeds, dispatch } = useStoremedsContext()



  //display all connecting backened to front
  useEffect(() => {
    const fetchStoremeds = async () => {
      const response = await fetch(`/api/storemeds/${user?.id}`)
      const json = await response.json()

      if (response.ok) {
        dispatch({ type: 'SET_STOREMEDS', payload: json })
      }
    }
    fetchStoremeds()
  }, [dispatch,user])

  //Add medicine connecting backend to frontend


  const [editFormData, setEditFormData] = useState({
    lot_no: Number,
    medicine_name: "",
    brand: "",
    quantity: Number,
    expiry_date: Date,
    supplier_name: "",
    price: Number,
  });

  const [editStoremedId, setEditStoremedId] = useState(null);



  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };




  const handleEditFormSubmit = async (event) => {
    event.preventDefault();

    const editedStoremed = {
      _id: editStoremedId,
      lot_no: editFormData.lot_no,
      medicine_name: editFormData.medicine_name,
      brand: editFormData.brand,
      quantity: editFormData.quantity,
      expiry_date: editFormData.expiry_date,
      supplier_name: editFormData.supplier_name,
      price: editFormData.price,
    };

    const response = await fetch(`/api/storemeds/${editStoremedId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editedStoremed),
    });
    const json = await response.json()
    if (response.ok) {


      dispatch({ type: 'UPDATE_STOREMED', payload: json })
    }
  };



  const handleEditClick = (event, storemed) => {
    event.preventDefault();
    setEditStoremedId(storemed._id);

    const formValues = {
      lot_no: storemed.lot_no,
      medicine_name: storemed.medicine_name,
      brand: storemed.brand,
      quantity: storemed.quantity,
      expiry_date: storemed.expiry_date,
      supplier_name: storemed.supplier_name,
      price: storemed.price,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditStoremedId(null);
  };

  return (

    <div>
      <StoremedForm />

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
              <th>Price per tablet(Rs.)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {storemeds?.map((storemed) => (

              <Fragment>


                {editStoremedId === storemed?._id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                    key={storemed?._id}
                    handleEditFormSubmit={handleEditFormSubmit}
                  />
                ) : (

                  <ReadOnlyRow
                    storemed={storemed}
                    handleEditClick={handleEditClick}
                    key={storemed?._id}

                  />

                )

                }
              </Fragment>
            ))}
          </tbody>
        </Table>
      </form>
    </div>
  )
}

export default Stable