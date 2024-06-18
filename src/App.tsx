import { Provider } from 'react-redux';
import './App.css';
import Header from './components/Navbar';
import Products from './components/Product';
import store from './redux/store';

function App() {

  return (
    <Provider store={store}>
      <Header />
      <Products />
    </Provider>
  );
}

export default App
