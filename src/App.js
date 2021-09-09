import './App.css';
//import {useState} from "react";
//import Footer from './subcomponent/Footer';
import Header from './subcomponent/Header';
import MainTextbar from './subcomponent/MainTextbar';
//import Note from './subcomponent/Note';

function App() {
  
  return (
    <div className="App">
      <Header />
      <MainTextbar /> 
      {/*<Footer/>*/}
    </div>
  );
}

export default App;
