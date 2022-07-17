import './scss/app.scss'
import './App.css';
import Header from './Components/Header/Header';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';
import { useState } from 'react';

function App() {
const [searchValue, setSearchValue] = useState('');
  return (
    <div className="App">
      <div className="wrapper">
       <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
       <Content searchValue={searchValue} />
       <Footer/>
      </div>
    </div>
  );
}

export default App;
