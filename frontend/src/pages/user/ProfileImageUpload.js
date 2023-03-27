import React, { useState } from 'react';
import './ProfileImageUpload.css';
const Img1 = "/images/BackgroundImages/side_1.jpg";

function ProfileImageUpload() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
    <i className="chat-btn2 close"></i>

  };
  // const handleImageChange2 = (e) => {
  //   <input type="file" accept="image/*" onChange={handleImageChange} />
  // };
  

  return (
    <div >
        
      <div className='container'>
       <img src={Img1} alt="" onClick={<input type="file" accept="image/*" onChange={handleImageChange} />}></img> 
      <input type="checkbox" id="check" />
      <div className="chat-btn2 " htmlFor="check" >
        <i className="bi bi-person-circle comment"></i>
        <input className="comment" type="file" accept="image/*" onChange={handleImageChange} />
    </div>
    {selectedImage && (
        <div className="profile-image-container">
          <img  src={URL.createObjectURL(selectedImage)} alt="Profile" />
        </div>
      )}
      </div>
    </div>
  );
}

export default ProfileImageUpload;
