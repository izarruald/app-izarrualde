import { useState, useEffect } from 'react'
import {Card , Button} from 'react-bootstrap' 

function ComponenteUseEffect(){
    //contador= donde guardo el valor / setContador= funcion para setear el contador (cambiar el valor)
    const [contador , setContador] = useState(0);
    const [fecha, setFecha] = useState(Date()); //inicia con fecha y hora actual

    const handlerClick =()=>{
        setContador(contador+1)
        setFecha(Date())//cambia la fecha y hora cuando da el click
    }

    const clickMenos =()=>{
        setContador(contador-1)
        setFecha(Date())//cambia la fecha y hora cuando da el click
    }

    const clickCarrito =()=>{
        setContador(contador-1)
        alert('Cantidad de productos agregados = ' + contador)
    }


    //se usa para poner cosas post renderizado
    useEffect(()=>{
        console.log("use efecto llamada a api 2")//para tareas pesadas o asincronicas (un alert x ej)
    }) 

    useEffect(()=>{
        console.log("use efecto llamada a api 2")//los corchetes hacen que se ejecute una sola vez
    }, []) 

    useEffect(()=>{
        console.log("use efecto llamada a api 2")
    }, [fecha]) //hace que se ejecute cada vez que cambie fecha


    console.log('ejecucion antes de render 1')


    console.log(contador)
    console.log(Date)

    return(
        <div className='fontBody '>
            
            {/* <p>{fecha}</p> */}
            {/* defino un evento y ejecuto la funcion dentro del evento */}
            <div className='flex boxmodCentrar ' >
                <Button variant="primary" onClick={clickMenos}>-</Button>
                <p className='paddingRL fontMedia'>{contador}</p>
                <Button variant="primary" onClick={handlerClick}>+</Button>
            </div>
            <Button className='centrarAling' variant="primary" onClick={clickCarrito}>Agregar al carrito</Button>
            {/* cada vez que se clickee se ejecutara toda la funcion componenteUseEffect */}
        </div>
    );
}

export default ComponenteUseEffect;
