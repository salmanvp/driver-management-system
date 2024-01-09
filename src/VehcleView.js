import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function VehcleView() {
    const navigate = useNavigate()
    const [data,setdata] = useState([])
    useEffect(()=>{
        axios.get('http://127.0.0.1:8005/api/vehclecreate/').then((res)=>{
            setdata(res.data)
            console.log(res.data)
        })
    },[])

    const deletevehcle=(id)=>{
        axios.delete(`http://127.0.0.1:8005/api/VehcleDetail/${id}/`).then((res)=>{
            console.log("Data Deleted successfully")
        })
        .catch(error =>{
            console.log("error Data ",error)
        })

    }

  return (
     <div>
    {data.map((obj) => (
      <h2 key={obj.id}>
        {obj.id}: Vehclebrand:{obj.Vehclebrand}, Vehclenumberplate:{obj.vehclenumberplate}
        <button onClick={()=>{navigate(`/vehcleEdit/${obj.id}`)}}>EDIT</button>
        <button onClick={()=>deletevehcle(obj.id)}>DELETE</button>
      </h2>
    ))}
    <button onClick={() => {navigate('/Vehcleadd')}}>ADD</button>
  </div>
  )
}

export default VehcleView
