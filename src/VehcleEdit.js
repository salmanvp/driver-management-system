import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function VehcleEdit() {
    const [vBrand,setVBrand] = useState('')
    const [vnumberplate,setVnumber] = useState('')
    const [response,setdata] = useState('')
    const [putres,setputres] = useState('')
    const navigate = useNavigate();
    const {id}= useParams();
    
    
    const putdata={
        Vehclebrand:vBrand,
        vehclenumberplate:vnumberplate,
    }
    useEffect(()=>{
        const fetchData = async()=>{
            try {
                const response = await axios.get(`http://127.0.0.1:8005/api/VehcleDetail/${id}/`);
                setdata(response.data);
                console.log(response.data)
            } catch (error){
                console.log('Error fetching data',error)
            }
        }
        fetchData()
      },[id]);


    const update=async()=>{
        await axios.put(`http://127.0.0.1:8005/api/VehcleDetail/${id}/`,putdata).then((res)=>{
            setputres(res.data)
            console.log(res.data)
            navigate('/vehcleview')
        })
       
    }

  return (
    <div>
      <label>VehcleBrand</label>
      <input type='text' name='vBrand' onChange={(e)=>{setVBrand(e.target.value)}}  />
      <label>Vehclenumberplate</label>
      <input type='text' name='vnumberplate' onChange={(e)=>{setVnumber(e.target.value)}}   />
      <button  onClick={update}>UPDATE</button>
    </div>
  )
}

export default VehcleEdit
