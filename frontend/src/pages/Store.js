import {useEffect} from "react";
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


import Stable from "./Stable";
import NavBar from "../componenets/NavBar";
import PharmacyHead from "../componenets/PharmacyHead";
import Footer from "./Footer";

const Store = () =>{
    useEffect(() => {
        Aos.init({ duration: 300});
      });
    return(
         <div data-aos="zoom-in-up">
            <PharmacyHead/>
            <NavBar fixed="top"/>
        

            <figure className="position-relative">
               
                <img src={storeimg} alt="storename" className="w-100" />
              
                <figcaption>
                   
                       <h3> SCL pharmacy store</h3>
                       <p> You can enter or update the details of your medicine here.</p>
                </figcaption>
               
            </figure>
            
                {/* Search bar */}
            <Container>

            <div data-aos="fade-up" className="py-4 px-5" >

                <InputGroup size="lg" className="mb-3">

                <Form.Control
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon1"
                />
                <InputGroup.Text id="basic-addon1" className='btn btn-dark'>
                <SearchIcon/>
                </InputGroup.Text>
                <InputGroup.Text className="btn btn-secondary" id="basic-addon1">
                <BsFilter/>
                </InputGroup.Text>
                </InputGroup>
            </div>


            {/* Add Butoon */}

           
            <div >
                <Stable/>
            </div>
            </Container>
            <div>
            <p>&ensp;&ensp;</p>
            </div>
        
        
        </div>
        
    );
}
export default Store;