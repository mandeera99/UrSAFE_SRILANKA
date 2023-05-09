import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

function OrdersBar() {
  const [ordercount, setOrdercount] = useState(0);
  const [sucessfullcount, setSuccesfulOrdercount] = useState(0);
  const [canclecount, setCancleOrdercount] = useState(0);

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

  const data = {
    labels: ['Full Orders', 'Successful Orders', 'Cancelled Orders'],
    datasets: [
      {
        label: 'Order Count',
        data: [ordercount, sucessfullcount, canclecount],
        backgroundColor: [
          '#FFCC99',
          '#FFFDD0',
          '#AEECEF',
          '#FFB6C1',
          '#E6E6FA',
        ],
        borderColor: 'black',
        borderWidth: 2,
      },
    ],
  };

  return <Bar data={data} style={{ width: '500px', height: '500px' }} />;

}

export default OrdersBar;
