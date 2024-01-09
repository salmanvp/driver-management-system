import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function DriverEdit() {
    const [firstname,setFirstname] = useState('')
    const [lastname,setLastname] = useState('')
    const [vehcle,setvehcle] = useState('')
    const [response,setdata] = useState('')
    const [putres,setputres] = useState('')
    const navigate =useNavigate()
    const {id} = useParams();
    
        const putdata={
        Firstname:firstname,
        Lastname:lastname,
        Vehcle:vehcle,
    }
    console.log(id)
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`http://127.0.0.1:8005/api/DriverDetail/${id}/`);
            setdata(response.data);
            console.log(response.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
      
        fetchData();
      },[id]);
      
    const put=async()=>{
        await axios.put(`http://127.0.0.1:8005/api/DriverDetail/${id}/`,putdata).then((res)=>{
            setputres(res.data)
            console.log(res.data)
            navigate('/driverview')
        })
       
    }
  return (
    <div>
      <label>Firstname</label>
      <input  type='text' name='firstname' onChange={(e)=>{setFirstname(e.target.value)}}  />
    <label>Lastname</label>
      <input type='text' name='lastname' onChange={(e)=>{setLastname(e.target.value)}}  /> 
    <label>Vehcle</label>
    <input type='text' name='vehcle' onChange={(e)=>{setvehcle(e.target.value)}} />
    <button  onClick={put}>UPDATE</button>
    </div>
  )
}

export default DriverEdit
