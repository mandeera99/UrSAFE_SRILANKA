import React from 'react';
import { useEffect,useState } from 'react';
import { BarChart ,Bar, CartesianGrid, YAxis,XAxis,Legend,Tooltip} from 'recharts';
import axios from 'axios';



function TwowayBarChart() {
  const[usercount,setUsercount] = useState('0');
  const[pharmacycount,setPharmacycount] = useState('0');
  const[medicount,setMedicount] = useState('0');

  useEffect(()=>{
    const fetchCount=async()=>{
      const userRes=await axios.get(
        "http://localhost:4000/getusercount"
      );
      setUsercount(userRes.data.data);


      const phrRes=await axios.get(
        "http://localhost:4000/getmedicinecount"
      );
      setPharmacycount(phrRes.data.data);



      
        const mediRes=await axios.get(
          "http://localhost:4000/getstoremedicount"
        );
        setMedicount(mediRes.data.data);



    };
    fetchCount();
  },[]);

  const data = [
    {
      id: 1,
      year: 2016,
      userGain: 80000,
      userLost: 823,
      income: 12000,
      ordersAmount: usercount,
      orders: [],
      successOrdersAmount: 3000,
      cancledOrders: 400,
      badcomments: 12,
      userAmount:usercount,
      PharmacyAmount: pharmacycount,
    },
    {
      id: 2,
      year: 2017,
      userGain: 45670,
      userLost: 500,
      income: 32000,
      ordersAmount: 8800,
      orders: [],
      successOrdersAmount: 8500,
      cancledOrders: 300,
      badcomments: 18,
      userAmount: 450,
      PharmacyAmount: 20,
    },
    {
      id: 3,
      year: 2018,
      userGain: 73240,
      userLost: 623,
      income: 22000,
      ordersAmount: 1550,
      orders: [],
      successOrdersAmount: 1545,
      cancledOrders: 5,
      badcomments: 7,
      userAmount: 540,
      PharmacyAmount: 55,
    },
    {
      id: 4,
      year: 2019,
      userGain: 67400,
      userLost: 900,
      income: 17000,
      ordersAmount: 6800,
      orders: [],
      successOrdersAmount: 6200,
      cancledOrders: 600,
      badcomments: 10,
      userAmount: 40,
      PharmacyAmount: 100,
    },
    {
      id: 5,
      year: 2020,
      userGain: 89000,
      userLost: 223,
      income: 45000,
      ordersAmount: 9800,
      orders: [],
      successOrdersAmount: 9500,
      cancledOrders: 300,
      badcomments: 12,
      userAmount: 50,
      PharmacyAmount: 210,
    },
  ];

  
  return (
    
    <BarChart width={730} height={250} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="year" />
  <YAxis />
  <Tooltip />
  <Legend />

  

 
      <Bar dataKey="UserAmount" fill="#0072B2 " />
   
  
          <Bar dataKey="PharmacyAmount" fill="#009E73" />
        
  
</BarChart>
  )
};

export default TwowayBarChart