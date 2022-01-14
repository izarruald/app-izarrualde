import { useState, useEffect } from "react"
import {useParams} from 'react-router-dom'
import {Card , Button} from 'react-bootstrap' 
import Contador from "./Contador";
import logo from "../assets/img/logo-punto.png"
import { collection, doc, getDoc, getFirestore,getDocs, query, where } from 'firebase/firestore' 
import Footer from "../components/Footer"



function ItemDetailContainer ( {greeting} ) {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {id} = useParams () //capuramos el valor

    useEffect(() => {
        const db = getFirestore() //conexion a base de datos
        const queryDb = doc(db, 'items', id) //crea la coleccion accede a item y me trae tal porducto
        getDoc(queryDb) //promesa
        .then( resp => setProductos( { id: resp.id, ...resp.data() } )) //setea el producto 1:18' con el data extraemos todos lo campos del Id
        .finally(()=> setLoading (false))
    },[id])                 



  

    //MAP: recibe un array y con la funcion mostrada me retorna otro con las caracteriscas pedidas array,
    //uno por cada objeto que tengamos
    //KEY: esta propiedad es porque react necesita que marque la identidad del elemento
    return (
        <div>
            { greeting }{/* que hace el greeting?  es un mensaje comun */}
            {loading ?
                <h2>Cargando</h2> : //si loading es true el cargando
                <div className='centrarAling fondoDetalle '>
                                        <div>
                                            <img className="paddingTB" src={logo} alt="" width={'250px'} />
                                        </div>
                                        <div className="centrarCard paddingTB ">
                                            <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src={productos.fotoID} />
                                            <Card.Body>
                                                <Card.Title className="fontBody capitalize fuente">{productos.nombre}</Card.Title>
                                                <Card.Text className="fuente">
                                                $ {productos.precio}<br/>
                                                </Card.Text>
                                                <Contador productos={productos}/>
                                            </Card.Body>
                                            </Card>
                                        </div>
                                        <Footer/>
                {/* recorre el listado de productos devolviendo los productos individuale en la forma del componente Item */}
                </div>
            }
        </div>
    )
}

export default ItemDetailContainer
