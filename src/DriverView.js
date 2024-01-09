import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function DriverView() {
    const [data,setdata] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        axios.get('http://127.0.0.1:8005/api/Driver/').then((res)=>{
            setdata(res.data)
            console.log(res.data)
        })
    },[])

    const deleteDriver=(id)=>{
        axios.delete(`http://127.0.0.1:8005/api/DriverDetail/${id}/`).then((res)=>{
            console.log('Data Deleted Successfully');
        })
        .catch(error =>{
            console.log("Error Deteting data:", error)

        })
    }
  return (
    <div >
      {data.map((obj)=>
      <h2 key={obj.id}>
       {obj.id}: Firstname: {obj.Firstname},  Lastname: {obj.Lastname} , vehcle:{obj.Vehcle} 
      <button onClick={()=>{navigate(`/driverEdit/${obj.id}`)}}>EDIT</button>
      <button onClick={()=>deleteDriver(obj.id)}>DELETE</button></h2>
      )}
      <button onClick={()=>{navigate('/add')}}>ADD</button>
    </div>
   
  )

}

export default DriverView
