import React,{useEffect,useState} from "react";
import "./Skillbar.css";
import axios from 'axios';

function ProgressBar() {
  const [ordercount, setOrdercount] = useState(0);
  const [sucessfullcount, setSuccesfulOrdercount] = useState(0);
  const [canclecount, setCancleOrdercount] = useState(0);
  const [searchcount,setSearchCount]=useState(0);

  const [ordercountpracentage, setOrdercountpracentage] = useState(0);
  const [sucessfullcountpracentage, setSuccesfulOrdercountpracentage] = useState(0);
  const [canclecountpracentage, setCancleOrdercountpracentage] = useState(0);
  const [searchcountpracentage,setSearchCountpracentage]=useState(0);
  




   useEffect(() => {

    const fetchCount = async () => {
      const userRes = await axios.get(
        "http://localhost:4000/getSearchcountVal"
      );
      setSearchCount(userRes.data.data);
    };
    fetchCount();
  }, []);


  useEffect(() => {

    const fetchCount = async () => {
      const userRes = await axios.get(
        "http://localhost:4000/getOrdercountVal"
      );
      setOrdercount(userRes.data.data);
    };
    fetchCount();
  }, []);

  useEffect(() => {
    const fetchCount = async () => {
      const userRes = await axios.get(
        "http://localhost:4000/getsuccessOrdercountVal"
      );
      setSuccesfulOrdercount(userRes.data.data);
    };
    fetchCount();
  }, []);

  useEffect(() => {
    const fetchCount = async () => {
      const userRes = await axios.get(
        "http://localhost:4000/getcancledOrdercountVal"
      );
      setCancleOrdercount(userRes.data.data);
    };
    fetchCount();
  }, []);

  useEffect(() => {
    setOrdercountpracentage((ordercount / searchcount) * 100);
    setSuccesfulOrdercountpracentage((sucessfullcount / ordercount) * 100);
    setCancleOrdercountpracentage((canclecount / ordercount) * 100);
  }, [ordercount, sucessfullcount, canclecount, searchcount]);

  return (
    
    
    <div className="containerr">
<div className="skills" style={{ padding: '60px' }}>

          <h2>Searched Products Amount</h2>
        <div className="progress-bar">
          <div className="python" style={{animation: `html 10s linear forwards`, width: `${searchcount}`,transition: 'width 1s ease-in-out' }}><span>{searchcount}</span></div>
        </div> 
        <h2>Placed Order Amount</h2>
        <div className="progress-bar">
          <div className="html" style={{animation: `html 10s linear forwards`, width: `${ordercountpracentage}%`,transition: 'width 1s ease-in-out' }}><span>{ordercountpracentage+'%'}</span></div>
        </div>
        <h2>Succesfully Completed orders</h2>
        <div className="progress-bar">
          <div className="css" style={{animation: `html 10s linear forwards`, width: `${sucessfullcountpracentage}%`,transition: 'width 1s ease-in-out' }}><span>{sucessfullcountpracentage+'%'}</span></div>
        </div>
        <h2>Cancled Orders </h2>
        <div className="progress-bar">
          <div className="javaScript"  style={{animation: `html 10s linear forwards`, width: `${canclecountpracentage}%`,transition: 'width 1s ease-in-out' }}><span>{canclecountpracentage+'%'}</span></div>
        </div>
       
        
      </div>
    </div>
  );
}

export default ProgressBar;
