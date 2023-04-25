import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

function MostsearchedMedicine() {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    const fetchCount = async () => {
        const mediRes = await axios.get('http://localhost:4000/getvarityuseramount');
        setMedicines(mediRes.data);
    };
      
    fetchCount();
  }, []);

  const data = {
    labels: medicines.map(med => med._id),
    datasets: [
      {
        label: 'Medicine Count',
        data: medicines.map(med => med.countValue),
        backgroundColor: [
          'rgba(75,192,192,1)',
          '#ecf0f1',
          '#50AF95',
          '#f3ba2f',
          '#2a71d0',
        ],
        borderColor: 'black',
        borderWidth: 2,
      },
    ],
  };

  return <Line data={data} />;
}

export default MostsearchedMedicine;
