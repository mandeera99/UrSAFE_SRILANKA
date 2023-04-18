import React from "react";
import "./Skillbar.css";

function ProgressBar() {
  return (
    <div className="container">
      <div className="skills">
        <h2>Put Orders</h2>
        <div className="progress-bar">
          <div className="html"><span>86%</span></div>
        </div>
        <h2>Pending Orders</h2>
        <div className="progress-bar">
          <div className="css"><span>22%</span></div>
        </div>
        <h2>Cancled Orders</h2>
        <div className="progress-bar">
          <div className="javaScript"><span>55%</span></div>
        </div>
        <h2>Fully Completed Orders</h2>
        <div className="progress-bar">
          <div className="python"><span>90%</span></div>
        </div>
        
      </div>
    </div>
  );
}

export default ProgressBar;
