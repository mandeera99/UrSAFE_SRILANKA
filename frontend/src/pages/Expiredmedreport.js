import { Container } from "react-bootstrap";
import Expiredata from '../expireddata.json';
import Table from 'react-bootstrap/Table';
import Aos from "aos";
import "aos/dist/aos.css";
import {useEffect} from "react";
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import expireimg from "../Images/123.png"
import Image from "react-bootstrap/Image";
import PharmacyHead from "../componenets/PharmacyHead";
import NavBar from "../componenets/NavBar";
import Footer from "./Footer";

const Expiredmedreport = () =>{
    useEffect(() => {
        Aos.init({ duration: 300});
      });
    // const[Expiredata , setData] = useState(Expiredata)
    return(
        <div data-aos="zoom-in-up" >

       <PharmacyHead/>
       <NavBar/>
        <figure className="position-relative">
                {/* <div className="bg-image"> */}
                <Image src={expireimg} alt="medicine" className="w-100" />
        </figure>
            <div>
                
            <h4><u><span style={{color: 'red'}}><center>Expired medicine Report</center></span></u></h4>
            </div>
            
            <div>
            <p>&ensp;&ensp;</p>
            </div>
    
        <div>
            <Table striped bordered hover>
                
                
                <th>Medicine name</th>
                <th>Brand</th>
                <th>Quantity</th>
                <th>Expiry Date</th>
                <th>Edit</th>
                
            
            {
                Expiredata.map((current)=>(
                    <tr>
                       
                        <td>{current.Medicine_name}</td>
                        <td>{current.Brand}</td>
                        <td>{current.Quantity}</td>
                        <td>{current.Expiry_Date}</td>
                       
                        <td>
                            <IconButton aria-label="Edit" className='Edit'>
                             <ModeEditIcon/>
                             </IconButton>
                            <IconButton aria-label="Delete" className='delete'>
                             <DeleteIcon />
                             </IconButton>
                            </td>
                    </tr>
                ))
            }
            </Table>

        </div>
            <div>
            <p>&ensp;&ensp;</p>
            </div>
     </div>
    );
}

export default Expiredmedreport;