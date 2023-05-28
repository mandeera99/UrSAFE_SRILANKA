import Home from './pages/Home';
import './App.css';
import About from './pages/About';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import FAQ from './pages/FAQ';
import Condition from './pages/Condition';
import Privacy from './pages/Privacy';
import Upcoming from './pages/Upcoming';
import Medicine from './pages/Medicine';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Cart from './pages/Cart';
import UserProfilePage from './pages/user/UserProfilePage';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Pharmacy from './pages/Pharmacy';

//Phamacist part - Manuja
import Store from './pages/Store';
import Expiredmedreport from './pages/Expiredmedreport';
import Profile from './pages/Profile';
import UpdateProfile from './pages/updateProfile';
import OrderIncomeGraph from './pages/OrderIncomeGraph';

import Profileofuser from './pages/Profileofuser';
import Location from './pages/Location';
import { ChatEngine } from 'react-chat-engine';
// import RoutesWithUserChatComponent from "./componenets/user/RoutesWithUserChatComponent";

//admin
import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';
import ProductDetailsPage from './pages/ProductDetailsPage';


//dashboardComponents
import Dashboard from './pages/dashboard/Dashboard';
import ForgotPassword from './pages/dashboard/ForgotPassword';
import Register from './pages/dashboard/Register';
import AdminLogin from './pages/dashboard/Login';
import PawanUserAcc from './pages/dashboard/PawanUserAcc';
import PawanPharmacyAcc from './pages/dashboard/PawanPharmacyAcc';
import Charts from './pages/dashboard/Charts';
import Table from './pages/dashboard/Table';
import PieCharts from './pages/dashboard/PieCharts';
import LineCharts from './pages/dashboard/LineCharts';
import BarCharts from './pages/dashboard/BarCharts';
import SkillBar from './pages/dashboard/SkillBar';
import AdminChatRoomComponent from './pages/admin/AdminChatRoomComponent';
import AdminAnalyticsPage from './pages/admin/AdminAnalyticsPage';
import AdminTable from "./pages/dashboard/Charts/adminTable";
import DynamicPieChart from "./pages/dashboard/Charts/DynamicPieChart";
import DynamicBarChart from "./pages/dashboard/Charts/DynamicBarChart";
import UserAmountLine from "./pages/dashboard/Charts/UserAmountLine";
import MostsearchedMedicine from "./pages/dashboard/Charts/MostsearchedMedicine";
import MostSearchinLine from "./pages/dashboard/Charts/MostSearchinLine";
import MediUserBarchart from "./pages/dashboard/Charts/MediUserBarchart";
import SalesPieChart from "./pages/dashboard/Charts/SalesPieChart";
import OrderDetailsBarchart from "./pages/dashboard/Charts/OrderDetailsBarchart";
import ThreewayLineChart from "./pages/dashboard/Charts/ThreewayLineChart";
import TwowayBarChart from "./pages/dashboard/Charts/TwowayBarChart";
import UserGainBarChart from "./pages/dashboard/Charts/UserGainBarChart";
import UserLostBarChart from "./pages/dashboard/Charts/UserLostBarChart";
import PharmacyDetails from "./pages/dashboard/Charts/PharmacyDetails";
import CustomerDetailsTable from "./pages/dashboard/Charts/CustomerDetailsTable"
import OrdersBar from "./pages/dashboard/Charts/OrdersBar";
import AnnualSalesChart from "./pages/dashboard/Charts/AnnualSalesChart";
import Alerts from "./pages/dashboard/Alerts";
import Report from './pages/dashboard/Report';
import { render } from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import Pdfview from './pages/dashboard/pdfview';

//user components
import UserCartDetailsPage from './pages/user/UserCartDetailsPage';
import UserOrderPage from './pages/user/UserOrderPage';
import UserOrderDetailsPage from './pages/user/UserOrderDetailsPage';
// import UserProfilePage from "./pages/user/UserProfilePage";

//admin components
import AdminUsersPage from './pages/admin/AdminUsersPage';
import AdminEditUserPage from './pages/admin/AdminEditUserPage';
import AdminProductsPage from './pages/admin/AdminProductsPage';
import AdminCreateProductPage from './pages/admin/AdminCreateProductPage';
import AdminEditProductPage from './pages/admin/AdminEditProductPage';
import AdminOrdersPage from './pages/admin/AdminOrdersPage';
import AdminOrderDetailsPage from './pages/admin/AdminOrderDetailsPage';

//pharmacist kavinda
import PharmacistUsersPage from './pages/Pharmacist/PharmacistUsersPage';
import PharmacistOrdersPage from './pages/Pharmacist/PharmacistOrdersPage';
import PharmacistOrderDetailsPage from './pages/Pharmacist/PharmacistOrderDetailsPage';
import PharmacistAnalyticsPage from './pages/Pharmacist/PharmacistAnalyticsPage';

