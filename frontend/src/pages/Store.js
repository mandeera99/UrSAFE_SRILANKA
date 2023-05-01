import { useState,useEffect } from "react";
import { Container } from "react-bootstrap";
import storeimg from "../Images/storeimg.jpg";
import "../css/store.css";

//import Image from "react-bootstrap/Image";

import Aos from "aos";
import "aos/dist/aos.css";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { BsFilter } from 'react-icons/bs';
import SearchIcon from '@mui/icons-material/Search';
import Table from "react-bootstrap/Table"

import Stable from "./Stable";
import NavBar from "../components/NavBar";
import PharmacyHead from "../components/PharmacyHead";
import Footer from "./Footer";
import { useAuthContext } from '../hooks/useAuthContext'

const Store = () => {

    const { user } = useAuthContext();
    // const [user, setUser] = useState(null);

    const [searchTerm, setSearchTerm] = useState('');
    const [meds, setMeds] = useState([]);

    const [filteredData, setFilteredData] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value)
    };

    const handleSearch = async (e) => {
        // searchFormeds
        e.preventDefault();
        const medicine_name = searchTerm;
        const formData = { medicine_name };
        const response = await fetch("http://localhost:4000/api/storemeds/getStoremed", {
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        setFilteredData(data);
        console.log(filteredData);



    };

    useEffect(() => {
        Aos.init({ duration: 300 });
    });
    return (
        <div data-aos="zoom-in-up">
            <PharmacyHead />
            <NavBar fixed="top" />


            <figure className="position-relative">

                <img src={storeimg} alt="storename" className="w-100" />

                <figcaption>
                    <div >
                        {user ? (


                            <div><u><h3>{user.pharmacyName} </h3></u></div>

                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>


                    <p> You can enter or update the details of your medicine here.</p>
                </figcaption>

            </figure>

            {/* Search bar */}
            <Container>

                <div data-aos="fade-up" className="py-4 px-5" >

                    <div className="input-group">
                        <input type="search" name="storemed" className="form-control rounded" placeholder="Enter your medicine" aria-label="Search" aria-describedby="search-addon" value={searchTerm} onChange={handleInputChange} />

                        <button type="button" className="btn btn-outline-primary" onClick={handleSearch} >Search <SearchIcon /></button>
                        {/* onClick={(event) => handleEditClick(event, storemed)} */}
                    </div>
                    {filteredData?.length > 0 && (
                        <Table>
                            <thead>
                                <tr >
                                    <th>Lot No</th>
                                    <th>Medicine name</th>
                                    <th>Brand</th>
                                    <th>Quantity</th>
                                    <th>Expiry Date</th>
                                    <th>Supplier Name</th>
                                    {/* <th>Edit</th> */}
                                </tr>
                            </thead>

                            <tbody>
                                {filteredData?.map((filteredData) => (
                                    <tr key={filteredData?._id}>
                                        <td>{filteredData?.lot_no}</td>
                                        <td>{filteredData?.medicine_name}</td>
                                        <td>{filteredData?.brand}</td>
                                        <td>{filteredData?.quantity}</td>
                                        <td>{filteredData?.expiry_date}</td>
                                        <td>{filteredData?.supplier_name}</td>

                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    )
                    }



                </div>
                <div >
                    <Stable />
                </div>

            </Container>
            <div>
                <p>&ensp;&ensp;</p>
            </div>


        </div>

    );
}
export default Store;