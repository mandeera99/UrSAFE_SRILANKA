import { Container } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import Aos from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import expireimg from "../Images/1234.png"
import Image from "react-bootstrap/Image";
import PharmacyHead from "../components/PharmacyHead";
import NavBar from "../components/NavBar";
import Footer from "./Footer";
import axios from 'axios'
import { useStoremedsContext } from "../hooks/useStoremedsContext";

const Expiredmedreport = ({storemed}) => {

    const [storemeds, setStoremeds] = useState([]);

    useEffect(() => {
      
       const fetchExpiremeds = async () => {
        const response = await fetch('http://localhost:4000/api/exmeds/expiring/')
        const json = await response.json()

        if (response.ok){
            setStoremeds(json)
        }
    }
 fetchExpiremeds()
}, []);
    useEffect(() => {
        Aos.init({ duration: 300 });
    }, {});


    const {dispatch} = useStoremedsContext()
    const handleDeleteClick = async (id) =>{
      const response = await fetch(`/api/storemeds/${id}`, {
        method: 'DELETE'
    
      });
      const json = await response.json()
    
      if (response.ok){
        dispatch({type: 'DELETE_STOREMED', payload:json})
      }
    }
    
    return (
        <div data-aos="zoom-in-up" >

            <PharmacyHead />
            <NavBar />
            <figure className="position-relative">
                {/* <div className="bg-image"> */}
                <Image src={expireimg} alt="medicine" className="w-100" height={"450px"} />
            </figure>
            <div>

                <h4><u><span style={{ color: 'red' }}><center>Expired medicine Report</center></span></u></h4>
            </div>

            <div>
                <p>&ensp;&ensp;</p>
            </div>
            <Container>
            <div>
                <form>
                    <Table striped bordered hover>
                        <thead>
                            <tr>

                                <th>Medicine name</th>
                                <th>Brand</th>
                                <th>Quantity</th>
                                <th>Expiry Date</th>
                                <th>Edit</th>
                            </tr>
                        </thead>

                        {
                            storemeds.map((storemed) => (
                                <tbody>
                                <tr key={storemed._id}>

                                    <td>{storemed.medicine_name}</td>
                                    <td>{storemed.brand}</td>
                                    <td>{storemed.quantity}</td>
                                    <td>{storemed.expiry_date}</td>

                                    <td>
                                        
                                        <IconButton aria-label="Delete" className='delete'>
                                            <DeleteIcon type="button" onClick={(event) => handleDeleteClick(storemed._id)}/>
                                        </IconButton>
                                    </td>
                                </tr>
                                </tbody>
                            ))
                        }
                    </Table>
                </form>

            </div>
            </Container>
            <div>
                <p>&ensp;&ensp;</p>
            </div>
        </div>
    );
}

export default Expiredmedreport;