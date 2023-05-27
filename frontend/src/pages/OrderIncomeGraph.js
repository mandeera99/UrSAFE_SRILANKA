import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Card } from 'react-bootstrap';
import axios from 'axios';
import { useAuthContext } from '../hooks/useAuthContext';

const OrderIncomeGraph = () => {
  const { user } = useAuthContext();
  const [monthlyIncome, setMonthlyIncome] = useState([]);

  useEffect(() => {
    const fetchMonthlyIncome = async () => {
      try {
        if (user && user.id) { // Add a null check before accessing user.id
          const response = await axios.get(`/api/ordanalysis/getMonthlyIncome/${user.id}`);
          setMonthlyIncome(response.data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchMonthlyIncome();
  }, [user]);

  const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const labels = monthlyIncome.map((data) => monthNames[data.month] || monthNames[data._id]); // Use monthNames array to map month names
  const data = monthlyIncome.map((data) => data.totalCost);

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Monthly Income',
        data,
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 0.4)',
        borderColor: 'rgba(75, 192, 192, 1)',
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Months',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Monthly Income',
        },
      },
    },
  };

  return (
    <Card style={{ display: 'flex', justifyContent: 'center'}}>
      <Card.Body>
        <Card.Title>Pharmacy's Order Income Monthly</Card.Title>
        <div style={{ height: '300px', width: '500px',  marginLeft: 'auto',
            marginRight: 'auto', }}>
          <Line data={chartData} options={options} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default OrderIncomeGraph;