import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import './Report.css';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
    marginBottom: 5,
  },
});

const Report = () => {
    const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    const fetchCount = async () => {
        const mediRes = await axios.get('http://localhost:4000/getmostsearchmedi');
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

  const[customercount,setCustomercount] = useState(0);
  const[pharmacycount,setPharmacycount] = useState(0);
  const[admincount,setAdmincount] = useState(0);
  const[allusercount,setallUsercount]=useState(0);

  
  



    useEffect(()=>{

      


        const fetchCount=async()=>{

         
            const userRess=await axios.get(
              "http://localhost:4000/getusercount"
            );
            setallUsercount(userRess.data.data);

          const userRes=await axios.get(
            "http://localhost:4000/getCustomercountVal"
          );
          setCustomercount(userRes.data.data);
    
    
          const phrRes=await axios.get(
            "http://localhost:4000/getPharmacycountVal"
          );
          setPharmacycount(phrRes.data.data);
    
    
    
          
            const mediRes=await axios.get(
              "http://localhost:4000/getAdmincountVal"
            );
            setAdmincount(mediRes.data.data);
                
            
    
        };
        fetchCount();
      },[]);

      const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchCount = async () => {
        const mediRes = await axios.get('http://localhost:4000/getordercountbyitsname');
        setOrders(mediRes.data);
    };
      
    fetchCount();
  }, []);

  const data1= {
    labels: orders.map(med => med._id),
    datasets: [
      {
        label: 'Order Count',
        data: orders.map(med => med.countValue),
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

  return (
    

    <Document>
      <Page style={styles.page}>
        <Text style={styles.title}>Sales Report</Text>
        <p>Total Sales: {data.totalSales}</p>
        <p>Total Users of the UrSAFE_SRILANKA: {allusercount}</p>
        <p>Total Customers: {customercount}</p>
        <p>Total Pharmacists: {pharmacycount}</p>
        <p>Total Administrators: {admincount}</p>
        {/* <View style={{ flexDirection: 'row', marginBottom: 10 }}>
          <Text style={{ width: '50%', ...styles.text }}>Total Sales: {data.totalSales}</Text>
          <Text style={{ width: '50%', ...styles.text }}>Total Users of the UrSAFE_SRILANKA: {allusercount}</Text>

          <Text style={{ width: '50%', ...styles.text }}>Total Customers: {customercount}</Text>
          <Text style={{ width: '50%', ...styles.text }}>Total Pharmacists: {pharmacycount}</Text>
          <Text style={{ width: '50%', ...styles.text }}>Total Administrators: {admincount}</Text>

        </View> */}


        <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        <Text style={styles.title}> Most Search Medicins Chart </Text>
        
        <div style={{ width: '400px', height: '400px', margin: '0 auto' }}>
  <Bar data={data} />
</div>
        

        <Text style={styles.title}> Orders Bar Chart </Text>
        
        <div style={{ width: '400px', height: '400px', margin: '0 auto' }}>
  <Bar data={data1} />
</div>
        
        </View>
        

        
      </Page>
    </Document>
  );
};

export default Report;
