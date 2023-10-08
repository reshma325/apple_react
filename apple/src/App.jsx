import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
function App() {
  return (
    <div className="App">
    <Routes>
    <Route exact path='/header' element={<Header />} />
    </Routes>
    </div>
  );
}

export default App;
