import Home from './pages/Home';
import './App.css';
import About from './pages/About';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import SignIn from './pages/SignIn';
import SignUp from './pages/user/SignUp';
import FAQ from './pages/FAQ';
import Condition from './pages/Condition';
import Privacy from './pages/Privacy';
import Upcoming from './pages/Upcoming';
import Medicine from './pages/Medicine';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Cart from './pages/Cart';
import UserProfilePage from "./pages/user/UserProfilePage";
import Header from './pages/Header';
import Footer from './pages/Footer';



function App() {
  return (
    <div>
      <Header/>
      <Router>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/signIn' element={<SignIn />}/>
          <Route path='/signUp' element={<SignUp />}/>
          <Route path='/fAQ' element={<FAQ/>}/>
          <Route path='/condition' element={<Condition/>}/>
          <Route path='/privacy' element={<Privacy/>}/>
          <Route path='/upcoming' element={<Upcoming/>}/>
          <Route path='/medicine' element={<Medicine/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/blog' element={<Blog/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/user-profile' element={<UserProfilePage/>}/>







        </Routes>
      </Router>
      <Footer/>
        </div>

  )
}

export default App;
