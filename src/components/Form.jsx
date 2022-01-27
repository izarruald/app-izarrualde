import React, { useEffect } from 'react'
import { useState } from 'react'
import {Button, Card} from 'react-bootstrap' 
import { useCartContext } from "../context/CartContext"
import { addDoc, collection, getFirestore, } from 'firebase/firestore'

function Form() {

    const {calculateTotalPrice, cartlist} = useCartContext() 

    const [idOrden, setIdOrden] = useState('')

    const [getNombre, setNombre] = useState({ value: ''})
    const [getEmail, setEmail] = useState({ value: ''})
    const [getEmail2, setEmail2] = useState({ value: ''})
    const [getTel, setTel] = useState({ value: ''})
    const [error, setError] = useState("")

    const generarOrden = (e) =>{
        let validacion = validacionDataForm()

        if(!validacion) return 1;
        //Nuevo objeto de ordenes
        let orden = {} //arranca en 0
        orden.date = new Date()

        orden.buyer = {
            nombre: getNombre.value,
            email: getEmail.value,
            tel: getTel.value
        }
        orden.total = calculateTotalPrice();

        orden.items = cartlist.map(cartItem => { //
            const id = cartItem.id; //saco ID de mi cartlist
            const nombre = cartItem.nombre; //saco NOMBRE de cartlist
            const precio = cartItem.precio * cartItem.contador; //saco PRECIO del price de del item 
                                                                //por la cantidad de articulos elegidos por el contador
            return {id, nombre, precio}
        })

        //Generar la orden (guardamos la orden)
        const db = getFirestore() //conexion con firestore
        const ordenColeccion = collection(db, 'ordenes') //genero una coleccion nueva
        addDoc(ordenColeccion, orden) //agregamos ordenColeccion y orden (funcion hecha por nosotros), como segundo param el obj de la orden
        .then( resp => setIdOrden(resp.id) ) //capturamos la respuesta y despues la muestro en 
        .finally(()=> {
            setNombre({value: '', error: ''})
            setEmail({value: '', error: ''})
            setTel({value: '', error: ''})
            setEmail2({value: '', error: ''})
            //reseteo el form para que no me queden todos los datos una vez terminado
        })


    }




    const validacionDataForm = () => {
        let mensaje = ""
        let estado = true
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (getNombre.value == ""){
           mensaje="Porfavor ingrese un nombre"
           estado = false
        }else if (getTel.value.length < 9){
            mensaje="El numero de telefono es invalido"
            estado = false
        }else if(getEmail.value.length == "") {
            mensaje = "Email invalido"
            estado = false
        } else if ( !re.test(getEmail.value)){
            mensaje = "El email no es correcto"
            estado = false
        }
        else if(getEmail.value !== getEmail2.value) {
            mensaje = 'Los emails no coinciden'
            estado = false
        }
        setError (mensaje)
        return estado

    }

    return (
        <div>
            <form className='paddingTB formularioBoxmod' onSubmit={(e) => e.preventDefault()}>
                <h4>Formulario Registro</h4>
                {error != "" && 
                <span className='errorForm'>{error}</span>}
                <input className='formularioInput colorBlanco'
                    type='text' 
                    placeholder='name' 
                    value={getNombre.value}
                    onChange={(e) => setNombre ({...getNombre, value: e.target.value})} 
                /><br />
                <input onChange={(e) => setTel ({...getTel, value: e.target.value})} //en cada cambio = onChange 
                    className='formularioInput colorBlanco'
                    type='numer' 
                    placeholder='tel' 
                    value={getTel.value}
                /><br/>
                <input onChange={(e) => setEmail ({...getEmail, value: e.target.value})} //en cada cambio = onChange 
                    className='formularioInput colorBlanco'
                    type='email' 
                    placeholder='email' 
                    value={getEmail.value}
                /><br/>
                <input onChange={(e) => setEmail2 ({...getEmail2, value: e.target.value})} //en cada cambio = onChange 
                    value={getEmail2.value}
                    className='formularioInput colorBlanco'
                    type='email' 
                    placeholder='validar email' 
                /><br/>
                <div className='centrarCol'>
                <h2>Su codigo de orden es: {idOrden.length !== 0 && idOrden}{/* si idOrden es distinto a 0 mostra idOrden*/}</h2>
                    <Button onClick={generarOrden} className='margin btn-success-cart' variant="success">Generar Orden</Button>
                </div>
            </form>
        </div>
    )
}

export default Form 