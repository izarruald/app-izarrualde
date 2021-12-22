import { useState, useEffect } from 'react'
import {Card , Button} from 'react-bootstrap' 
import {Link} from 'react-router-dom'

function ComponenteUseEffect(){
    //contador= donde guardo el valor / setContador= funcion para setear el contador (cambiar el valor)
    const [contador , setContador] = useState(0);
    const [fecha, setFecha] = useState(Date()); //inicia con fecha y hora actual
    const [mostrar, setMostrar] = useState(true)

    const handlerClick =()=>{
        setContador(contador+1)
        setFecha(Date())//cambia la fecha y hora cuando da el click
    }

    const clickMenos =()=>{
        setContador(contador-1)
        setFecha(Date())//cambia la fecha y hora cuando da el click
    }

    const clickCarrito =()=>{
        setMostrar(false)
    }


    return(
        <div className='fontBody '>
            
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
                        {/* cada vez que se clickee se ejecutara toda la funcion componenteUseEffect */}
                    </div>
                    :
                    <Link to="/cart"><Button variant="primary">Ir al carrito</Button></Link>
                    }
        </div>
    );
}

export default ComponenteUseEffect;
