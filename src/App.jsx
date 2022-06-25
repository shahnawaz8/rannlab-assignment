import logo from './logo.svg';
import './App.css';
import {Routes , Route} from "react-router-dom";
import { Login } from './Components/Login';
import { Register } from './Components/Register';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        </Routes>
    </div>
  );
}

export default App;
