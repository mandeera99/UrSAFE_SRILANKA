import { Container } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import Aos from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
import { useStoremedsContext } from "../hooks/useStoremedsContext";
import { useAuthContext } from '../hooks/useAuthContext'
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';


const ExpireMedfilter = ({storemed}) => {
    const {user} = useAuthContext();
    const {dispatch} = useStoremedsContext()

    const [storemeds, setStoremeds] = useState([]);

    useEffect(() => {
      
       const fetchExpirefiltermeds = async () => {
        const response = await fetch(`http://localhost:4000/api/exmeds/expiring/${user.id}`)
        const json = await response.json()

        if (response.ok){
            setStoremeds(json)
        }
    }
 fetchExpirefiltermeds()
}, [user,storemeds]);
    useEffect(() => {
        Aos.init({ duration: 300 });
    }, {});

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

            <div>

                <h4><u><span style={{ color: 'black' }}>Expired medicine Report</span></u></h4>
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

                        <tbody>
                         {storemeds.slice(0, 5).map((storemed) => (
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
    ))}
  </tbody>
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

export default ExpireMedfilter;