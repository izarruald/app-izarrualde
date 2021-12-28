import { useContext } from 'react';
import { useState, useEffect } from 'react'
import {Card , Button} from 'react-bootstrap' 
import {Link} from 'react-router-dom'
import { CartContext } from '../context/CartContext';

function Contador({productos}){
    //contador= donde guardo el valor / setContador= funcion para setear el contador (cambiar el valor)
    const [contador , setContador] = useState(0);
    const [fecha, setFecha] = useState(Date()); //inicia con fecha y hora actual
    const [mostrar, setMostrar] = useState(true)
    const {agregarAlCarrito, cartList} = useContext (CartContext) //usá la funcion de agregar al carrito de cartcontext

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
        agregarAlCarrito(productos, contador) //implementando la funcion global con productos (agregar los item al carrito)
    }

        console.log(productos)

    return(
        <div className='fontBody'>
            
            {/* <p>{fecha}</p> */}
            {/* defino un evento y ejecuto la funcion dentro del evento */}
            {mostrar ? 
                        <div>
                        <div className='flex boxmodCentrar ' >
                            <Button variant="primary" onClick={clickMenos}>-</Button>
                            <p className='paddingRL fontMedia'>{contador}</p>
                            <Button variant="primary" onClick={handlerClick}>+</Button>
                        </div>
                        <Button className='centrarAling' variant="primary" onClick={clickCarrito}>Agregar al carrito</Button>
                        {/* cada vez que se clickee se ejecutara toda la funcion contador */}
                    </div>
                    :
                    <Link to="/cart"><Button variant="primary">Ir al carrito</Button></Link>
                    }
        </div>
    );
}

export default Contador;
