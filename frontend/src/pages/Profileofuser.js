import React from "react";
import { useEffect, useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import Header from './Header';
import "../css/profile.css";
import { useLogout } from '../hooks/useLogout'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
function Profileofuser() {
    const { email } = useParams();
    const [user, setUser] = useState(null);
    //console.log(email)
    useEffect(() => {

        // fetch the details of the customer
        fetch(`/api/profileofuser/${email}`)
            .then((response) => response.json())
            .then((data) => setUser(data));


    }, [email]);
    const handleGoHome = () => {
        window.location.href = '/';
      };
      const { logout } = useLogout()
      const deleteUserByEmail = async (email) => {
        try {
          const response = await fetch(`/api/profileofuser/${email}`, {
            method: 'DELETE'
          });
          const data = await response.json();
          console.log(data.message);
          localStorage.removeItem('user');
          window.location.href = '/';
        } catch (error) {
          console.error(error);
        }
      };
      
      const handleDeleteUser = (event) => {
        const email = event.target.getAttribute('email');
        alert('Thankyou for using our system .Your Account has been deleted!!!');
        console.log(email)
        deleteUserByEmail(email);
          
      
      };
    return (
        <Fragment>
            <div>
                {user ? (
                    <div>
                        <div className="container">
                            <h2 className="text-center" style={{ color: 'white' }}>{user.name}'s Profile</h2>
                        </div>
                        <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button" onClick={handleGoHome}>Go To Home</button></div>

                        <div class="container rounded bg-white mt-5 mb-5">
                            <div class="row">
                                <div class="col-md-3 border-right">
                                    <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" /><span class="font-weight-bold">{user.name}</span><span class="text-black-50">{user.email}</span><span> </span></div>
                                </div>
                                <div class="col-md-5 border-right">
                                    <div class="p-3 py-5">
                                        <div class="d-flex justify-content-between align-items-center mb-3">
                                            <h4 class="text-right">Profile Settings</h4>
                                        </div>
                                        <div class="row mt-2">
                                            <div class="col-md-6"><label class="labels">Name</label><input type="text" class="form-control" placeholder={user.name} value={user.name} /></div>
                                            <div class="col-md-6"><label class="labels">Surname</label><input type="text" class="form-control" value={user.name} placeholder="surname" /></div>
                                        </div>
                                        <div class="row mt-3">
                                            <div class="col-md-12"><label class="labels">Mobile Number</label><input type="text" class="form-control" placeholder="enter phone number" value={user.phoneNumber} /></div>
                                            <div class="col-md-12"><label class="labels">Address Line 1</label><input type="text" class="form-control" placeholder="enter address line 1" value={user.address} /></div>
                                            <div class="col-md-12"><label class="labels">Address Line 2</label><input type="text" class="form-control" placeholder="enter address line 2" value={user.address} /></div>
                                            <div class="col-md-12"><label class="labels">zipcode</label><input type="text" class="form-control" placeholder={user.zipCode} value={user.zipCode} /></div>
                                            <div class="col-md-12"><label class="labels">State</label><input type="text" class="form-control" placeholder={user.state} value={user.state} /></div>
                                            <div class="col-md-12"><label class="labels">City</label><input type="text" class="form-control" placeholder={user.city} value={user.city} /></div>
                                            <div class="col-md-12"><label class="labels">Email</label><input type="text" class="form-control" placeholder={user.email} value={user.email} /></div>
                                        </div>
                                        <div class="row mt-3">
                                            <div class="col-md-6"><label class="labels">Country</label><input type="text" class="form-control" placeholder="country" value="SriLanka" /></div>
                                        </div>
                                        <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button" email={user.email} onClick={handleDeleteUser}>Delete Account</button></div>
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
export default Profileofuser;