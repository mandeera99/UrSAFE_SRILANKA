import React from 'react';
import {PieChart,Pie,ResponsiveContainer,Tooltip} from "recharts";


function PieCharts() {
    const data=[
        {name:"User",value:3000},
        {name:"Pharmacists",value:450},


    ]
  return (

    <div>
      {/* <h3>Users of the Application</h3> */}

      
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      
      
    </div>
  )
}

export default PieCharts

