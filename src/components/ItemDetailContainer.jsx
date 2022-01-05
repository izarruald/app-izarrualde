import { useState, useEffect } from "react"
import {useParams} from 'react-router-dom'
import {Card , Button} from 'react-bootstrap' 
import Contador from "./Contador";
import { getFetch } from "../helpers/getFetch";

import { collection, doc, getDoc, getFirestore,getDocs, query, where } from 'firebase/firestore' 



function ItemDetailContainer ( {greeting} ) {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {id} = useParams () //capuramos el valor

    console.log(id)

/*     useEffect(() => {
        getFetch
        .then(resp => setProductos(resp.find(prod => prod.id === id)))//caputuro las resp con then y con setProducto lo hago persistente
        .catch(err => console.log(err))
        .finally(()=> setLoading (false)) //ejecucion final despues de que carguen los productos
    },[id]) *///los corchetes SOLOS hace que se ejecute una sola vez





    useEffect(() => {
        const db = getFirestore() //conexion a base de datos
        const queryDb = doc(db, 'items', id) //crea la coleccion accede a item y me trae tal porducto
        getDoc(queryDb) //promesa
        .then( resp => setProductos( { id: resp.id, ...resp.data() } )) //setea el producto 1:18' con el data extraemos todos lo campos del Id
        .finally(()=> setLoading (false))
    },[id])                     /*dentro de llaves creo un objeto */



  

    //MAP: recibe un array y con la funcion mostrada me retorna otro con las caracteriscas pedidas array,
    //uno por cada objeto que tengamos
    //KEY: esta propiedad es porque react necesita que marque la identidad del elemento
    return (
        <div>
            { greeting }{/* que hace el greeting?  es un mensaje comun */}
            {loading ?
                <h2>Cargando</h2> : //si loading es true el cargando
                <div className='listadoFlex boxmodCentrar centrarAling padding'>
                 <div className="">
                                            <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src={productos.foto} />
                                            <Card.Body>
                                                <Card.Title className="fontBody">{productos.nombre}</Card.Title>
                                                <Card.Text>
                                                $ {productos.precio}<br/>
                                                </Card.Text>
                                                <Contador productos={productos}/>
                                            </Card.Body>
                                            </Card>
                                        </div>
                {/* recorre el listado de productos devolviendo los productos individuale en la forma del componente Item */}
                </div>
            }
        </div>
    )
}

export default ItemDetailContainer
