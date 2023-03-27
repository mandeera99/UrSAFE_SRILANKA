// App.js
import React from 'react';

import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function SkillBar() {
  return (
    <div className="progressBar">
        <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Projects</h6>
        </div>
        <div class="card-body">
                                <h4 class="small font-weight-bold">completely Created Accounts 
                                <span
                                        class="float-right">5000</span></h4>
                             {/* <div class="progress mb-4">
                                    <div class="progress-bar bg-danger a2" role="progressbar" ></div>
                                    
                                </div>  */}
                                <><ProgressBar striped variant="success" now={30} /></>
                                

                                <h4 class="small font-weight-bold">Searched pharmacy<span
                                        class="float-right">2000</span></h4>
                                {/* <div class="progress mb-4">
                                    <div class="progress-bar bg-warning a3" role="progressbar" ></div>
                                </div> */}
                                <><ProgressBar striped variant="info" now={40} /></>
                                <h4 class="small font-weight-bold">Place Order<span
                                        class="float-right">200</span></h4>
                                {/* <div class="progress mb-4">
                                    <div class="progress-bar a7" role="progressbar" ></div>
                                </div> */}
                                <><ProgressBar striped variant="warning" now={50} /></>
                                <h4 class="small font-weight-bold">completed Orders<span
                                        class="float-right">13</span></h4>
                                {/* <div class="progress mb-4">
                                    <div class="progress-bar bg-info a4" role="progressbar" ></div>
                                </div> */}
                                <><ProgressBar striped variant="danger" now={60} /></>
                                <h4 class="small font-weight-bold">Daily Loggings <span
                                        class="float-right">3000</span></h4>
                                {/* <div class="progress">
                                    <div class="progress-bar bg-success a5" role="progressbar" ></div>
                                </div> */}
                                <><><ProgressBar striped variant="info" now={30} /></></>
                            </div>
      
        
        
        
    </div>
  );
}
export default SkillBar;