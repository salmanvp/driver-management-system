import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function VehcleAdd() {
    const navigate = useNavigate()
    const [VBrand,setVBrand] = useState('')
    const [Vnumber,setVnumber] = useState('')
    const data={
        Vehclebrand:VBrand,
        vehclenumberplate:Vnumber,
    }
    const send= async()=>{
        axios.post('http://127.0.0.1:8005/api/vehclecreate/',data).then((res)=>{
            console.log(res.data)
        }).catch((err)=>{
            console.log(err);
          })
        navigate('/vehcleview')

    }

  return (
    <div>
      <label>VehcleBrand</label>
      <input type='text' name='vehclebrand' onChange={(e)=>{setVBrand(e.target.value)}} />
      <label>Vehclenumberplate</label>
      <input type='text' name='vehclenumberplate' onChange={(e)=>{setVnumber(e.target.value)}}  />
      <button type='submit' value='register' onClick={send}>SEND</button>
    </div>
  )
}

export default VehcleAdd
