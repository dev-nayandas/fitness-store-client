
import './App.css';
import app from './firebase.init';
import {getAuth} from 'firebase/auth'
import Banner from './Pages/Home/Banner/Banner';
import Header from './Pages/Home/Header/Header';
import Footer from './Pages/Home/Footer/Footer';
import Inventories from './Pages/Home/Inventories/Inventories';
import Customer from './Pages/Home/Customer/Customer';
import Items from './Pages/Home/Items/Items';



const auth = getAuth(app)


function App() {
  return (
    <div className="App">
        <Header></Header>
        <Banner></Banner>
        <Inventories></Inventories>
        <Customer></Customer>
        <Items></Items>
        <Footer></Footer>

    </div>
  );
}

export default App;
