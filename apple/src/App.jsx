import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer'
import HomePage from './Components/HomePage';
import Store from './Components/Store';
import SignIn from './Components/SignIn';
import Cart from './Components/Cart';
function App() {
  return (
    <div className="App">
      <Header/>
    <Routes>
   <Route path='/' element={<HomePage/>}/>
   <Route path='/store' element={<Store/>}/>
   <Route path='/cart' element={<Cart/>}/>
   <Route path='/signin' element={<SignIn/>}/>
  
    </Routes>
   <Footer/>
    </div>
  );
}

export default App;
