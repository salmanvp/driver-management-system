import React, {  useState ,useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
function DriverAdd() {
    const navigate = useNavigate()
    const [firstname,setFirstname] = useState('')
    const [lastname,setLastname] = useState('')
    const [vehcle,setvehcle] = useState('')
    const [vehcledata,setvehcledata] = useState([])
    const data={
        Firstname:firstname,
        Lastname:lastname,
        Vehcle:vehcle,
    }
    const send= async()=>{
        axios.post('http://127.0.0.1:8005/api/Driver/',data).then((res)=>{
            console.log(data)
            navigate('/driverview')

        })
    }

    useEffect(()=>{
      axios.get('http://127.0.0.1:8005/api/vehclecreate/').then((response)=>{
        setvehcledata(response.data)
        console.log("bbb")
        console.log(response.data)
      })
    },[])
  return (
    <div>
    <label>Firstname</label>
      <input  type='text' name='firstname' onChange={(e)=>{setFirstname(e.target.value)}} />
    <label>Lastname</label>
      <input type='text' name='Lastname' onChange={(e)=>{setLastname(e.target.value)}} /> 
    <label>Vehcle</label>
    <input type='text' name='Vehcle' onChange={(e)=>{setvehcle(e.target.value)}}/>

      <button type='submit' value='register'  onClick={send}>SEND</button>
      
      <div>
        <h2>vehcles</h2>
        {vehcledata.map((i)=>
        <h2 key={i.id}>
          {i.id}: {i.Vehclebrand} - {i.vehclenumberplate}
        </h2>
        )}
      </div>

    </div>
  )
}

export default DriverAdd
