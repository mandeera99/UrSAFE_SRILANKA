import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

function UserLostBarChart() {
  const [usercount, setUserCount] = useState(0);

  useEffect(() => {
    const fetchCount = async () => {
      const userRes = await axios.get('http://localhost:4000/getusercount');
      setUserCount(userRes.data.data);
    };
    fetchCount();
  }, []);

  const data = {
    labels: [2016, 2017, 2018, 2019, 2020],
    datasets: [
      {
        label: 'Users Gained',
        data: [0, 45670, 73240, 67400, 89000].map((count, index) =>
          index === 0 ? usercount : count
        ),
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

  return <Bar data={data} />;
}

export default UserLostBarChart;
