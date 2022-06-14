import './App.css';
import {Provider} from 'react-redux'
import configureStore  from './store/configureStore';
import Users from './components/Users'

const store = configureStore();


function App() {
  return (
    <Provider store={store}>
      <header className="App-header">
        <h1>Only Veggie</h1>
        <Users />
        <h2>Nuovo esempio con Rick and Morty API</h2>
      </header>
    </Provider>
  );
}

export default App;
