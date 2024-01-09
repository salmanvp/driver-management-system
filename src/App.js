import './App.css';
import DriverView from './DriverView';
import Home from './Home';
import { Routes,Route } from 'react-router-dom';
import VehcleView from './VehcleView';
import DriverAdd from './DriverAdd';
import VehcleAdd from './VehcleAdd';
import DriverEdit from './DriverEdit';
import VehcleEdit from './VehcleEdit';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='' element={<Home/>} />
        <Route path='/driverview' element={<DriverView/>}/>
        <Route path='/vehcleview' element={<VehcleView/>} />
        <Route path='/add' element={<DriverAdd/>}/>
        <Route path='/Vehcleadd' element={<VehcleAdd/>}/>
        <Route path='/driverEdit/:id' element={<DriverEdit />} />
        <Route path='/vehcleEdit/:id' element={<VehcleEdit/>}/>
      </Routes>    
    </div>
  )
}

export default App;
