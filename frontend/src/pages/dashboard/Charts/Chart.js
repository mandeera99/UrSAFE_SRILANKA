import React from 'react';
import { 
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    ArcElement,
    Legend,
} from 'chart.js';

import {Line,Doughnut,Pie,Bar} from "react-chartjs-2";


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    ArcElement,
    Legend,
);


export const LineChart =()=>{
const labels = getLastYearMonths();
const options={
    responsive:true,
    Plugin:{
        legend:{
            position:"bottom"
        },
        title:{
            display:true,
            text:"Yearly views",
        }
    }
}

    const data ={
        labels,
        datasets:[
        {
            label:"Views",
            data:[1,2,3,4],
            borderColor:"rgba(107,70,193,0.5)",
            backgroundColor:"#6b46c1",
        },
        ],
    };

    return <Line options={options} data={data}/>
};


export const DoughnutChart = () =>{

 
        const data ={
            labels:["Subscribed","Not Subscribed"],
            datasets:[
            {
                label:"Views",
                data:[3,20],
                borderColor:["rgb(107,70,193)","rgb(241,43,129)"],
                backgroundColor:["rgba(62,12,171,0.3)","rgba(214,43,129,0.3)"],
                borderWidth:1,
            },
            ],
        };
    
        return <Doughnut data={data}/>
};

function getLastYearMonths(){
    const labels = getLastYearMonths();

    const months =[
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ];

    const CurrentMonth =new Date().getMonth();
    // console.log(CurrentMonth);
    const remain = 11 - CurrentMonth;

    for(let i = CurrentMonth;i< months.length;i--){
        const element = months[i];
        labels.unshift(element);
        if(i === 0) break;
    }
   

    for(let i = 11 ; i> remain; i--){
        if(i === CurrentMonth) break;
        const element = months[i];
        labels.unshift(element);
        
    }

    return labels;
   
}

