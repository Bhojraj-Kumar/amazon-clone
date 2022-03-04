import React, {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Checkout from './Checkout';
import Login from './Login';
import { UseStateValue } from './StateProvider';
import { auth } from './firebase';
import Footer from './Footer'


function App() {
  const [{}, dispatch] = UseStateValue();
  
  useEffect(() => {
    auth.onAuthStateChanged( authuser => {
      console.log("THE USER >>> ", authuser);

      if (authuser) {
        dispatch({
          type : 'SET_USER',
          user : authuser
        })
      }else{
        dispatch({
          type : 'SET_USER' ,
          user : null
        })
      }
    })
  }, [])
  

  return (
    //BEM
<Router>
  <div className="App">
   
    <Routes >
      <Route path='/login' element={<Login/>}/>
    </Routes>
    <Routes>
      <Route path='/checkout' element={ [<Header/>,<Checkout/>] }/>
    </Routes>
    <Routes> 
      <Route path="/" element={[ <Header/>,<Home/>,<Footer/>]}/>      
    </Routes>
  </div> 
</Router>
  
    
  );
}

export default App;
