
import './App.css';
import app from './firebase.init';
import {getAuth} from 'firebase/auth'
import Banner from './Pages/Home/Banner/Banner';
import Header from './Pages/Home/Header/Header';


const auth = getAuth(app)


function App() {
  return (
    <div className="App">
        <Header></Header>
        <Banner></Banner>

    </div>
  );
}

export default App;
