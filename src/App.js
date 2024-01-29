
import './App.css';
import React from 'react';
import Header from './Components/Header';
import Balance from './Components/Balance';
import Incomeexpense from './Components/Incomeexpense';
import Transictionlist from './Components/Transictionlist';
import Addtransiction from './Components/Addtransiction';
import { GlobalProvider } from './Context/GlobalState';
function App() {
  return (
    <GlobalProvider>
    <Header/>
   <div className="container">
    <Balance/>
     <Incomeexpense/>
     <Transictionlist/>
     <Addtransiction/>
   </div> 
    </GlobalProvider>
  );
}

export default App;
