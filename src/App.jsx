import logo from './logo.svg';
import './App.css';
import {Routes , Route} from "react-router-dom";
import { Login } from './Components/Login';
import { Register } from './Components/Register';
import { Home } from './Components/Home';
import { Navbar } from './Components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        </Routes>
    </div>
  );
}

export default App;
