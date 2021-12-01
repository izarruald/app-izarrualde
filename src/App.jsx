
import logo from './logo.svg'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';

function App() {


    const estilos = {backgroundColor:'green' , fontSize: '35px'}
    // Y APLICARLO DENTRO DE LAS LLAVES CON EL NOMBRE "ESTILOS"
    const Evento = ()=> console.log("Hola mundo")


  return (
    <div className="App" style={ estilos }>
        
        <section  onClick={Evento} >
        <NavBar/> 
            <img src={logo} className="App-logo" alt="logo" />
        </section>
        
        


    </div>
  )
}

export default App
