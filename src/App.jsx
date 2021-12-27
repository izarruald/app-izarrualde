import {BrowserRouter, Routes, Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ComponenteUseEffect from './components/ComponenteUseEffect';
import ItemListContainer from './components/ItemListContainer';
import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer';
import Home from './pages/home';
import  Cart  from './components/Cart';
import  CartContextProvider  from './context/CartContext';


function App() {   
    
  return (
    <BrowserRouter>
        <>
            <NavBar/>
            <CartContextProvider>
            <Routes>
                <Route 
                    exact /* hace que la ruta sea exacta */
                    path= "/" /* cuando estes parado en esta ruta (host3000) */
                    element={<ItemListContainer/>}/* mostrame este elemento */
                />
                <Route 
                    exact
                    path= "/categoria/:idCate" /* cuando estes parado en esta ruta (host3000) / despues de los dos puntos toma el parametro */
                    element={<ItemListContainer greeting=''/> }/* mostrame este elemento */
                />
                <Route 
                    exact
                    path= "/detalle/:id" /*  */
                    element={<ItemDetailContainer/> }/* mostrame este elemento */
                />
                <Route 
                    exact
                    path= "/cart" /*  */
                    element={<Cart/> }/* mostrame este elemento */
                />   
            </Routes>
            
            </CartContextProvider>
        </>
    </BrowserRouter>    
  );
}

export default App;
