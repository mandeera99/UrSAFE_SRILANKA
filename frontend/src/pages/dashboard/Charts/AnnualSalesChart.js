import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

function AnnualSalesChart() {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const mediRes = await axios.get('http://localhost:4000/getorderamountbyyear');
        setMedicines(mediRes.data);
      } catch (error) {
        console.error(error);
      }
    };
      
    fetchCount();
  }, []);

  let labels = [];
  let dataValues = [];

  if (Array.isArray(medicines)) {
    labels = medicines.map((medicine) => medicine._id);
    dataValues = medicines.map((medicine) => medicine.countValue);
  }
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Medicine Count',
        data: dataValues,
        backgroundColor: [
          '#92A8D1',
          '#A7D7C5',
          '#FFB347',
          '#B39CD0',
          '#A9E5BB',
        ],
        borderColor: 'black',
        borderWidth: 2,
      },
    ],
  };

  return <Bar data={data} />;
}

export default AnnualSalesChart;