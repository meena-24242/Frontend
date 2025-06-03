import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from './Components/Signup';
import Home from './Components/Home';
import About from './Components/About';
import Update from './Components/Update';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/Signup' element={<Signup/>}></Route>
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Update' element={<Update/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
