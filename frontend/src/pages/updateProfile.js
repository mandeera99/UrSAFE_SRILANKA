import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import "../css/profile.css";
import { Link } from 'react-router-dom';


function UpdateProfile() {
  const { id } = useParams();
  // const history = useHistory();
  const [user, setUser] = useState(null);
  const [updatedUser, setUpdatedUser] = useState({
    pharmacyName: "",
    name: "",
    // email: "",
    phoneNumber: "",
    address: "",
    state: "",
    city: ""
  });

  // const [editUserId, setEditUserId] = useState(null);
  

  useEffect(() => {
    // Fetch the details of the pharmacy
    fetch(`/api/userediting/profileofuser/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [id]);

  const handleInputChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
  
    setUpdatedUser((prevUser) => ({
      ...prevUser,
      [fieldName]: fieldValue !== "" ? fieldValue : user[fieldName]
    }));
  };
  
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const updatedData = {
      pharmacyName: updatedUser.pharmacyName || user.pharmacyName,
      name: updatedUser.name || user.name,
      phoneNumber: updatedUser.phoneNumber || user.phoneNumber,
      address: updatedUser.address || user.address,
      state: updatedUser.state || user.state,
      city: updatedUser.city || user.city
    };
  
    fetch(`/api/userediting/editinguser/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedData)
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
      //     // Redirect to the profile page after successful update
      //     history.push(`/profile/${id}`);
    
         } else {
         // Handle the error case
          console.log(data.error);
         }
       })
      .catch((error) => {
        console.log(error);
      });
  };

 

  return (
    <div>
      {user ? (
        <div>
          <div className="container">
            <h2 className="text-center" style={{ color: 'black' }}>Edit Profile</h2>
          </div>
          <div className="container rounded bg-white mt-5 mb-5">
            <div className="row">
              <div className="col-md-12">
                <div className="p-3 py-5">
                  <form onSubmit={handleSubmit}>
                    <div className="row mt-1">
                      <div className="col-md-6">
                        <label className="labels">Pharmacy Name</label>
                        <input
                          type="text"
                          name="pharmacyName"
                          className="form-control"
                          // placeholder={user.pharmacyName}
                          value={updatedUser.pharmacyName !== "" ? updatedUser.pharmacyName : (user && user.pharmacyName)}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-md-6">
                        <label className="labels">Name</label>
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          // placeholder={user.name}
                          value={updatedUser.name  !== ""? updatedUser.name : (user && user.name)}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-12">
                        <label className="labels">Email</label>
                        <input
                          type="text"
                          // name="email"
                          className="form-control"
                          // placeholder={user.email}
                          value={user.email}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="row mt-4">
                      <div className="col-md-12">
                        <label className="labels">Phone Number</label>
                        <input
                          type="text"
                          name="phoneNumber"
                          className="form-control"
                          // placeholder={user.phoneNumber}
                          value={updatedUser.phoneNumber !== ""? updatedUser.phoneNumber : (user && user.phoneNumber)}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="row mt-5">
                      <div className="col-md-12">
                        <label className="labels">Address</label>
                        <input
                          type="text"
                          name="address"
                          className="form-control"
                          // placeholder={user.address}
                          value={updatedUser.address !== ""? updatedUser.address : (user && user.address)}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="row mt-6">
                      <div className="col-md-12">
                        <label className="labels">Province</label>
                        <input
                          type="text"
                          name="state"
                          className="form-control"
                          // placeholder={user.state}
                          value={updatedUser.state !== ""? updatedUser.state : (user && user.state)}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-12">
                        <label className="labels">City</label>
                        <input
                          type="text"
                          name="city"
                          className="form-control"
                          // placeholder={user.city}
                          value={updatedUser.city !== ""? updatedUser.city : (user && user.city)}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div>
                    <Button variant="primary" type="submit">Save</Button>{' '}
                    
                    <Link to={`/Profile/${user.email}`}>

                    <Button variant="primary" >Back</Button>{' '}
                    </Link>
                    </div>
              </form>
              </div>
              </div>
              </div>
              </div>
              </div>
     ) : (
      <p>Loading...</p>
    )}
</div>
  );
}


export default UpdateProfile;