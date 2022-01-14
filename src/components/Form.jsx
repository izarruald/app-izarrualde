import React from 'react'
import { useState } from 'react'
import {Button, Card} from 'react-bootstrap' 
import { useCartContext } from "../context/CartContext"
import { addDoc, collection, doc, getFirestore, Timestamp, updateDoc, writeBatch } from 'firebase/firestore'

function Form() {
    const [idOrden, setIdOrden] = useState('')
        const [dataForm, setDataForm] = useState({
        nombre:"", email:"", tel:""
    })

    const [mostrar, setMostrar] = useState(true)
    const mostrarOrden =()=>{
        setMostrar(false)
    }

    const {calculateTotalPrice, cartlist, /* borrarCarrito */} = useCartContext() 

    const handleChange = (e) => {
        // console.log(e.target.name)
        // console.log(e.target.value)
        setDataForm({
            ...dataForm, //guardo data form
            [e.target.name]: e.target.value //le agrego estos valores
        })
    }
    console.log(dataForm)


    const generarOrden = (e) =>{
        e.preventDefault()

        //Nuevo objeto de ordenes
        let orden = {} //arranca en 0
        orden.date = new Date()
        // orden.date = firebase.firestore.Timestamp.fromDate(new Date())

        orden.buyer = dataForm //a donde lo manda??
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
        .catch( err => console.log(err))
        .finally(()=> {
            borrarCarrito() //cuando termino vacio el carrito
            setDataForm({
                nombre:"", email:"", tel:""
            }) //reseteo el form para que no me queden todos los datos una vez terminado
        })

        console.log(orden)

        // const cleccionNoti = collection(db, 'items') //conexion a la base de datos y que coleccion
        // const queryActulizarStock = query(
        //     cleccionNoti, where( documentId() , 'in', cartlist.map(it => it.id)) 
        //     //me trae todos lo id almacenados en ('in') mi cartlist        
        // )

        // const batch = writeBatch(db)  

        // //console.log(queryActulizar)
        // getDocs(queryActulizarStock) //traeme todos los docs relacionados a mi cartlist
        // .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
        //     stock: resp.data().stock - cartlist.find(item => item.id === resp.id).cantidad
        // }) ))

        // batch.commit()


    }

    return (
        <div>
            <form className='paddingTB formularioBoxmod'onSubmit={generarOrden}>
                <h4>Formulario Registro</h4>
                <input className='formularioInput colorBlanco'
                    type='text' 
                    name='nombre' 
                    placeholder='name' 
                    value={dataForm.nombre}
                    onChange={handleChange}
                /><br />
                <input onChange={handleChange} //en cada cambio = onChange 
                    className='formularioInput colorBlanco'
                    type='numer' 
                    name='tel'
                    placeholder='tel' 
                    value={dataForm.tel}
                /><br/>
                <input onChange={handleChange} //en cada cambio = onChange 
                    className='formularioInput colorBlanco'
                    type='email' 
                    name='email'
                    placeholder='email' 
                    value={dataForm.email}
                /><br/>
                <input onChange={handleChange} //en cada cambio = onChange 
                    className='formularioInput colorBlanco'
                    type='email' 
                    name='email'
                    placeholder='validar email' 
                /><br/>
                <div className='centrarCol'>
                <h2>Su numero de orden es: {idOrden.length !== 0 && idOrden}{/* si idOrden es distinto a 0 mostra idOrden*/}</h2>
                    <Button type="submit" className='margin btn-success-cart' variant="success">Generar Orden</Button>
                </div>
            </form>
            {/* {mostrar ? 
            <div >
                <form className='paddingTB formularioBoxmod'onSubmit={generarOrden}>
                    <h4>Formulario Registro</h4>
                    <input className='formularioInput colorBlanco'
                        type='text' 
                        name='nombre' 
                        placeholder='name' 
                        value={dataForm.nombre}
                        onChange={handleChange}
                    /><br />
                    <input onChange={handleChange} //en cada cambio = onChange 
                        className='formularioInput colorBlanco'
                        type='numer' 
                        name='tel'
                        placeholder='tel' 
                        value={dataForm.tel}
                    /><br/>
                    <input onChange={handleChange} //en cada cambio = onChange 
                        className='formularioInput colorBlanco'
                        type='email' 
                        name='email'
                        placeholder='email' 
                        value={dataForm.email}
                    /><br/>
                    <input onChange={handleChange} //en cada cambio = onChange 
                        className='formularioInput colorBlanco'
                        type='email' 
                        name='email'
                        placeholder='validar email' 
                    /><br/>
                </form>
                <div className='centrarCol'>
                        <Button type="submit" onClick={mostrarOrden} className='margin btn-success-cart' variant="success">Generar Orden</Button>
                </div>
            </div>
                    :
            <div>
                <div className='centrarCol'>
                    <h2>su ID de compra es: {idOrden.length !== 0 && idOrden}{/* si idOrden es distinto a 0 mostra idOrden }</h2>
                </div>
            </div>
            } */}
        </div>
    )
}

export default Form
