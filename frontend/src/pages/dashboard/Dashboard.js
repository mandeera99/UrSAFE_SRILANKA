import React, { useState,useEffect } from 'react';
import AdminAnalyticsPage from '../admin/AdminAnalyticsPage';
import AdminOrdersPage from '../admin/AdminOrdersPage';
import LineCharts from './LineCharts';
import PieCharts from './PieCharts';
import BarCharts from './BarCharts';
import LinerProgress from './LinerProgress';
import Review from './Review';
import './Dashboard.css';
import SkillBar from './SkillBar';
import axios from 'axios';
import DynamicPieChart from './Charts/DynamicPieChart';
import MostSearchinLine from './Charts/MostSearchinLine';
import UserAmountLine from './Charts/UserAmountLine';




import { useLogout } from '../../hooks/useLogout'
import { useAuthContext } from '../../hooks/useAuthContext'
import MostsearchedMedicine from './Charts/MostsearchedMedicine';
import OrderDetailsBarchart from './Charts/OrderDetailsBarchart';



function Dashboard() {
    const { logout } = useLogout()
    const { user } = useAuthContext()
    const handleClick = () => {
        logout()
        window.location.href = '/'
    }
    const[style,setStyle]=useState("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    const changeStyle=()=>{
        if(style=="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled");

        }else
        {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
        }
    };

    const changeStyle1=()=>{
        if(style=="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled1");

        }else
        {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
        }
    };
    
    const[phamacyCount,setparmacycount] = useState(0);
    const[adminCount,setAdmincount] = useState(0);
    const[customerCount,setCustomercount] = useState(0);
    const[searchmeddCount,setSearchMedCount] = useState(0);
    const[orderCount,setOrderCount] = useState(0);


   

    useEffect(()=>{
        const fetchCount=async()=>{
          const userRes=await axios.get(
            "http://localhost:4000/getordercount"
          );
          setOrderCount(userRes.data.data);
    
        };
        fetchCount();
      },[]);

  useEffect(()=>{
    const fetchCount=async()=>{
      const userRes=await axios.get(
        "http://localhost:4000/getPharmacycountVal"
      );
      setparmacycount(userRes.data.data);

    };
    fetchCount();
  },[]);

  useEffect(()=>{
    const fetchCount=async()=>{
      const userRes=await axios.get(
        "http://localhost:4000/getAdmincountVal"
      );
      setAdmincount(userRes.data.data);

    };
    fetchCount();
  },[]);

  useEffect(()=>{
    const fetchCount=async()=>{
      const userRes=await axios.get(
        "http://localhost:4000/getCustomercountVal"
      );
      setCustomercount(userRes.data.data);

    };
    fetchCount();
  },[]);

  useEffect(()=>{
    const fetchCount=async()=>{
      const userRes=await axios.get(
        "http://localhost:4000/getSearchcountVal"
      );
      setSearchMedCount(userRes.data.data);

    };
    fetchCount();
  },[]);




  return (

   
    
    <div>
      
<body id="page-top">

{/* <!-- Page Wrapper --> */}
<div id="wrapper">

    {/* <!-- Sidebar --> */}
    <ul class={style} id="accordionSidebar">

        {/* <!-- Sidebar - Brand --> */}
        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div class="sidebar-brand-icon rotate-n-15">
               
            </div>
            <div class="sidebar-brand-text mx-3">Welcome Admin</div>
        </a>

        {/* <!-- Divider --> */}
        <hr class="sidebar-divider my-0"/>

        {/* <!-- Nav Item - Dashboard --> */}
        <li class="nav-item active">
            <a class="nav-link" href="#">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span></a>
        </li>

        {/* <!-- Divider --> */}
        <hr class="sidebar-divider"/>

        {/* <!-- Heading --> */}
        {/* <div class="sidebar-heading">
            Interface
        </div> */}

        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                aria-expanded="true" aria-controls="collapseTwo">
                <i class="fas fa-fw fa-users"></i>
                <span>User Accounts</span>
            </a>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    {/* <h6 class="collapse-header">Custom Components:</h6> */}
                    <a class="collapse-item" href="/dashboard/pharmacy">Customers</a>
                    <a class="collapse-item" href="/dashboard/user">Pharmacy</a>
                </div>
            </div>
        </li>

        {/* <!-- Nav Item - Utilities Collapse Menu --> */}
        {/* <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities"
                aria-expanded="true" aria-controls="collapseUtilities">
                <i class="fas fa-fw fa-wrench"></i>
                <span>Utilities</span>
            </a>
            <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities"
                data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <h6 class="collapse-header">Custom Utilities:</h6>
                    <a class="collapse-item" href="utilities-color.html">Colors</a>
                    <a class="collapse-item" href="utilities-border.html">Borders</a>
                    <a class="collapse-item" href="utilities-animation.html">Animations</a>
                    <a class="collapse-item" href="utilities-other.html">Other</a>
                </div>
            </div>
        </li> */}

        {/* <!-- Divider --> */}
        <hr class="sidebar-divider"/>

        {/* <!-- Heading --> */}
        {/* <div class="sidebar-heading">
            Addons
        </div> */}

        {/* <!-- Nav Item - Pages Collapse Menu --> */}

        <li class="nav-item">
            <a class="nav-link" href="/admin/analytics">
            <i class="bi bi-graph-up-arrow"></i>
                <span>Overview</span></a>
        </li>

        <li class="nav-item">
            <a class="nav-link" href="/dashboard/charts">
                <i class="fas fa-fw fa-chart-area"></i>
                <span>Analytics</span></a>
        </li>

      



       

        {/* <!-- Nav Item - Charts --> */}
        <li class="nav-item">
            <a class="nav-link" href="/dashboard/charts">
                {/* <i class="fas fa-fw fa-chart-area"></i> */}
                <i class="fas fa-fw fa-chart-bar"></i>
                <span>Charts</span></a>
        </li>
{/* 
        <!-- Nav Item - Tables --> */}
        <li class="nav-item">
            <a class="nav-link" href="/dashboard/table">
                <i class="fas fa-fw fa-table"></i>
                <span>Tables</span>
            </a>
            <div id="collapseTable" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    {/* <h6 class="collapse-header">Custom Components:</h6> */}
                    <a class="collapse-item" href="/admin/orders">Order Details</a>
                    <a class="collapse-item" href="/admin/products">Medicine List</a>
                </div>
            </div>



        </li>


         
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages4"
                aria-expanded="true" aria-controls="collapsePages4">
                <i class="fas fa-fw fa-list"></i>
                <span>My Work</span>
            </a>
            <div id="collapsePages4" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    
                    <a class="collapse-item" href="/dashboard/login">Todo List</a>
                    <a class="collapse-item" href="/dashboard/register">Calender</a>
                    
                    <div class="collapse-divider"></div>
                    {/* <h6 class="collapse-header">Other Pages:</h6>
                    <a class="collapse-item" href="404.html">404 Page</a>
                    <a class="collapse-item" href="blank.html">Blank Page</a> */}
                </div>
            </div>
        </li>

        
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                aria-expanded="true" aria-controls="collapsePages">
                <i class="fas fa-fw fa-cog"></i>
                <span>Admin</span>
            </a>
            <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <h6 class="collapse-header">Login Screens:</h6>
                    <a class="collapse-item" href="/dashboard/login">Login</a>
                    <a class="collapse-item" href="/dashboard/register">Register</a>
                    <a class="collapse-item" href="/dashboard/forgot-password">Forgot Password</a>
                    <div class="collapse-divider"></div>
                    {/* <h6 class="collapse-header">Other Pages:</h6>
                    <a class="collapse-item" href="404.html">404 Page</a>
                    <a class="collapse-item" href="blank.html">Blank Page</a> */}
                </div>
            </div>
        </li>


        {/* <!-- Divider --> */}
        <hr class="sidebar-divider d-none d-md-block"/>

        {/* <!-- Sidebar Toggler (Sidebar) --> */}
        <div class="text-center d-none d-md-inline">
            <button class="rounded-circle border-0" id="sidebarToggle" onClick={changeStyle}></button>
        </div>

        {/* <!-- Sidebar Message --> */}
        {/* <div class="sidebar-card d-none d-lg-flex">
            <img class="sidebar-card-illustration mb-2" src="img/undraw_rocket.svg" alt="..."/>
            <p class="text-center mb-2"><strong>SB Admin Pro</strong> is packed with premium features, components, and more!</p>
            <a class="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Upgrade to Pro!</a>
        </div> */}

    </ul>
    {/* <!-- End of Sidebar --> */}

    {/* <!-- Content Wrapper --> */}
    <div id="content-wrapper" class="d-flex flex-column">

        {/* <!-- Main Content --> */}
        <div id="content">

            {/* <!-- Topbar --> */}
            <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                {/* <!-- Sidebar Toggle (Topbar) --> */}
                <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3" onClick={changeStyle1} >
                    <i class="fa fa-bars"></i>
                </button>

                {/* <!-- Topbar Search --> */}
                <form
                    class="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                    <div class="input-group">
                        <input type="text" class="form-control bg-light border-0 small" placeholder="Search for..."
                            aria-label="Search" aria-describedby="basic-addon2"/>
                        <div class="input-group-append">
                            <button class="btn btn-primary" type="button">
                                <i class="fas fa-search fa-sm"></i>
                            </button>
                        </div>
                    </div>
                </form>

                {/* <!-- Topbar Navbar --> */}
                <ul class="navbar-nav ml-auto">

                    {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
                    <li class="nav-item dropdown no-arrow d-sm-none">
                        <a class="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-search fa-fw"></i>
                        </a>
                        {/* <!-- Dropdown - Messages --> */}
                        <div class="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                            aria-labelledby="searchDropdown">
                            <form class="form-inline mr-auto w-100 navbar-search">
                                <div class="input-group">
                                    <input type="text" class="form-control bg-light border-0 small"
                                        placeholder="Search for..." aria-label="Search"
                                        aria-describedby="basic-addon2"/>
                                    <div class="input-group-append">
                                        <button class="btn btn-primary" type="button">
                                            <i class="fas fa-search fa-sm"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </li>

                    {/* <!-- Nav Item - Alerts --> */}
                    <li class="nav-item dropdown no-arrow mx-1">
                        <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-bell fa-fw"></i>
                            {/* <!-- Counter - Alerts --> */}
                            <span class="badge badge-danger badge-counter">3+</span>
                        </a>
                        {/* <!-- Dropdown - Alerts --> */}
                        <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                            aria-labelledby="alertsDropdown">
                            <h6 class="dropdown-header">
                                Alerts Center
                            </h6>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <div class="mr-3">
                                    <div class="icon-circle bg-primary">
                                        <i class="fas fa-file-alt text-white"></i>
                                    </div>
                                </div>
                                <div>
                                    <div class="small text-gray-500">December 12, 2019</div>
                                    <span class="font-weight-bold">A new monthly report is ready to download!</span>
                                </div>
                            </a>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <div class="mr-3">
                                    <div class="icon-circle bg-success">
                                        <i class="fas fa-donate text-white"></i>
                                    </div>
                                </div>
                                <div>
                                    <div class="small text-gray-500">December 7, 2019</div>
                                    $290.29 has been deposited into your account!
                                </div>
                            </a>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <div class="mr-3">
                                    <div class="icon-circle bg-warning">
                                        <i class="fas fa-exclamation-triangle text-white"></i>
                                    </div>
                                </div>
                                <div>
                                    <div class="small text-gray-500">December 2, 2019</div>
                                    Spending Alert: We've noticed unusually high spending for your account.
                                </div>
                            </a>
                            <a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                        </div>
                    </li>

                    {/* <!-- Nav Item - Messages --> */}
                    <li class="nav-item dropdown no-arrow mx-1">
                        <a class="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-envelope fa-fw"></i>
                            {/* <!-- Counter - Messages --> */}
                            <span class="badge badge-danger badge-counter">7</span>
                        </a>
                        {/* <!-- Dropdown - Messages --> */}
                        <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                            aria-labelledby="messagesDropdown">
                            <h6 class="dropdown-header">
                                Message Center
                            </h6>
                            <a class="dropdown-item d-flex align-items-center" href="/dashboard/chat-room">
                                <div class="dropdown-list-image mr-3">
                                    <img class="rounded-circle" src="img/undraw_profile_1.svg"
                                        alt="..."/>
                                    <div class="status-indicator bg-success"></div>
                                </div>
                                <div class="font-weight-bold">
                                    <div class="text-truncate">Hi there! I am wondering if you can help me with a
                                        problem I've been having.</div>
                                    <div class="small text-gray-500">Emily Fowler · 58m</div>
                                </div>
                            </a>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <div class="dropdown-list-image mr-3">
                                    <img class="rounded-circle" src="img/undraw_profile_2.svg"
                                        alt="..."/>
                                    <div class="status-indicator"></div>
                                </div>
                                <div>
                                    <div class="text-truncate">I have the photos that you ordered last month, how
                                        would you like them sent to you?</div>
                                    <div class="small text-gray-500">Jae Chun · 1d</div>
                                </div>
                            </a>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <div class="dropdown-list-image mr-3">
                                    <img class="rounded-circle" src="img/undraw_profile_3.svg"
                                        alt="..."/>
                                    <div class="status-indicator bg-warning"></div>
                                </div>
                                <div>
                                    <div class="text-truncate">Last month's report looks great, I am very happy with
                                        the progress so far, keep up the good work!</div>
                                    <div class="small text-gray-500">Morgan Alvarez · 2d</div>
                                </div>
                            </a>
                            <a class="dropdown-item d-flex align-items-center" href="#">
                                <div class="dropdown-list-image mr-3">
                                    <img class="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                                        alt="..."/>
                                    <div class="status-indicator bg-success"></div>
                                </div>
                                <div>
                                    <div class="text-truncate">Am I a good boy? The reason I ask is because someone
                                        told me that people say this to all dogs, even if they aren't good...</div>
                                    <div class="small text-gray-500">Chicken the Dog · 2w</div>
                                </div>
                            </a>
                            <a class="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                        </div>
                    </li>

                    <div class="topbar-divider d-none d-sm-block"></div>

                    {/* <!-- Nav Item - User Information --> */}
                    <li class="nav-item dropdown no-arrow">
                        <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span class="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                            <img class="img-profile rounded-circle"
                                src="img/undraw_profile.svg"/>
                        </a>
                        {/* <!-- Dropdown - User Information --> */}
                        <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                            aria-labelledby="userDropdown">
                            <a class="dropdown-item" href="/user">
                                <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                Profile
                            </a>
                            <a class="dropdown-item" href="#">
                                <i class="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                Settings
                            </a>
                            <a class="dropdown-item" href="#">
                                <i class="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                Activity Log
                            </a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                Logout
                            </a>
                        </div>
                    </li>

                </ul>

            </nav>
            {/* <!-- End of Topbar --> */}

            {/* <!-- Begin Page Content --> */}
            <div class="container-fluid">

                {/* <!-- Page Heading --> */}
                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                    <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                            class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                </div>

                {/* <!-- Content Row --> */}
                <div class="row">

                    {/* <!-- Earnings (Monthly) Card Example --> */}
                    <div class="col-xl-3 col-md-6 mb-4">
                        <div class="card border-left-primary shadow h-100 py-2">
                            <div class="card-body">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2">
                                        <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                            PHARMACY ACCOUNTS </div>
                                        <div class="h5 mb-0 font-weight-bold text-gray-800">{phamacyCount}</div>
                                    </div>
                                    <div class="col-auto">
                                    <i class="fas fa-prescription-bottle-alt fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
{/* 
                    <!-- Earnings (Monthly) Card Example --> */}
                    <div class="col-xl-3 col-md-6 mb-4">
                        <div class="card border-left-success shadow h-100 py-2">
                            <div class="card-body">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2">
                                        <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                            CUSTOMERS ACCOUNT </div>
                                        <div class="h5 mb-0 font-weight-bold text-gray-800">{customerCount}</div>
                                    </div>
                                    <div class="col-auto">
                                    <i class="fas fa-user fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Earnings (Monthly) Card Example --> */}
                    <div class="col-xl-3 col-md-6 mb-4">
                        <div class="card border-left-info shadow h-100 py-2">
                            <div class="card-body">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2">
                                        <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Search Amount
                                        </div>
                                        {/* <div class="row no-gutters align-items-center"> */}
                                            {/* <div class="col-auto"> */}
                                            <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">{searchmeddCount}</div>
                                            </div>
                                            {/* <div class="col">
                                                <div class="progress progress-sm mr-2">
                                                    <div class="progress-bar bg-info a1" role="progressbar"
                                                        ></div>
                                                </div>
                                            </div> */}
                                        {/* </div> */}
                                    {/* </div> */}
                                    <div class="col-auto">
                                        <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
{/* 
                    <!-- Pending Requests Card Example --> */}
                    <div class="col-xl-3 col-md-6 mb-4">
                        <div class="card border-left-warning shadow h-100 py-2">
                            <div class="card-body">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2">
                                        <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                            Placed Orders</div>
                                        <div class="h5 mb-0 font-weight-bold text-gray-800">{orderCount}</div>
                                    </div>
                                    <div class="col-auto">
                                        <i class="fas fa-comments fa-2x text-gray-300"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- Content Row --> */}

                <div class="row">

                <center>
                    
                    <div class="col-xl-12 col-lg-8" >
                        <div class="card shadow mb-4">
                            {/* <!-- Card Header - Dropdown --> */}
                            <div
                                class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 class="m-0 font-weight-bold text-primary">Most Searched Medicines</h6>
                                <div class="dropdown no-arrow">
                                    <a class="dropdown-toggle" href="/dashboard/graph" role="button" id="dropdownMenuLink"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                        aria-labelledby="dropdownMenuLink">
                                        <div class="dropdown-header">Dropdown Header:</div>
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Card Body --> */}
                            <div class="card-body">
                                {/* <div class="chart-area">
                                    <canvas id="myAreaChart"><AdminAnalyticsPage/></canvas>
                                </div> */}
                                <div class="col-xl-10 col-lg-7"><center><MostsearchedMedicine/></center></div>
                                {/* MostsearchedMedicine */}
                            </div>
                        </div>
                    </div></center>

                    <center>
                    
                    <div class="col-xl-12 col-lg-8" >
                        <div class="card shadow mb-4">
                            {/* <!-- Card Header - Dropdown --> */}
                            <div
                                class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 class="m-0 font-weight-bold text-primary">Users With Our System</h6>
                                <div class="dropdown no-arrow">
                                    <a class="dropdown-toggle" href="/dashboard/graph" role="button" id="dropdownMenuLink"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                        aria-labelledby="dropdownMenuLink">
                                        <div class="dropdown-header">Dropdown Header:</div>
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Card Body --> */}
                            <div class="card-body">
                                {/* <div class="chart-area">
                                    <canvas id="myAreaChart"><AdminAnalyticsPage/></canvas>
                                </div> */}
                                <div class="col-xl-10 col-lg-7"><center><UserAmountLine/></center></div>
                            </div>
                        </div>
                    </div></center>

                    <center>
                    
                    <div class="col-xl-12 col-lg-8" >
                        <div class="card shadow mb-4">
                            {/* <!-- Card Header - Dropdown --> */}
                            <div
                                class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 class="m-0 font-weight-bold text-primary">Medicine Orders Overview</h6>
                                <div class="dropdown no-arrow">
                                    <a class="dropdown-toggle" href="/dashboard/graph" role="button" id="dropdownMenuLink"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                        aria-labelledby="dropdownMenuLink">
                                        <div class="dropdown-header">Dropdown Header:</div>
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Card Body --> */}
                            <div class="card-body">
                                {/* <div class="chart-area">
                                    <canvas id="myAreaChart"><AdminAnalyticsPage/></canvas>
                                </div> */}
                                <div class="col-xl-10 col-lg-7"><center><OrderDetailsBarchart/></center></div>
                            </div>
                        </div>
                    </div></center>

                    <center>
                    
                    <div class="col-xl-12 col-lg-8" >
                        <div class="card shadow mb-4">
                            {/* <!-- Card Header - Dropdown --> */}
                            <div
                                class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                <h6 class="m-0 font-weight-bold text-primary">Users</h6>
                                <div class="dropdown no-arrow">
                                    <a class="dropdown-toggle" href="/dashboard/graph" role="button" id="dropdownMenuLink"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                        aria-labelledby="dropdownMenuLink">
                                        <div class="dropdown-header">Dropdown Header:</div>
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Card Body --> */}
                            <div class="card-body">
                                {/* <div class="chart-area">
                                    <canvas id="myAreaChart"><AdminAnalyticsPage/></canvas>
                                </div> */}
                                <div class="col-xl-10 col-lg-7"><center><Review/></center></div>
                            </div>
                        </div>
                    </div></center>
                   
                </div>

                
     

                {/* <!-- Content Row --> */}
                <div class="row">

                <div class="col-xl-6 lg-6">

                        {/* <!-- Project Card Example --> */}
                        <div class="card shadow ">
                            <div class="card-header py-3">
                                <h6 class="m-0 font-weight-bold text-primary">Projects</h6>
                            </div>
                    
                            <center><LinerProgress/></center>
                        </div>
                    </div>

                    <div class="col-xl-6 lg-6">

                        <div class="card shadow ">
                            <div class="card-header py-3">
                                <h6 class="m-0 font-weight-bold text-primary">Application Usability</h6>
                            </div>
                            
                            <center><DynamicPieChart/></center>
                        </div>
                    </div>







                




                   
                </div>

            </div>
            {/* <!-- /.container-fluid --> */}

        </div>
        {/* <!-- End of Main Content --> */}

        {/* <!-- Footer --> */}
        
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
                <button class="btn btn-primary" type="button" onClick={handleClick}>Logout</button>
            </div>
        </div>
    </div>
</div>



</body>
    </div>
  )
}

export default Dashboard
