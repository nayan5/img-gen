import logo from './logo.svg';
import './App.css';
//Importing all components here
import Navigation from './components/Navigation';
import Home from './components/Home';
import ProductDescription from './components/ProductDescription';
import Tweets from './components/Tweets';
import ColdEmails from './components/ColdEmails';


//Bootstrap-React
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
      <Navigation/>

      <Routes>
          <Route path="/home" exact element={<Home/>}/>
          <Route path="/product-description" exact element={<ProductDescription/>}/>
          <Route path="/cold-emails" exact element={<ColdEmails/>}/>
          <Route path="/tweets" exact element={<Tweets/>}/>
          
          
          
          
      </Routes>

    </div>
    </Router>
    
  );
}

export default App;