function App() {
  return (
    
    <div>
      
      <Router>
        <Routes>
          {/* <Route element={<RoutesWithUserChatComponent/>}/> */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/fAQ" element={<FAQ />} />
          <Route path="/condition" element={<Condition />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/medicine" element={<Medicine />} />
          <Route path="/medicine/search/:searchQuery/:pageNumParam" element={<Medicine />} />
          <Route path="/medicine/:pageNumParam" element={<Medicine />} />
          <Route path="/medicine/search/:searchQuery" element={<Medicine />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/medicines/:id" element={<Pharmacy/>}/>
          <Route path="/user-profile" element={<UserProfilePage />} />
          <Route path="/profileofuser/:email" element={<Profileofuser />} />
          <Route path="/location" element={<Location/>} />
          <Route path="/Dashboard/adminchat" element={<ChatEngine 
                                            height='100vh'
                                            projectID='7f2e3b60-a8b9-4d84-b4e8-2add86ea6b05'
                                            userName='nomashi'
                                            userSecret='nomashi123@' 
                                          />} />
       <Route path="/chat" element={<ChatEngine 
                                            height='100vh'
                                            projectID='7f2e3b60-a8b9-4d84-b4e8-2add86ea6b05'
                                            userName='alice'
                                            userSecret='Qwert123@' 
                                          />} />

          <Route path="/view-store" element={<Store />} />
          <Route path="/view-more2" element={<Expiredmedreport />} />
          <Route path="/analysis" element={<OrderIncomeGraph />} />
          <Route path="/profile/:email" element={<Profile />} />
          <Route path="/updateProfile/:id" element={<UpdateProfile />} />

          <Route path="/adminhome" element={<HomePage />} />
          <Route path="/product-list" element={<ProductListPage />} />
          <Route path="/product-details" element={<ProductDetailsPage />} />
          <Route path="/product-details/:id" element={<ProductDetailsPage />} />
          <Route path="*" element="Page not exist 404" />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/dashboard/forgot-password"
            element={<ForgotPassword />}
          />
          <Route path="/dashboard/register" element={<Register />} />
          <Route path="/dashboard/login" element={<AdminLogin />} />
          <Route path="/dashboard/user" element={<PawanUserAcc />} />
          <Route path="/dashboard/pharmacy" element={<PawanPharmacyAcc />} />

          <Route path="/dashboard/charts" element={<Charts />} />
          <Route path="/dashboard/table" element={<Table />} />
          <Route
            path="/dashboard/chat-room"
            element={<AdminChatRoomComponent />}
          />
          <Route path="/dashboard/graph" element={<AdminAnalyticsPage />} />
          <Route path="/dashboard/piechart" element={<PieCharts />} />
          <Route path="/dashboard/linechart" element={<LineCharts />} />
          <Route path="/dashboard/barchart" element={<BarCharts />} />
          <Route path="/dashboard/skillbar" element={<SkillBar />} />

          <Route path="/user" element={<UserProfilePage />} />
          <Route path="/user/my-orders" element={<UserOrderPage />} />
          <Route path="/user/cart-details" element={<UserCartDetailsPage />} />
          <Route
            path="/user/order-details"
            element={<UserOrderDetailsPage />}
          />
          <Route
            path="/user/order-details/:id"
            element={<UserOrderDetailsPage />}
          />

          <Route path="/admin/users" element={<AdminUsersPage />} />
          <Route path="/admin/edit-user" element={<AdminEditUserPage />} />
          <Route path="/admin/products" element={<AdminProductsPage />} />

          <Route
            path="/admin/create-new-product"
            element={<AdminCreateProductPage />}
          />

          <Route
            path="/admin/edit-product"
            element={<AdminEditProductPage />}
          />
          <Route path="/admin/orders" element={<AdminOrdersPage />} />
          <Route
            path="/admin/order-details"
            element={<AdminOrderDetailsPage />}
          />

<Route path="/dashboard/admintable" element={<AdminTable  />}/>
          <Route path="/dashboard/dypiechart" element={< DynamicPieChart/>}/>
          <Route path="/dashboard/dybarchart" element={< DynamicBarChart/>}/>
          <Route path="/dashboard/userAmount" element={<UserAmountLine  />}/>
          <Route path="/dashboard/mostsearchedMedicine" element={< MostsearchedMedicine/>}/>
          <Route path="/dashboard/mostSearchinLine" element={< MostSearchinLine/>}/>
          <Route path="/dashboard/mediuserbarchart" element={< MediUserBarchart/>}/>
          <Route path="/dashboard/salepiechart" element={<SalesPieChart />}/>
          <Route path="/dashboard/orderdetailbarchart" element={< OrderDetailsBarchart/>}/>
          <Route path="/dashboard/threewaylinechart" element={<ThreewayLineChart />}/>
          <Route path="/dashboard/twowaybarchart" element={<TwowayBarChart  />}/>
          <Route path="/dashboard/barchartgain" element={<UserGainBarChart  />}/>
          <Route path="/dashboard/barchartlost" element={<UserLostBarChart  />}/>
          <Route path="/dashboard/PharmacyTable" element={<PharmacyDetails  />}/>
          <Route path="/dashboard/customerTable" element={<CustomerDetailsTable  />}/>
          <Route path="/dashboard/ordersBar" element={<OrdersBar  />}/>
          <Route path="/dashboard/annualSalesChart" element={<AnnualSalesChart/>}/>
          <Route path="/dashboard/alerts" element={<Alerts/>}/>
          <Route path="/dashboard/report" element={<Report/>}/>
          <Route path="/dashboard/report/pdfview" element={<Pdfview/>}/>



          {/* kavinda Routes*/}
          <Route path="/Pharmacyhome" element={<PharmacistUsersPage />} />
          <Route
            path="/Pharmacist/analytics"
            element={<PharmacistAnalyticsPage />}
          />
          <Route path="/Pharmacist/Orders" element={<PharmacistOrdersPage />} />
          <Route
            path="/Pharmacists/order-details"
            element={<PharmacistOrderDetailsPage />}
          />

          <Route path="/updateProfile" element={<updateProfile />}/>
        </Routes>
      </Router>
      <Footer />
    </div>
    
  );

}

export default App;
