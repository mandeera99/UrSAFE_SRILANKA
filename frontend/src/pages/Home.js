import React, { useState, useEffect, useContext } from "react";
import { Link ,Outlet} from 'react-router-dom';
import { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";
import SearchIcon from '@mui/icons-material/Search';
import { Search } from '@mui/icons-material';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Chart from 'chart.js/auto';
import 'chartjs-adapter-date-fns';
import axios from 'axios';
import '../App.css';
import { AuthContext } from '../context/AuthContext';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
// const graphData = [
//     { name: 'New Lanka', price: 12 },
//     { name: 'Isuru', price: 12.9 }
// ];

// import MostsearchedMedicine from './dashboard/Charts/MostsearchedMedicine';
function Home() {
    const [graphData, setGraphData] = useState([]);

    const [searchHistory, setSearchHistory] = useState([]);

    const handleViewSearchHistory = async () => {
        try {
            const response = await axios.get('/api/searchHistory/getsearch-history', { params: { email } });
            setSearchHistory(response.data);
            console.log('Response Data:', response.data);

        } catch (error) {
            console.error('Error fetching search history:', error);
        }
    };
    // const handleViewSearchHistory = async () => {
    //     try {
    //       const response = await axios.get('/api/searchHistory/getsearch-history');
    //       setSearchHistory(response.data);
    //     } catch (error) {
    //       console.error('Error fetching search history:', error);
    //     }
    //   };

    console.log()

    const [searchTerm, setSearchTerm] = useState('');
    const [pharmacies, setPharmacies] = useState([]);
    const [tabIndex, setTabIndex] = useState(0);
    const { user } = useContext(AuthContext);
    const { email } = user || {};
    //const email = user && user.email ? user.email : 'no user';



    const [medicines, setMedicines] = useState([]);

    // Extracting price and pharmacy name from the API response

    // const handleSearch2 = async () => {
    //     const response = await fetch(`http://localhost:4000/api/medicines?q=${searchTerm}`);
    //     const data = await response.json();
    //     // Extracting price and pharmacy name from the API response
    //     const formattedData = data.map((pharmacy) => ({
    //         name: pharmacy.pharmacy_name,
    //         price: pharmacy.price
    //     }));
    //     setPharmacies(formattedData);
    // }
    // console.log(email);
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    }
    const saveSearchHistory = async () => {
        try {
            await axios.post('/api/searchHistory/search-history', { email, searchTerm });
            console.log('Search history saved successfully!');
        } catch (error) {
            console.error('Error saving search history:', error);
        }
    };

    // const handleSearch = async () => {
    //     const response = await fetch(`http://localhost:4000/api/medicines?q=${searchTerm}`);
    //     const data = await response.json();
    //     console.log(data);
    //     setPharmacies(data);
    //     console.log(pharmacies);
    // }
    // useEffect(() => {
    //     console.log(pharmacies); // Log the updated pharmacies state
    // }, [pharmacies]);
    const handleSearch = async () => {
        try {
            const response = await fetch(`http://localhost:4000/api/medicines?q=${searchTerm}`);
            const data = await response.json();
            console.log(data);
            setPharmacies(data);
            console.log(pharmacies);

            // Generate the data array for the graph using the fetched pharmacies data
            const filteredData = pharmacies
                .filter((pharmacy) => pharmacy.medi_name.includes(searchTerm))
                .map((pharmacy) => ({
                    name: pharmacy.pharmacy_name,
                    price: parseFloat(pharmacy.price.replace('Rs', '')), // Remove 'Rs' symbol and convert to float
                }));
                console.log('Graph Data:', graphData);                setGraphData(filteredData);
        } catch (error) {
            console.error('Error searching medicines:', error);
        }
    };
    // const dataa = pharmacies.map((pharmacy) => ({
    //     name: pharmacy.pharmacy_name,
    //     price: pharmacy.price,
    //   }));

    return (

        <Fragment fluid><Header />
            <div fluid>
                {/* <MostsearchedMedicine/> */}
                {/* <!-- Pre Loader --> */}
                {/*      <div className="preloader">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="spinner"></div>
                </div>
            </div>
        </div> */}

                {/*  <!-- End Pre Loader -->
                

       

        <!-- Banner Area --> */}

                <div className="banner-area banner-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="banner-content">
                                    <div className="search-history-button-container">
                                        {email && (
                                            <button className="btn btn-outline-primary" onClick={handleViewSearchHistory}>View Search History</button>
                                        )}</div>
                                    <div>

                                        {searchHistory.length > 0 && (

                                            <ul>
                                                <h2>Search History</h2>
                                                {searchHistory.map((item) => (
                                                    <li key={item._id}>{item.searchTerm}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                    <span><h3>THE BEST WAY TO SEARCH MEDICINE</h3></span>
                                    <div className="input-group">
                                        <input type="search" className="form-control rounded" placeholder="Enter your medicine" aria-label="Search" aria-describedby="search-addon" value={searchTerm} onChange={handleInputChange} />
                                        {/*    {pharmacies.length > 0 && (
                                            <select>
                                                {pharmacies.map((pharmacy) => (
                                                    <option key={pharmacy.id} value={pharmacy.id}>{pharmacy.pharmacy_name} ({pharmacy.location})</option>
                                                ))}
                                            </select>
                                        )} */}
                                        <button type="button" className="btn btn-outline-primary" onClick={() => {
                                            handleSearch();
                                            saveSearchHistory();

                                        }}  >Search <SearchIcon /></button>


                                    </div>
                                    {/* {pharmacies.length > 0 && (
                                            <table>
                                                <thead>
                                                    <tr>
                                                        <th>Pharmacy Name</th>
                                                        <th>Location</th>
                                                        <th>Details</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {pharmacies.map((pharmacy) => (
                                                        <tr key={pharmacy.id}>
                                                            <td>{pharmacy.pharmacy_name}</td>
                                                            <td>{pharmacy.location}</td>
                                                            <td>
                                                                <Link to={`/medicines/${pharmacy._id}`}>
                                                                    <button>View Details</button>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        )} */}
                                    {/* {pharmacies.length > 0 && (
                                        <table border="1">
                                         
                                                <tr>
                                                    <th>Pharmacy Name</th>
                                                    <th>City</th>
                                                    <th>Price</th>
                                                    <th>Details</th>
                                                    <th>Location</th>

                                                </tr>
                                            
                                                {pharmacies.map((pharmacy) => (
                                                    <tr key={pharmacy.id}>
                                                        <td>{pharmacy.pharmacy_name}</td>
                                                        <td>{pharmacy.city}</td>
                                                        <td>${pharmacy.price}</td>
                                                        <td>
                                                            <div className="buttons">
                                                                <button className="view-btn">
                                                                    <Link to={`/medicines/${pharmacy._id}`}>View Details</Link>
                                                                </button>
                                                                </div></td><td> <div className="buttons">
                                                                <button className="location-btn">
                                                                    <a href={`https://www.google.com/maps/search/${pharmacy.location}`} target="_blank" rel="noreferrer">Location</a>
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                        </table>
                                    )} */}

                                    {/* {pharmacies.length > 0 && (
                                        <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
                                            <TabList>
                                                <Tab>Table</Tab>
                                                <Tab>Graph</Tab>
                                            </TabList>

                                            <TabPanel>
                                                <table border="1px solid black">
                                                    <thead>
                                                        <tr>
                                                            <th className="cell-with-border">Pharmacy Name</th>
                                                            <th className="cell-with-border">City</th>
                                                            <th className="cell-with-border">Price</th>
                                                            <th className="cell-with-border">Details</th>
                                                            <th className="cell-with-border">Location</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {searchTerm !== '' ? (
                                                            pharmacies
                                                                .filter((pharmacy) => pharmacy.medi_name.includes(searchTerm))
                                                                .map((pharmacy) => (
                                                                    <tr key={pharmacy.id}>
                                                                        <td className="cell-with-border">{pharmacy.pharmacy_name}</td>
                                                                        <td className="cell-with-border">{pharmacy.city}</td>
                                                                        <td className="cell-with-border">{pharmacy.price}</td>
                                                                        <td className="cell-with-border">
                                                                            <div className="buttons">
                                                                                <button className="view-btn">
                                                                                    <Link to={`/medicines/${pharmacy._id}`}>View Details</Link>
                                                                                </button>
                                                                            </div>
                                                                        </td>
                                                                        <td className="cell-with-border">
                                                                            <div className="buttons">
                                                                                <button className="location-btn">
                                                                                    <a href={`https://www.google.com/maps/search/${pharmacy.pharmacy_name} ${pharmacy.location}`} target="_blank" rel="noreferrer">Location</a>
                                                                                </button>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                ))
                                                        ) : (
                                                            pharmacies.map((pharmacy) => (
                                                                <tr key={pharmacy.id}>
                                                                    <td className="cell-with-border">{pharmacy.pharmacy_name}</td>
                                                                    <td className="cell-with-border">{pharmacy.city}</td>
                                                                    <td className="cell-with-border">{pharmacy.price}</td>
                                                                    <td className="cell-with-border">
                                                                        <div className="buttons">
                                                                            <button className="view-btn">
                                                                                <Link to={`/medicines/${pharmacy._id}`}>View Details</Link>
                                                                            </button>
                                                                        </div>
                                                                    </td>
                                                                    <td className="cell-with-border">
                                                                        <div className="buttons">
                                                                            <button className="location-btn">
                                                                                <a href={`https://www.google.com/maps/search/${pharmacy.pharmacy_name} ${pharmacy.location}`} target="_blank" rel="noreferrer">Location</a>
                                                                            </button>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            ))
                                                        )}
                                                    </tbody>
                                                </table> */}
                                    {pharmacies.length > 0 && (
                                        <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
                                            <TabList>
                                                <Tab>Table</Tab>
                                                <Tab>Graph</Tab>
                                            </TabList>

                                            <TabPanel>
                                                <table border="1px solid black">
                                                    <thead>
                                                        <tr>
                                                            <th className="cell-with-border">Pharmacy Name</th>
                                                            <th className="cell-with-border">City</th>
                                                            <th className="cell-with-border">Price</th>
                                                            <th className="cell-with-border">Details</th>
                                                            <th className="cell-with-border">Location</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {searchTerm !== '' ? (
                                                            pharmacies
                                                                .filter((pharmacy) => pharmacy.medi_name.includes(searchTerm))
                                                                .map((pharmacy) => (
                                                                    <tr key={pharmacy.id}>
                                                                        <td className="cell-with-border">{pharmacy.pharmacy_name}</td>
                                                                        <td className="cell-with-border">{pharmacy.city}</td>
                                                                        <td className="cell-with-border">{pharmacy.price}</td>
                                                                        <td className="cell-with-border">
                                                                            <div className="buttons">
                                                                                <button className="view-btn">
                                                                                    <Link to={`/medicines/${pharmacy._id}`}>View Details</Link>
                                                                                </button>
                                                                            </div>
                                                                        </td>
                                                                        <td className="cell-with-border">
                                                                            <div className="buttons">
                                                                                <button className="location-btn">
                                                                                    <a href={`https://www.google.com/maps/search/${pharmacy.pharmacy_name} ${pharmacy.location}`} target="_blank" rel="noreferrer">Location</a>
                                                                                </button>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                ))
                                                        ) : (
                                                            // Add a condition to check if the search term is empty
                                                            <tr>
                                                                <td colSpan="5" className="cell-with-border">Please enter a medicine name to search.</td>
                                                            </tr>
                                                        )}
                                                    </tbody>
                                                </table>




                                            </TabPanel>

                                            <TabPanel>
                                                <div>
                                                    <div className="card shadow mb-4">
                                                        <div className="card-header py-3">
                                                            <h6 className="m-0 font-weight-bold text-primary">Pharmacy names according to prices</h6>
                                                        </div>
                                                        <div className="card-body">
                                                            <div className="chart-bar">
                                                                <BarChart width={500} height={300} data={searchTerm !== '' ? graphData : []}>
                                                                    <CartesianGrid strokeDasharray="3 3" />
                                                                    <XAxis dataKey="name" />
                                                                    <YAxis />
                                                                    <Tooltip />
                                                                    <Legend />
                                                                    <Bar dataKey="price" fill="#8884d8" />
                                                                </BarChart>
                                                                <canvas id="myBarChart"></canvas>

                                                            </div>
                                                            <hr /></div></div></div>


                                                <h2>Graph</h2>
                                            </TabPanel>
                                        </Tabs>
                                    )}
                                    <h1 className="text-black">UrSAFE SriLanka</h1>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="banner-img">
                        <img src="assets/img/home-one/home-one-img.png" alt="Images" />
                    </div>
                    <div className="banner-shape">
                        <div className="shape1">
                            <img src="assets/img/home-one/shape1.png" alt="Images" />
                        </div>
                        <div className="shape2">
                            <img src="assets/img/home-one/shape2.png" alt="Images" />
                        </div>
                    </div>
                </div>
                {/*        <!-- Banner Area End -->

        <!-- Banner Bottom --> */}
                <div className="banner-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="banner-bottom-card">
                                    <i className='flaticon-call'></i>
                                    <div className="content ">
                                        <span>If you have any issue contact us</span>
                                        <h3><a href="tel:+94 (76) 750 3287" className="link-underline">+94 (76) 750 3287</a> </h3>
                                        <div ><p className="text-white">WELCOME URSAFE SRI-LANKA WEB APPLICATION</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*       <!-- Banner Bottom End -->

        <!-- About Area --> */}
                <div className="about-area pt-100 pb-70">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="about-img">
                                    <img src="assets/img/about-img/about-img.jpg" crossorigni="annonymous" alt="Images" />
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="about-content">
                                    <div className="section-title">
                                        <span>About Us</span>
                                        <h2>We Are Your Trusted Friend</h2>
                                        <p>UrSAFE SL is a trusted name of Medical Services who is always at your side and your health is our first priority.</p>
                                        <p>Due to the economical crisis raised in Sri lanka,  importing many essential things are limited including medicine. Many hospitals ask patients to buy some of rare medicines from outside pharmacies. But some of these medicines are not available in every pharmacy. So, they have to go and ask these pharmacies one by one or contact them one by one. Other than that people ask help from the others using social media such as Facebook and  whatsapp.
                                            for this prblem,The solution we are going to introduce is UrSAFE SL.
                                            UrSAFE SL is a web based application which mainly support customer to search and find medicines.
                                        </p>
                                    </div>
                                    <div className="about-card">
                                        <i className='flaticon-24-hours bg-one'></i>
                                        <div className="content">
                                            <span>24/7</span>
                                            <p>You can place oders at any time  </p>
                                        </div>
                                    </div>

                                    <div className="about-card">
                                        <i className='flaticon-ambulance-2 bg-two'></i>
                                        <div className="content">
                                            <span>Emergency Support</span>
                                            <p>If there is an emergenacy moment please contact our one of the top pharmacies</p>
                                        </div>
                                    </div>

                                    <div className="about-btn">
                                        <a href="/about" className="default-btn link-underlines">Explore More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*       <!-- About Area End -->

       

        <!-- Service Area --> */}
                <section className="service-area pt-100 pb-70">
                    <div className="container">
                        <div className="section-title text-center">
                            <h2>Services That We Provide</h2>
                            <div className="section-icon">
                                <div className="icon">
                                    <i className="flaticon-dna"></i>
                                </div>
                            </div>
                            <p>
                                We provide excellent services for your ultimate good health. Here some of the services are included
                                for your better understand that we are always at your side.
                            </p>
                        </div>
                        <div className="row pt-45">
                            <div className="col-lg-4 col-md-6">
                                <div className="service-card">
                                    <a href="/services"><img src="assets/img/services/service-img1.jpg" alt="Images" /></a>
                                    <div className="service-content">
                                        <div className="service-icon">
                                            <i className="flaticon-doctor"></i>
                                        </div>
                                        <h3><a href="/services" className="link-underlines">Medical search tool</a></h3>
                                        <div className="content">
                                            <p>We provide a search tool to search medicine.</p>
                                        </div>
                                    </div>
                                    <div className="service-shape-1">
                                        <img src="assets/img/services/service-shape1.png" alt="Images" />
                                    </div>
                                    <div className="service-shape-2">
                                        <img src="assets/img/services/service-shape2.png" alt="Images" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="service-card">
                                    <a href="/services"><img src="assets/img/services/service-img2.jpg" alt="Images" /></a>
                                    <div className="service-content">
                                        <div className="service-icon">
                                            <i className="flaticon-syringe"></i>
                                        </div>
                                        <h3><a href="/services" className="link-underlines">Oder your medication</a></h3>
                                        <div className="content">
                                            <p>We provide service, you can oder the medicine that you need.</p>
                                        </div>
                                    </div>
                                    <div className="service-shape-1">
                                        <img src="assets/img/services/service-shape1.png" alt="Images" />
                                    </div>
                                    <div className="service-shape-2">
                                        <img src="assets/img/services/service-shape2.png" alt="Images" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="service-card">
                                    <a href="/services"><img src="assets/img/services/service-img3.jpg" alt="Images" /></a>
                                    <div className="service-content">
                                        <div className="service-icon">
                                            <i className="flaticon-male"></i>
                                        </div>
                                        <h3><a href="/services" className="link-underlines">Expiry date tracking system</a></h3>
                                        <div className="content">
                                            <p>As a pharmaciest you can search medicine expirations.</p>
                                        </div>
                                    </div>
                                    <div className="service-shape-1">
                                        <img src="assets/img/services/service-shape1.png" alt="Images" />
                                    </div>
                                    <div className="service-shape-2">
                                        <img src="assets/img/services/service-shape2.png" alt="Images" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="service-card">
                                    <a href="/services"><img src="assets/img/services/service-img4.jfif" alt="Images" /></a>
                                    <div className="service-content">
                                        <div className="service-icon">
                                            <i className="flaticon-stethoscope-1"></i>
                                        </div>
                                        <h3><a href="/services" className="link-underlines">Location tracking</a></h3>
                                        <div className="content">
                                            <p>You can get a knowledge about where the pharmaciest are located.</p>
                                        </div>
                                    </div>
                                    <div className="service-shape-1">
                                        <img src="assets/img/services/service-shape1.png" alt="Images" />
                                    </div>
                                    <div className="service-shape-2">
                                        <img src="assets/img/services/service-shape2.png" alt="Images" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="service-card">
                                    <a href="/services"><img src="assets/img/services/service-img5.jpg" alt="Images" /></a>
                                    <div className="service-content">
                                        <div className="service-icon">
                                            <i className="flaticon-caduceus-symbol"></i>
                                        </div>
                                        <h3><a href="/services" className="link-underlines">Pharmacy Service</a></h3>
                                        <div className="content">
                                            <p>We provide  wide range of medical pharmaceis that the medicine is available.</p>
                                        </div>
                                    </div>
                                    <div className="service-shape-1">
                                        <img src="assets/img/services/service-shape1.png" alt="Images" />
                                    </div>
                                    <div className="service-shape-2">
                                        <img src="assets/img/services/service-shape2.png" alt="Images" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="service-card">
                                    <a href="/services"><img src="assets/img/services/service-img6.jpg" alt="Images" /></a>
                                    <div className="service-content">
                                        <div className="service-icon">
                                            <i className="flaticon-ambulance-2"></i>
                                        </div>
                                        <h3><a href="/services" className="link-underlines">Emergency Service</a></h3>
                                        <div className="content">
                                            <p>We provide an emergenacy service that you can get from us you can contact our top pharmacies.</p>
                                        </div>
                                    </div>
                                    <div className="service-shape-1">
                                        <img src="assets/img/services/service-shape1.png" alt="Images" />
                                    </div>
                                    <div className="service-shape-2">
                                        <img src="assets/img/services/service-shape2.png" alt="Images" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="service-dots">
                        <img src="assets/img/services/service-dots.png" alt="" />
                    </div>
                </section>
                {/*      <!-- Service Area End -->

       


        <!-- Emergency Area --> */}
                <div className="emergency-area ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7">
                                <div className="emergency-content">
                                    <h2>Get <b>Emergency</b> Care 24/7</h2>
                                    <p>We are always at your side. We are 24 hours available for you in emergency situation.</p>
                                    <div className="emergency-icon-content">
                                        <i className="flaticon-24-hours-1"></i>
                                        <h5 className="text-white">You can find emergency medicines through our application.</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="emergency-shape">
                        <img src="assets/img/emergency/emergency-shape.png" alt="Images" />
                    </div>
                </div>
                {/*         <!-- Emergency Area End -->

        <!-- Blog Area --> */}
                <div className="blog-area pt-100 pb-70">
                    <div className="container">
                        <div className="section-title text-center">
                            <h2>Our News & Updates</h2>
                            <div className="section-icon">
                                <div className="icon">
                                    <i className="flaticon-dna"></i>
                                </div>
                            </div>
                            <p>
                                We provide excellent services for your ultimate good health. Here some of the services are included
                                for your better understand that we are always at your side.
                            </p>
                        </div>
                        <div className="row pt-45">
                            <div className="col-lg-4 col-md-6">
                                <div className="blog-card">
                                    <a href="/blog-det">
                                        <img src="assets/img/blog/blog-img.jpg" alt="Images" />
                                    </a>
                                    <div className="content">
                                        <ul>
                                            <li>
                                                <i className="flaticon-calendar-1"></i>
                                                Jan.18,2023
                                                <span>
                                                    <a href="#">Drug</a>
                                                </span>
                                            </li>
                                        </ul>
                                        <h3>
                                            <a href="/blog-det" className="link-underline"> Drugs Advertised on TV Aren't Better Than Existing Options: Study</a>
                                        </h3>
                                        <p> Most drugs advertised on television don’t work better than existing alternatives, a new analysis shows. And manufacturers spend more on advertising for those less beneficial drugs than for ones that work better.....</p>
                                        <a href="/blog-det" className="more-btn link-underlines">
                                            Read More <i className="flaticon-right-arrow"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="blog-card">
                                    <a href="/blog-det">
                                        <img src="assets/img/blog/blog-img2.jpg" alt="Images" />
                                    </a>
                                    <div className="content">
                                        <ul>
                                            <li>
                                                <i className="flaticon-calendar-1"></i>
                                                Nov. 17, 2022
                                                <span>
                                                    <a href="#">Drug</a>
                                                </span>
                                            </li>
                                        </ul>
                                        <h3>
                                            <a href="/blog-det" className="link-underline"> A Vaccine Against Deadly Fentanyl Might Be Near</a>
                                        </h3>
                                        <p>Researchers report they have created a vaccine to fight fentanyl addiction, in a potential breakthrough in the opioid epidemic....</p>
                                        <a href="/blog-det" className="more-btn link-underlines">
                                            Read More <i className="flaticon-right-arrow"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                                <div className="blog-card-side">
                                    <ul>
                                        <li>
                                            <i className="flaticon-calendar-1"></i>
                                            feb.19, 2023
                                            <span>
                                                <a href="#">Medicine</a>
                                            </span>
                                            <a href="/blog-det" className="link-underline">
                                                <h3> Give a better knowledge about find medicine application session - 2023</h3>
                                            </a>
                                        </li>

                                        <li>
                                            <i className="flaticon-calendar-1"></i>
                                            may.19, 2023
                                            <span>
                                                <a href="#">Medicine</a>
                                            </span>
                                            <a href="/blog-det" className="link-underline">
                                                <h3> Give a knowledge for pharmaceis about our application</h3>
                                            </a>
                                        </li>

                                        <li>
                                            <i className="flaticon-calendar-1"></i>
                                            may.19, 2023
                                            <span>
                                                <a href="#">Medicine</a>
                                            </span>
                                            <a href="/blog-det" className="link-underline">
                                                <h3> Aim to develop deliver system and attached to our application</h3>
                                            </a>
                                        </li>


                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-12">
                                <div className="blog-more-btn">
                                    <a href="#" className="default-btn link-underlines">Explore More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="blog-shape-icon">
                        <i className="flaticon-dna"></i>
                    </div>
                </div>
                {/*         <!-- Blog Area End -->

        
                    {/*         <!-- Subscribe Area -->
 */}        <div className="subscribe-area ptb-100">
                    <div className="container">
                        <div className="newsletter-area">
                            <h2>Subscribe Our <b>Newsletter</b></h2>
                            <p>Enter your mail to get our news and updates.</p>
                            <form className="newsletter-form" data-toggle="validator" method="POST">
                                <input type="email" className="form-control" placeholder="Enter Your Email Address" name="EMAIL" required autocomplete="off" />
                                <button className="subscribe-btn" type="submit">
                                    Submit
                                </button>
                                <div id="validator-newsletter" className="form-result"></div>
                            </form>
                        </div>
                    </div>
                    <div className="subscribe-shape">
                        <img src="assets/img/subscribe-img/subscribe-shape.png" alt="Images" />
                    </div>
                </div>
                {/*         <!-- Subscribe Area End -->
 */}

            </div>
        </Fragment>
    )
}


export default Home;