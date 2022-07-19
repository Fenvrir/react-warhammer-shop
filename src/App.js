import './scss/app.scss'
import './App.css';
import Header from './Components/Header/Header';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
       <Header />
       <Content />
       <Footer/>
      </div>
    </div>
  );
}

export default App;
