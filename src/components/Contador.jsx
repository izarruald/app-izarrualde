import { useState, useEffect } from 'react'
import {Card , Button} from 'react-bootstrap' 
import {Link} from 'react-router-dom'
import { useCartContext } from '../context/CartContext';

function Contador({productos}){
    //contador= donde guardo el valor / setContador= funcion para setear el contador (cambiar el valor)
    const [contador , setContador] = useState(0);
    const [fecha, setFecha] = useState(Date()); //inicia con fecha y hora actual
    const [mostrar, setMostrar] = useState(true)
    const {cartlist,agregarAlCarrito} = useCartContext() //usá la funcion de agregar al carrito de cartcontext

    const handlerClick =()=>{
        setContador(contador+1)
        setFecha(Date())//cambia la fecha y hora cuando da el click
    }

    const clickMenos =()=>{
        setContador(contador-1)
        setFecha(Date())//cambia la fecha y hora cuando da el click
    }

    /* ClickCarrito hace que muestre el boton de ir al carrito y ademas suma la cantidad puesta en el contador */
    const clickCarrito =()=>{
        setMostrar(false)
        agregarAlCarrito({...productos, contador}) //implementando la funcion global con productos (agregar los item al carrito)
    }

        console.log(productos)

    return(
        <div className='fontBody'>
            
            {/* <p>{fecha}</p> */}
            {/* defino un evento y ejecuto la funcion dentro del evento */}
            {mostrar ? 
                        <div>
                        <div className='flex boxmodCentrar ' >
                            <Button variant="success" onClick={clickMenos}>-</Button>
                            <p className='paddingRL fontMedia'>{contador}</p>
                            <Button variant="success" onClick={handlerClick}>+</Button>
                        </div>
                        <Button className='centrarAling' variant="success" onClick={clickCarrito}>Agregar al carrito</Button>
                        {/* cada vez que se clickee se ejecutara toda la funcion contador */}
                    </div>
                    :
                    <div>
                        <Link to="/cart"><Button variant="success">Ir al carrito</Button></Link>
                        <Link to="/"><Button variant="success">Seguir comprando</Button></Link>
                    </div>
                    // <Link to="/"><Button>Seguir comprando</Button></Link>
                    }
        </div>
    )
}

export default Contador;
