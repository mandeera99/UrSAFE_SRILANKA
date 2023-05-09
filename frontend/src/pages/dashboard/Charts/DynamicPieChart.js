import React,{useState,useEffect} from "react";
import Chart from "react-apexcharts";
import axios from "axios";

function DynamicPieChart(){

    

    const[usercount,setUsercount] = useState(0);
  const[pharmacycount,setPharmacycount] = useState(0);
const[medicount,setMedicount] = useState(0);
  const [sSubject, setSSubject] = useState([]);
  const [sMarks, setSMarks] = useState([]);



    useEffect(()=>{


        const fetchCount=async()=>{
          const userRes=await axios.get(
            "http://localhost:4000/getCustomercountVal"
          );
          setUsercount(userRes.data.data);
    
    
          const phrRes=await axios.get(
            "http://localhost:4000/getPharmacycountVal"
          );
          setPharmacycount(phrRes.data.data);
    
    
    
          
            const mediRes=await axios.get(
              "http://localhost:4000/getAdmincountVal"
            );
            setMedicount(mediRes.data.data);
                
            
    
        };
        fetchCount();
      },[]);

      useEffect(() => {
    setSSubject(["Customers", "Pharmacy","Admin"]);
    setSMarks([usercount, pharmacycount,medicount]);
  }, [usercount, pharmacycount,medicount]);




  
    return(
        <React.Fragment>
            <div>
                <h3>Pie Chart</h3>
                <Chart
                type="pie"
                width={500}
                height={350}
                series={sMarks}
                options ={{
                    titile:{text:"Current User Amount"
                },

                    noData:{text:"Empty Data"},

                    colors:["#0A192F","#333333","#D79922"],
                   
                    labels:sSubject
                    
                }}
                
                >



                </Chart>

            </div>
        </React.Fragment>

    );

}

export default DynamicPieChart;