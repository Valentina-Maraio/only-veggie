import './App.css';
import {Provider} from 'react-redux'
import Ricetta from './components/Ricetta';
import storeFood from './store/storeFood';
//import configureStore  from './store/configureStore';
//import Users from './components/Users'

const newstore = storeFood();
//const store = configureStore();


function App() {
  return (
    <Provider store={newstore}>
      <header className="App-header">
        <Ricetta />
      </header>
    </Provider>
  );
}

export default App;
