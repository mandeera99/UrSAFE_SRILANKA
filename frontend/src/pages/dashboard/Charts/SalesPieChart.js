import React, { useEffect, useState } from 'react';
import { Pie } from "react-chartjs-2";
import {Chart as ChartJS} from 'chart.js/auto'
import axios from 'axios';
import { inputLabelClasses } from '@mui/material';



function SalesPieChart() {
  const [yearval, setYear] = useState([]);
  const [countValue,setCountValue] = useState([]);





  useEffect(() => {
    const year =[];
    const value=[];

    const fetchCount = async () => {
      const dataReq = await fetch("http://localhost:4000/getorderamountbyyear");
      const dataRes = await dataReq.json();
      console.log(dataRes);

      for(let i=0; i<dataRes.length; i++){
        year.push(dataRes[i].year);
        value.push(dataRes[i].countValue);

    }

      setYear(year);
      setCountValue(value);

    };
    fetchCount();
  }, []);


  
  const data = {
    labels: yearval,
    datasets: [
      {
        label: 'Annual Income',
        data:   countValue,
        backgroundColor: [
          '#F5B7B1',
          '#F9E79F',
          '#AED6F1',
          '#D7BDE2',
          '#FADBD8',
        ],
        borderColor: 'black',
        borderWidth:2,
        

      },
    ],
  };
  const options ={
    width:500,
    height:350,
  };



  return (
    <Pie
      data={data}
       style={{ width: '300px', height: '350px' }} // Set the width and height here
    />
  );
}

export default SalesPieChart


