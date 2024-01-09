import React from 'react';
import './App.css';
import { Searchbar } from './components/Searchbar';
import Body from './Body.jsx'
import Card from './Card.jsx'
import Footer from './Footer.jsx'


function App() {
 return( <div className="App">
    <div>pti.</div>
  <div className= "searchbar">
      <div> <Searchbar/>
      </div>
      </div>
  <div className="Dropdown">
    <div>
      <toggleDropdown/>
    </div>
  
   
  </div>
 
  <Card/>

<Body/>
 
 <Footer/>
 </div>
 );

}

export default App;
