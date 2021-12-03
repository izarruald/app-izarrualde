
import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import  Titulo  from './clases/clase4/titulo';
import Item from './clases/clase4/item';
import { Input } from './clases/clase4/input';
import ComponenteContainer from './clases/clase4/componenteContainer';
import ItemListContainer from './clases/clase4/ItemListContainer';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartArrowDown} from '@fortawesome/free-solid-svg-icons';



function llamar(){
    return
}

function App() {
    //app padre de todos


    const estilos = {backgroundColor:'green' , fontSize: '35px'}
    // Y APLICARLO DENTRO DE LAS LLAVES CON EL NOMBRE "ESTILOS"
    const Evento = ()=> console.log("Hola mundo")
    function saludo (){
        console.log('soy una funcion de app')
    }
    const titulo ='soy un mensaje de app'



  return (
    <div className="App" style={ estilos }>
        
        <section  onClick={Evento} >
        <NavBar/>
            <FontAwesomeIcon icon = {faCartArrowDown}/>
            <img src={logo} className="App-logo" alt="logo" />
        </section>
        
        {/* titulo un COMPONENTE y es hijo de app */}
        {/* prop son las propiedades de titulo = titulo-subtitulo / y la prop de saludo es la funtion saludo*/}
        {/* <Titulo titulo={titulo} subtitulo ='soy subti de app' saludo={saludo}/> <hr/> */}


        {/* llamo la funcion = Item() 3 formas diferentes  */}
        {/* <Item /> */}
        {/* <ItemListContainer/> */}
        {/* <Question/> */}

        {/* placeholderCustome es una prop creada que contiene el 'ingrese su nombre' */}
        {/* <Input placeholderCustome = 'ingrese su nombre'/> */}
        {/* <ComponenteContainer/> */}
        


    </div>
  )
}

export default App
