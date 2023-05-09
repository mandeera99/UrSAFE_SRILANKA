import React ,{useEffect,useState}from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from 'axios';
function MostSearchinLine() {

    const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    const fetchCount = async () => {
        const mediRes = await axios.get('http://localhost:4000/getmostsearchmedi');
        setMedicines(mediRes.data);
    };
      
    fetchCount();
  }, []);

  const data = medicines.map((med) => ({
    name: med._id,
    countValue: med.countValue,
  }));
  

    
  

  return (
    <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="countValue" stroke="#8884d8" activeDot={{ r: 8 }} />
         
        </LineChart>
  )
}

export default MostSearchinLine
