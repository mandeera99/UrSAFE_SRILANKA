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
import Store from './pages/Store';
import Expiredmedreport from './pages/Expiredmedreport';
import Analysis from './pages/Analysis';
import Profile from './pages/Profile';
//admin
import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';
import CartPage from './pages/CartPage';
import ProductDetailsPage from './pages/ProductDetailsPage';

//dashboardComponents
import AdminDashboard from './pages/dashboard/AdminDashboard';
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
import LineProgress from './pages/dashboard/LinerProgress'
// import Circle from './pages/dashboard/Circle';
import Review from './pages/dashboard/Review';
//user components
import UserCartDetailsPage from './pages/user/UserCartDetailsPage';
import UserOrderPage from './pages/user/UserOrderPage';
import UserOredrDetailsPage from './pages/user/UserOrderDetailsPage';
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
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/fAQ" element={<FAQ />} />
          <Route path="/condition" element={<Condition />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/medicine" element={<Medicine />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/medicines/:id" element={<Pharmacy/>}/>
          <Route path="/user-profile" element={<UserProfilePage />} />

          <Route path="/view-store" element={<Store />} />
          <Route path="/view-more2" element={<Expiredmedreport />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/adminhome" element={<HomePage />} />
          <Route path="/product-list" element={<ProductListPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/product-details" element={<ProductDetailsPage />} />
          <Route path="/product-details/:id" element={<ProductDetailsPage />} />
          <Route path="*" element="Page not exist 404" />
          {/* <Route path="/dashboard" element={<Dashboard />} />
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
          <Route path="/dashboard/lineprogress" element={<LineProgress />} />
          {/* <Route path="/dashboard/circle" element={<Circle />} /> */}
          {/* <Route path="/dashboard/review" element={<Review />} />  */}


          <Route path="/admindashboard" element={<AdminDashboard/>} />
          <Route
            path="/admindashboard/forgot-password"
            element={<ForgotPassword />}
          />
          <Route path="/admindashboard/register" element={<Register />} />
          <Route path="/admindashboard/login" element={<AdminLogin />} />
          <Route path="/admindashboard/user" element={<PawanUserAcc />} />
          <Route path="/admindashboard/pharmacy" element={<PawanPharmacyAcc />} />

          <Route path="/admindashboard/charts" element={<Charts />} />
          <Route path="/admindashboard/table" element={<Table />} />
          <Route
            path="/admindashboard/chat-room"
            element={<AdminChatRoomComponent />}
          />
          <Route path="/admindashboard/graph" element={<AdminAnalyticsPage />} />
          <Route path="/admindashboard/piechart" element={<PieCharts />} />
          <Route path="/admindashboard/linechart" element={<LineCharts />} />
          <Route path="/admindashboard/barchart" element={<BarCharts />} />
          <Route path="/admindashboard/skillbar" element={<SkillBar />} />
          <Route path="/admindashboard/lineprogress" element={<LineProgress />} />
          {/* <Route path="/dashboard/circle" element={<Circle />} /> */}
          <Route path="/admindashboard/review" element={<Review />} />


          


          <Route path="/user" element={<UserProfilePage />} />
          <Route path="/user/my-orders" element={<UserOrderPage />} />
          <Route path="/user/cart-details" element={<UserCartDetailsPage />} />
          <Route
            path="/user/order-details"
            element={<UserOredrDetailsPage />}
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

          {/* kavinda Routes*/}
          <Route path="/Pharmacyhome" element={<PharmacistUsersPage />} />
          <Route
            path="/Pharmacist/analytics"
            element={<PharmacistAnalyticsPage />}
          />
          <Route path="/Orders" element={<PharmacistOrdersPage />} />
          <Route
            path="/Pharmacist/order-details"
            element={<PharmacistOrderDetailsPage />}
          />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
