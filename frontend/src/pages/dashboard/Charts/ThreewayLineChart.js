import React from 'react';
import { LineChart ,Line, CartesianGrid, YAxis,XAxis,Legend,Tooltip} from 'recharts';
import  { useEffect, useState } from "react";
import axios from "axios";

//update this to include order count changes 
// 1->Order Amount
// 2->Success full order
//3->cancled orders

function ThreewayLineChart() {
  const[ordercount,setOrdercount] = useState('0');
  const[sucessfullcount,setSuccesfulOrdercount] = useState('0');
  const[canclecount,setCancleOrdercount] = useState('0');

  useEffect(()=>{
    const fetchCount=async()=>{
      const userRes=await axios.get(
        "http://localhost:4000/getOrdercountVal"
      );
      setOrdercount(userRes.data.data);

    };
    fetchCount();
  },[]);

    
  useEffect(()=>{
    const fetchCount=async()=>{
      const userRes=await axios.get(
        "http://localhost:4000/getsuccessOrdercountVal"
      );
      setSuccesfulOrdercount(userRes.data.data);

    };
    fetchCount();
  },[]);

  useEffect(()=>{
    const fetchCount=async()=>{
      const userRes=await axios.get(
        "http://localhost:4000/getcancledOrdercountVal"
      );
      setCancleOrdercount(userRes.data.data);

    };
    fetchCount();
  },[]);


  const data = [
               
                {
                  id: 1,
                  month:'Jan',
                  ordersAmount: 5,
                  successOrdersAmount: 3,
                  cancledOrders: 2,
                  
                },
                {
                  id: 2,
                  month:'Feb',
                  ordersAmount: 10,
                  successOrdersAmount: 7,
                  cancledOrders: 3,
                  
                },
                {
                  id: 3,
                  month:'March',
                  ordersAmount: 15,
                  successOrdersAmount: 10,
                  cancledOrders: 5,
                  
                },

                {
                  id:4,
                  month:'April',
                  ordersAmount: ordercount,
                  successOrdersAmount: sucessfullcount,
                  cancledOrders: canclecount,
                  
                },
              ];
  return (
    <LineChart width ={600} height={300} data={data}  >
        <Line type="monotone" dataKey="ordersAmount" stroke="#2196F3" strokeWidth={3}/>
        <Line type="monotone" dataKey="successOrdersAmount" stroke="#F44236" strokeWidth={3}/>
        <Line type="monotone" dataKey="cancledOrders" stroke="#FFCA29" strokeWidth={3}/>
        <CartesianGrid stroke="#ccc"/>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip/>
        <Legend/>

    </LineChart>
  )
};

export default ThreewayLineChart

