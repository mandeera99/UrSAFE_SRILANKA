import React,{  useEffect,useState} from "react";
import styled from 'styled-components';

export default function CustomerDetailsTable({ userData }){
    const [data,setData]= useState([]);


    useEffect(()=>{
        fetch("http://localhost:4000/getAllCus",{
            method:"GET",
        })
        .then((res)=>res.json())
        .then((data)=>{
            console.log(data,"userData");
            setData(data.data);
        });
    },[]);




    const logOut = () =>{
        window.localStorage.clear();
        window.location.href ='./signup';
    };

return(
    <Container >

        <div style={{width: 'auto'}}>
    
           <center><h1>Customer Details</h1></center> 
        <table style={{ width: 1000, border: '2px solid black', borderCollapse: 'collapse' }}>
        <tr  style={{ width: 1000, border: '2px solid black', borderCollapse: 'collapse' }}>
            
            <th>Name</th>
            <th>Email</th>
            <th>phoneNumber</th>
            <th>Address</th>
            <th>City</th>
            <th>Zip Code</th>
            <th>State</th>
         </tr>  
         {data.map(i=>{
            return(
                <tr  style={{ width: 500, border: '2px solid black', borderCollapse: 'collapse' }}>
                    
                    <td>{i.name}</td>
                    <td>{i.email}</td>
                    <td>{i.phoneNumber}</td>
                    <td>{i.address}</td>
                    <td>{i.city}</td>
                    <td>{i.zipCode}</td>
                    <td>{i.state}</td>
                </tr>
            )
         })
            
         }


        </table>


        </div>
        <div>

        </div>
    </Container>
)
}
const Container =styled.div`
width: 100%;
height: fit-content;
max-width: 1400px;
margin: auto;
background-color: rgb(234, 237, 237);

`;
const LogOUtbutton =styled.div`
width:20%;
height:40px;
background-color:#f3b414;
border:none;
outline:none;
border-radius:10px;
margin-top:10px;
`;

const table = styled.table`
border: 2px solid black;
border-collapse: collapse;

`;