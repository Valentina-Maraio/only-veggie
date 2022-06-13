import logo from './assets/carrot.svg';
import './App.css';
import Search from './components/Search';
import Griglia from './components/Griglia';



function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="card">
        <div className="flex card-container orange-container">
            <div className="flex-1 text-center p-6 border-round">
            <img src={logo} className="App-logo" alt="logo" />
            </div>
        </div>
      </div>
        
      <div className="card">
        <div className="flex card-container orange-container">
            <div className="flex-1 font-bold text-center p-12 border-round mx-4">
            <Search />
            </div>
        </div>
      </div>
      <div>
        <Griglia />
      </div>
      <div>
      </div>
      </header>




    </div>
  );
}

export default App;
