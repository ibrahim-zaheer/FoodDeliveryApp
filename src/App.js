// import logo from './logo.svg';
import './App.css';
// index.js or index.jsx
import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from './components/Navbar';
import Home from './screens/Home';
import About from './screens/About'; 
import Contact from './screens/Contact'; 
import Navigation from './components/Navigation';
//install this to use react router dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';




function App() {
  return (
    <Router>
      <div>
        <Routes >
    <Route exact path="/" element = {<Home/>}/>
    <Route exact path="/About" element = {<About/>}/>
    <Route exact path="/Contact" element = {<Contact/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
