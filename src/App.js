import './scss/app.scss'
import './App.css';
import Header from './Components/Header/Header';
import Content from './Components/Content/Content';

function App() {
  return (
    <div className="App">
      <div class="wrapper">
       <Header />
       <Content/>
      </div>
    </div>
  );
}

export default App;
