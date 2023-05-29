import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

function OrderDetailsBarchart() {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    const fetchCount = async () => {
        const mediRes = await axios.get('http://localhost:4000/getorderCountbymediname');
        setMedicines(mediRes.data);
    };
      
    fetchCount();
  }, []);

  const data = {
    labels: medicines.map(med => med.medicine_name),
    datasets: [
      {
        label: 'Medicine Count',
        data: medicines.map(med => med.countValue),
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

  return <Bar data={data} />;
}

export default OrderDetailsBarchart;
