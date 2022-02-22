// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting="E-commerce React" additionalMessage="By: Alejandro Martínez"/>
      <ItemCount stock={5} initial={1}/>
    </div>
  );
}

export default App;
