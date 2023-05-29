import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, Line, CartesianGrid, YAxis, XAxis, Legend, Tooltip } from 'recharts';

function ThreewayLineChart() {
  const [orderCount, setOrderCount] = useState([]);
  const [successfulCount, setSuccessfulCount] = useState([]);
  const [cancelCount, setCancelCount] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOrderCount = async () => {
      try {
        const response = await axios.get('http://localhost:4000/getOrdercountValbymonth');
        setOrderCount(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSuccessfulCount = async () => {
      try {
        const response = await axios.get('http://localhost:4000/getsuccessOrdercountValbymonth');
        setSuccessfulCount(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchCancelCount = async () => {
      try {
        const response = await axios.get('http://localhost:4000/getcancleOrdercountValbymonth');
        setCancelCount(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchData = async () => {
      setIsLoading(true);
      await Promise.all([fetchOrderCount(), fetchSuccessfulCount(), fetchCancelCount()]);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Combine the data from the three endpoints
  const combinedData = orderCount.map((order, index) => {
    const successOrder = successfulCount[index];
    const cancelOrder = cancelCount.find((cancel) => cancel._id.month === order._id.month);
    return {
      id: index + 1,
      month: order._id.month,
      
      ordersAmount: order.count,
      successOrdersAmount: successOrder ? successOrder.count : 0,
      cancledOrders: cancelOrder ? cancelOrder.count : 0,
    };
  });

  return (
    <LineChart width={600} height={300} data={combinedData}>
      <Line type="monotone" dataKey="ordersAmount" stroke="#2196F3" strokeWidth={3} />
      <Line type="monotone" dataKey="successOrdersAmount" stroke="#F44236" strokeWidth={3} />
      <Line type="monotone" dataKey="cancledOrders" stroke="#FFCA29" strokeWidth={3} />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend />
    </LineChart>
  );
}

export default ThreewayLineChart;
