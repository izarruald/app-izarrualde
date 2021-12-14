import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ComponenteUseEffect from './components/ComponenteUseEffect';
import ItemListContainer from './components/ItemListContainer';
import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {   
    
  return (
        <>
            <NavBar/>
            {/* <ComponenteUseEffect/><br /> */}
            {/* <ItemListContainer greeting=''/>  */}
            <ItemDetailContainer/>
        </>
  );
}

export default App;
