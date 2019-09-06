import React from 'react';
import './App.css';
import Menu from './components/SideBar';
import Header from './components/Header'

function App() {


  return (
    <div className="App">
      <Menu pageWrapId={"page-wrap"} outerContainer={"App"} />
      <div className="page-wrap">
      <Header/>  
      


      </div>
      
    </div>
  );
}

export default App;
