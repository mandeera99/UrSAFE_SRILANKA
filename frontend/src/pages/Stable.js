import React, { useEffect,useState, Fragment} from "react";

import "../App.css";

//import ReadOnlyRow from "../Components/ReadOnlyRow";
import ReadOnlyRow from "../components/ReadOnlyRow"
//import EditableRow from "../Components/EditableRow";
import EditableRow from "../components/EditableRow"
//import StoremedForm from "../Components/StoremedForm";
import StoremedForm from "../components/StoremedForm";
import Table from 'react-bootstrap/Table';

import { useStoremedsContext } from '../hooks/useStoremedsContext'

const Stable = () => {

const {storemeds, dispatch} = useStoremedsContext()
// const [setStoremeds ] = useState(null)


//display all connecting backened to front
      useEffect(() => {
        const fetchStoremeds = async () =>{
          const response = await fetch('/api/storemeds')
          const json = await response.json()
    
          if (response.ok){
            dispatch({type:'SET_STOREMEDS', payload: json})
          }
        }
        fetchStoremeds()
      }, [dispatch])

      //Add medicine connecting backend to frontend
    

  const [editFormData, setEditFormData] = useState({
        lot_no: Number,
        medicine_name: "",
        brand: "",
        quantity: Number,
        expiry_date: Date,
        supplier_name: "",
  });

  const [editStoremedId, setEditStoremedId] = useState(null);

  

  const handleEditFormChange = (event) => {
    // setEditFormData({
    //   ...editFormData,
    //   [event.target.name]:event.target.value
    // });
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
    };

    // const newStoremeds = [...storemeds];

    // const index = storemeds.findIndex((storemed) => storemed.id === editStoremedId);

    // newStoremeds[index] = editedStoremed;

    // setStoremeds(newStoremeds);
    // setEditStoremedId(null);

    const response = await fetch(`/api/storemeds/${editStoremedId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editedStoremed),
    });
    const json = await response.json()
    if (response.ok) {
      // const updatedStoremed = await response.json();
      
      dispatch({type: 'UPDATE_STOREMED', payload:json})
      // const newStoremeds = storemeds.map((storemed) =>
      //   storemed._id === updatedStoremed._id ? updatedStoremed : storemed
      // );
      // setStoremeds(newStoremeds);
      // setEditStoremedId(null);
     
    }

    // if (response.ok){
    //   dispatch({type: 'DELETE_STOREMED', payload:json})
    // }
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
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditStoremedId(null);
  };

  // const handleDeleteClick = (storemedId) => {
  //   const newStoremeds = [...storemeds];

  //   const index = storemeds.findIndex((storemed) => storemed.id === storemedId);

  //   newStoremeds.splice(index, 1);

  //   setStoremeds(newStoremeds);
  // };




  return (
    
    <div>
      <StoremedForm />
      {/*  action="/api/meds" method="POST" id="add_med" */}
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
                    // handleDeleteClick={handleDeleteClick}
                    key={storemed?._id}
                   
                  />
                  
                )
               
              }

                {/* // <p key = {storemed._id}>{storemed.lot_no}</p> */}
         
            </Fragment>
             
            ))} 
          {/* <div>
            {storemeds && storemeds.map(storemed => (
              <ReadOnlyRow storemed={storemed} key={storemed._id} />
            ))}
          </div> */}

          </tbody>
        
        </Table>
      </form>
      

      
      
    </div>
  )
}

export default Stable