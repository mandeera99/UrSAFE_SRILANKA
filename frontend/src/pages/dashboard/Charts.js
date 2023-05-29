import React from 'react'
import ThreewayLineChart from './Charts/ThreewayLineChart';
import OrdersBar from './Charts/OrdersBar';
import MostSearchinLine from './Charts/MostSearchinLine';
import SalesPieChart from './Charts/SalesPieChart';
import AnnualSalesChart from './Charts/AnnualSalesChart';

function Charts() {
  return (
    <div>
<div id="page-top">

{/* <!-- Page Wrapper --> */}
<div id="wrapper">

    {/* <!-- Sidebar --> */}
   
    {/* <!-- End of Sidebar --> */}

    {/* <!-- Content Wrapper --> */}
    <div id="content-wrapper" class="d-flex flex-column">

        {/* <!-- Main Content --> */}
        <div id="content">

            {/* <!-- Topbar --> */}
            
            {/* <!-- End of Topbar -->

            <!-- Begin Page Content --> */}
            <div class="container-fluid">

                {/* <!-- Page Heading --> */}
                <h1 class="h3 mb-2 text-gray-800">Charts</h1>
                

                {/* <!-- Content Row --> */}
                <div class="row">

                    <div class="col-12">

                        {/* <!-- Area Chart --> */}
                     
                        {/* <!-- Bar Chart --> */}
                        <div class="card shadow mb-4">
                            <div class="card-header py-3">
                                <h6 class="m-0 font-weight-bold text-primary">Annual Orders Progress Chart</h6>
                            </div>
                            <div class="card-body">
                                <div >
                                    {/* <center><ThreewayLineChart/></center> */}

                                    <center><div style={{ width: '400px', height: '400px', margin: '0 auto' }}>
                                    <ThreewayLineChart/>
                                </div></center>
                                    
                                    
                                </div>
                                <hr/>
                               
                            </div>
                        </div>

                    </div>
                    

                    {/* <!-- Donut Chart --> */}
                    <div class="col-12">
                        <div class="card shadow mb-4">
                            {/* <!-- Card Header - Dropdown --> */}
                            <div class="card-header py-3">
                                <h6 class="m-0 font-weight-bold text-primary"> Month Orders Status Chart </h6>
                            </div>
                            {/* <!-- Card Body --> */}
                            <div class="card-body" style={{ padding: "0  250px" }}>
                                <div >
                                    
                                    {/* <center><OrdersBar/></center> */}

                                    <center><div style={{ width: '400px', height: '400px', margin: '0 auto' }}>
                                    <OrdersBar/>
                                </div></center>
                                </div>
                                <hr/>
                               
                            </div>
                        </div>
                    </div>

                    <div class="col-6">

                        {/* <!-- Area Chart --> */}
                        <div class="card shadow mb-4">
                            <div class="card-header py-3">
                                <h6 class="m-0 font-weight-bold text-primary">Most Searched Medicines Chart</h6>
                            </div>
                            <div class="card-body">
                                <div >
                                    
                                    {/* <center><MostSearchinLine/></center> */}

                                    <center><div style={{ width: '400px', height: '400px', margin: '0 auto' }}>
                                    <MostSearchinLine/>
                                </div></center>
                                </div>
                                <hr/>
                                
                            </div>
                        </div>
                        

                    </div>
                    

                
                    <div class="col-6">

                    {/* <!-- Area Chart --> */}
                    <div class="card shadow mb-4">
                     <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">Sales Pie Chart</h6>
                    </div>
                    <div class="card-body" >
                     <div >
            
                     {/* <center><SalesPieChart/></center> */}
                     <center><div style={{ width: '350px', height: '350px', margin: '0 auto' }}>
                     <SalesPieChart/>
                         </div></center>
                    </div>
                    <hr/>
        
                     </div>
                    </div>

                    


</div>



                    <div class="col-12">

                        {/* <!-- Area Chart --> */}
                        <div class="card shadow mb-4">
                            <div class="card-header py-3">
                                <h6 class="m-0 font-weight-bold text-primary">Variantion of PaymentMethods</h6>
                            </div>
                            <div class="card-body" style={{ padding: "0  250px" }}>
                                <div >
                                
                                    
                                    <center><div style={{ width: '500px', height: '500px', margin: '0 auto' }}>
                                <AnnualSalesChart/>
                                </div></center>
                                </div>
                                <hr/>
                                
                            </div>
                        </div>

                        {/* <!-- Bar Chart --> */}
                        {/* <div class="card shadow mb-4">
                            <div class="card-header py-3">
                                <h6 class="m-0 font-weight-bold text-primary">Income progress</h6>
                            </div>
                            <div class="card-body">
                                <div>
                                    
                                    
                                </div>
                                <hr/>
                                
                            </div>
                        </div> */}


                    </div>
                </div>

            </div>
            {/* <!-- /.container-fluid --> */}

        </div>
        {/* <!-- End of Main Content --> */}

        {/* <!-- Footer --> */}
        {/* <footer class="sticky-footer bg-white">
            <div class="container my-auto">
                <div class="copyright text-center my-auto">
                    <span>Copyright &copy; Your Website 2020</span>
                </div>
            </div>
        </footer> */}
        {/* <!-- End of Footer --> */}

    </div>
    {/* <!-- End of Content Wrapper --> */}

</div>
{/* <!-- End of Page Wrapper --> */}

{/* <!-- Scroll to Top Button--> */}
<a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
</a>

{/* <!-- Logout Modal--> */}
<div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
            <div class="modal-footer">
                <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                <a class="btn btn-primary" href="login.html">Logout</a>
            </div>
        </div>
    </div>
</div>




    </div>
</div>
  )
}

export default Charts
