import { useState, useEffect } from "react"
import {useParams} from 'react-router-dom'
import ItemList from "./ItemList";
import {Card , Button} from 'react-bootstrap' 
import ComponenteUseEffect from "./ComponenteUseEffect";
import { getFetch2 } from "./ItemDetail";



function ItemDetailContainer ( {greeting} ) {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {id} = useParams () //capuramos el valor

    useEffect(() => {
        getFetch2
        .then(resp => setProductos(resp.filter(prod => prod.id === id)))//caputuro las resp con then y con setProducto lo hago persistente
        .catch(err => console.log(err))
        .finally(()=> setLoading (false)) //ejecucion final despues de que carguen los productos
    },[id])//los corchetes SOLOS hace que se ejecute una sola vez



    //MAP: recibe un array y con la funcion mostrada me retorna otro con las caracteriscas pedidas array,
    //uno por cada objeto que tengamos
    //KEY: esta propiedad es porque react necesita que marque la identidad del elemento
    return (
        <div>
            { greeting }{/* que hace el greeting?  es un mensaje comun */}
            {loading ?
                <h2>Cargando</h2> : //si loading es true el cargando
                <div className='listadoFlex boxmodCentrar centrarAling padding'>
                {productos.map((producto) => <div className="">
                                            <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src={producto.foto} />
                                            <Card.Body>
                                                <Card.Title className="fontBody">{producto.nombre}</Card.Title>
                                                <Card.Text>
                                                $ {producto.precio}<br/>
                                                </Card.Text>
                                                <ComponenteUseEffect/>
                                            </Card.Body>
                                            </Card>
                                        </div>)}
                {/* recorre el listado de productos devolviendo los productos individuale en la forma del componente Item 
                     */}
                </div>
            }
        </div>
    )
}

export default ItemDetailContainer
