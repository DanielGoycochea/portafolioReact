import React from 'react';
import './App.css';
import Menu from './components/SideBar';
import Header from './components/Header';
import Information from './components/Information'

function App() {


  return (
    <div className="App">
      <Menu pageWrapId={"page-wrap"} outerContainer={"App"} />
      <div className="page-wrap">
      <Header/>  
      <Information/>
      


      </div>
      
    </div>
  );
}

export default App;
