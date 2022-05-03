
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
import EmailLogin from './Pages/Home/Login/EmailLogin/EmailLogin';
import Details from './Pages/Home/Inventories/Details/Details';
import Detail from './Pages/Home/Inventories/Detail/Detail';
import ErronPage from './Pages/ErrorPage/ErronPage';
import Register from './Pages/Home/Login/Register/Register';





// const auth = getAuth(app)


function App() {
  return (
    <div className="App">

      <Header></Header>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/allinventory" element={<AllInventory />} />
      <Route path="/details/:detailsId" element={<Details />} />
      <Route path="/emaillogin" element={<EmailLogin />} />
      <Route path="/register" element={<Register />} />

      <Route path="*" element={<ErronPage />} />

   

      </Routes>
      <Footer></Footer>

    </div>
  );
}

export default App;
