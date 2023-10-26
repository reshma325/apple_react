import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer'
import HomePage from './Components/HomePage';
import Store from './Components/Store';
import SignIn from './Components/SignIn';
import Cart from './Components/Cart';
import IPhone from './Components/IPhone';
import IPhone15 from './Components/IPhone15';
function App() {
  return (
    <div className="App">
    
    <Routes>
   <Route path='/' element={<HomePage/>}/>
   <Route path='/store' element={<Store/>}/>
   <Route path='/cart' element={<Cart/>}/>
   <Route path='/signin' element={<SignIn/>}/>
   <Route path='/iphone15' element={<IPhone15/>}/>
   <Route path='/iphone' element={<IPhone/>}/>
  
    </Routes>

    </div>
  );
}

export default App;
