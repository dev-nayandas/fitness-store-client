
import './App.css';
import app from './firebase.init';
import { getAuth } from 'firebase/auth'
import Banner from './Pages/Home/Banner/Banner';
import Header from './Pages/Home/Header/Header';
import Footer from './Pages/Home/Footer/Footer';
import Inventories from './Pages/Home/Inventories/Inventories';
import Customer from './Pages/Home/Customer/Customer';
import Items from './Pages/Home/Items/Items';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home/Home';
import AllInventory from './Pages/AllInventory/AllInventory';





const auth = getAuth(app)


function App() {
  return (
    <div className="App">

      <Header></Header>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/allinventory" element={<AllInventory />} />
   

      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
