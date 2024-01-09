import React from 'react'
import {useNavigate} from 'react-router-dom';
function Home() {
    const navigate = useNavigate()
  return (
    <div>
      <button onClick={()=>{navigate('/driverview')}}>Driver View</button>
      <button onClick={()=>{navigate('/vehcleview')}}>Vehcle View</button>
    </div>
  )
}

export default Home
