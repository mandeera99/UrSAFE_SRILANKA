import React, { useEffect, useState } from 'react';
import ReviewsBar from './ReviewsBar';
import axios from "axios";



function Review (props){

  const[customercount,setCustomercount] = useState(0);
  const[pharmacycount,setPharmacycount] = useState(0);
  const[admincount,setAdmincount] = useState(0);
  const[allusercount,setallUsercount]=useState(0);

  const [sSubject, setSSubject] = useState([]);
  const [sMarks, setSMarks] = useState([]);

  const [customerpracentage, setCustomerpracentage] = useState(0);
  const [pharmacypracentage, setPharmacypracentage] = useState(0);
  const [adminpracentage, setAdminpracentage] = useState(0);
  



    useEffect(()=>{

      


        const fetchCount=async()=>{

         
            const userRess=await axios.get(
              "http://localhost:4000/getusercount"
            );
            setallUsercount(userRess.data.data);

          const userRes=await axios.get(
            "http://localhost:4000/getCustomercountVal"
          );
          setCustomercount(userRes.data.data);
    
    
          const phrRes=await axios.get(
            "http://localhost:4000/getPharmacycountVal"
          );
          setPharmacycount(phrRes.data.data);
    
    
    
          
            const mediRes=await axios.get(
              "http://localhost:4000/getAdmincountVal"
            );
            setAdmincount(mediRes.data.data);
                
            
    
        };
        fetchCount();
      },[]);
      
      useEffect(() => {
        setCustomerpracentage((customercount / allusercount) * 100);
        setPharmacypracentage((pharmacycount / allusercount) * 100);
        setAdminpracentage((admincount / allusercount) * 100);
      }, [customercount, pharmacycount, admincount, allusercount]);
    

  //     useEffect(() => {
  //   setSSubject(["Customers", "Pharmacy","Admin"]);
  //   setSMarks([usercount, pharmacycount,medicount]);
  // }, [usercount, pharmacycount,medicount]);

    const lang = props.lang;
  //   const [reviewScore, setReviewScore] = useState(50);
  //   const [reviewScore1, setReviewScore1] = useState(30);
  //   const [reviewScore2, setReviewScore2] = useState(90);

  

  return (
    <div>
        <h3>Reviews</h3>
        <div className='row mt-3'>
  <div className='col-md-4 d-flex align-items-center'>
    <ReviewsBar score={customerpracentage} />
    <span className='ml-3'>of Customers love working with {lang}.</span>
  </div>
  <div className='col-md-4 d-flex align-items-center'>
    <ReviewsBar score={pharmacypracentage} />
    <span className='ml-3'>of Pharmacists love working with {lang}.</span>
  </div>
  <div className='col-md-4 d-flex align-items-center'>
    <ReviewsBar score={adminpracentage} />
    <span className='ml-3'>of Administrators love working with {lang}.</span>
  </div>
</div>
      
    </div>
  );
};

export default Review;
