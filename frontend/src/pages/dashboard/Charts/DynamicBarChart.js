import React ,{ useState,useEffect }from 'react';
import Chart from "react-apexcharts";


// going to display here  most searched medicines
//so i need array of medicine name
//and amount of searches
//create a table with 
//pendol ->50   siddalepa ->20 ....
function DynamicBarChart() {
    const [socialName,setSocialName]= useState([]);
    const [socialValue,setSocialValue]=useState([]);

    useEffect(()=>{

        const socialMediaName =[];
        const socialMediaValue =[];

        const getSocialRecords =async()=>{
            const dataReq = await fetch("http://localhost:4000/getAllUser");
            const dataRes = await dataReq.json();
            console.log(dataRes);

            for(let i=0; i<dataRes.length; i++){
                socialMediaName.push(dataRes[i].fullName);
                socialMediaValue.push(dataRes[i].email);

            }

            // console.log("text name"+socialMediaName);
            // console.log("test"+socialMediaValue);

            setSocialName(socialMediaName);
            setSocialValue(socialMediaValue);


        }
        getSocialRecords();

    },[]);

return(
    <React.Fragment>
        <div>
            <h3>Bar Chart</h3>
            


            <Chart 
                type="bar"
                width={1380}
                height={700}

                series={[
                    {
                        name:"Displayimg barchart",
                        // data:socialValue,
                         data:[67,55,34,23,55],
                    },
                ]}

                options={{
                    title:{
                        text:"barchart put somethimng",
                        style:{fontSize:30},
                    },

                    subtitle:{
                        text:"this is barchart",
                        style:{fontSize:18},
                    },
                    colors:["#f90000"],
                    theme:{mode:"light"},

                    xaxis:{
                        tickPlacement:"on",
                        categories:socialName,
                        title:{
                            text:"Social media users",
                            style:{color:"#f90000",fontSize:15},
                        },
                    },

                    yaxis:{
                        labels:{
                            formatter:(val)=>{
                                return `${val}`;
                            },
                            style:{fontSize:"15",color:['#f90000']},
                        },
                        title:{
                            text:"User in (k)",
                            style:{color:"#f90000",fontsize:15},
                        },
                    },

                    legend:{
                        show:true,
                        position:"right",
                    },
                    dataLabels:{
                        formatter:(val)=>{
                            return `${val}`;
                        },
                        style:{
                            colors:["##f4f4f4f4"],
                            fontsize:15,
                        },
                    },
                }}
            
            >


            </Chart>


        </div>
    </React.Fragment>


)
}

export default DynamicBarChart
