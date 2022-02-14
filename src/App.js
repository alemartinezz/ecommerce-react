// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="Hola Mundo!" additionalMessage="Clase 3: Components"/>
      <ItemCount />
    </div>
  );
}

export default App;
