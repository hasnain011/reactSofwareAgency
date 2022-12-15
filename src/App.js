import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Service from './pages/Service';
import About from './pages/About';
import Contact from './pages/Contact';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/service' element={<Service/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
  
  );
}

export default App;
