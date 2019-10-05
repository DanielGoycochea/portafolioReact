import React from 'react';
import './App.css';
import Menu from './components/SideBar';
import Header from './components/Header';
import Information from './components/Information';
import Footer from './components/Footer'

function App() {


  return (
    <div className="App">
      <Menu pageWrapId={"page-wrap"} outerContainer={"App"} />
      <div className="page-wrap">
      <Header/>  
      <Information/>
      <Footer/>
      


      </div>
      
    </div>
  );
}

export default App;
