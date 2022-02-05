//Imports
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

//Import Components
import Navbar from './components/Navbar';
import CreateSmoothie from './components/CreateSmoothie';
import EditSmoothie from './components/EditSmoothie';
import EditCustomer from './components/EditCustomer';
import SmoothieList from './components/SmoothieList';
import CustomerList from './components/CustomerList';
import logo from './smoothie.png';

function App() {
  return (<Router>
    <div>
      <Navbar />
      <div className="page-container">
        <header>
          <img src={logo} alt="" />
          <h1>Smoothie Creator</h1>
        </header>

        <CreateSmoothie />
      </div>
    </div>
  </Router>);
}

export default App;
