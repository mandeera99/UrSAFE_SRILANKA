import React from "react";
import { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import "../css/profile.css";
import storeimg from "../Images/storeimg.jpg";
import Button from 'react-bootstrap/Button';

import { Link } from 'react-router-dom';
import UpdateProfile from "./updateProfile";



function Profile() {
  const { email } = useParams();
  const [user, setUser] = useState(null);
  // const {users, dispatch} = useUsersContext()

  useEffect(() => {

    // fetch the details of the customer
    fetch(`/api/profileofuser/${email}`)
      .then((response) => response.json())
      .then((data) => setUser(data));


  }, [email]);




  return (
    <Fragment>
      <div>
        
        {user ? (
          <div>

            <div className="container">

              <b>  <h2 className="text-center" style={{ color: 'black' }}>{user.pharmacyName}'s Profile</h2></b>
            </div>


            <div className="container rounded bg-white mt-5 mb-5">
              <div className="row">
                <div className="col-md-3 border-right">
                  <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" height="150px" src={storeimg} /><span class="font-weight-bold">{user.pharmacyName}</span><span class="text-black-50">{user.email}</span><span> </span></div>
                </div>
                <div className="col-md-5 border-right">
                  <div className="p-3 py-5">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h4 className="text-right">Profile Settings</h4>
                    </div>
                    <div className="row mt-1">
                    <div className="col-md-6"><label class="labels">Pharmacy Name</label><input type="text" class="form-control" placeholder={user.pharmacyName} value={user.pharmacyName} /></div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-md-6"><label className="labels">Name</label><input type="text" class="form-control" placeholder={user.name} value={user.name} /></div>
                    </div>
                    <div className="row mt-3">
                      <div className="col-md-12"><label className="labels">Email</label><input type="text" class="form-control" placeholder={user.email} value={user.email} /></div>
                      <div className="col-md-12"><label className="labels">Mobile Number</label><input type="text" class="form-control" placeholder="enter phone number" value={user.phoneNumber} /></div>
                      <div className="col-md-12"><label className="labels">Address</label><input type="text" class="form-control" placeholder="enter address line 1" value={user.address} /></div>
                      {/* <div className="col-md-12"><label className="labels">Address Line 2</label><input type="text" class="form-control" placeholder="enter address line 2" value={user.address} /></div> */}
                      <div className="col-md-12"><label className="labels">Province</label><input type="text" class="form-control" placeholder={user.state} value={user.state} /></div>
                      <div className="col-md-12"><label className="labels">City</label><input type="text" class="form-control" placeholder={user.city} value={user.city} /></div>

                    </div>

                    <div>
                      <p>&ensp;&ensp;</p>
                      <Link to={`/updateProfile/${user._id}`}>

                      <Button variant="primary" >Edit</Button>{' '}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        ) : (
          <p>Loading...</p>
        )}


      </div>
    </Fragment >



  );

}
export default Profile;