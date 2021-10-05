//Imports
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

//Import Components
import Header from './components/Header';
import CreateSmoothie from './components/CreateSmoothie';
import CreateCustomer from './components/CreateCustomer';
import EditSmoothie from './components/EditSmoothie';
import EditCustomer from './components/EditCustomer';
import SmoothieList from './components/SmoothieList';
import CustomerList from './components/CustomerList';

function App() {
  return (<Router>
    <div className="App">
      <Header />
      <CreateCustomer />
      <CreateSmoothie />
    </div>
  </Router>);
}

export default App;
