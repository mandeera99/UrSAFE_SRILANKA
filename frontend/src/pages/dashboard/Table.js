import React from 'react'
import PharmacyDetails from './Charts/PharmacyDetails'
import CustomerDetailsTable from './Charts/CustomerDetailsTable'
import AdminTable from './Charts/adminTable'

function Table() {
  return (
    <div>
<body id="page-top">

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
                <h1 class="h3 mb-2 text-gray-800">Tables</h1>
                

                {/* <!-- Content Row --> */}
                <div class="row">

                   

                    {/* <!-- Donut Chart --> */}
                    <div class="col-12">
                        <div class="card shadow mb-4">
                            {/* <!-- Card Header - Dropdown --> */}
                            <div class="card-header py-3">
                                <h6 class="m-0 font-weight-bold text-primary">Pharmacists Details Table</h6>
                            </div>
                            {/* <!-- Card Body --> */}
                            <div class="card-body">
                                <div>
                                
                                   <center><PharmacyDetails/></center> 

                                </div>
                                <hr/>
                               
                            </div>
                        </div>
                    </div>

                    <div class="col-12">
                        <div class="card shadow mb-4">
                            {/* <!-- Card Header - Dropdown --> */}
                            <div class="card-header py-3">
                                <h6 class="m-0 font-weight-bold text-primary">Customers Details Table </h6>
                            </div>
                            {/* <!-- Card Body --> */}
                            <div class="card-body">
                                <div>
                                    <center><CustomerDetailsTable/></center>
                                </div>
                                <hr/>
                               
                            </div>
                        </div>
                    </div>

                    <div class="col-12">
                        <div class="card shadow mb-4">
                            {/* <!-- Card Header - Dropdown --> */}
                            <div class="card-header py-3">
                                <h6 class="m-0 font-weight-bold text-primary">Administrators Details Table</h6>
                            </div>
                            {/* <!-- Card Body --> */}
                            <div class="card-body">
                                <div >
                                    
                                    <center><AdminTable/></center>
                                </div>
                                <hr/>
                               
                            </div>
                        </div>
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



</body>
    </div>
  )
}

export default Table
