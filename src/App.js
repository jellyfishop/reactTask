import './App.css';
import Home from './components/Home';

import { Route,Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Add from './components/Add';
import Delete from './components/Delete';
import Header from './components/Header';



function App() {
  return (
    <div className="App">
<Header></Header>
      

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='add' element={<Add/>}></Route>
        <Route path='delete/:id' element={<Delete/>}></Route>



      </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
