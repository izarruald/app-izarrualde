import { useState, useEffect } from "react"
import {useParams} from 'react-router-dom'
import { getFetch } from "../helpers/getFetch"
import { Input } from "./Input";
import ItemList from "./ItemList";


function ItemListContainer ( {greeting} ) {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {idCate} = useParams () //capuramos el valor

    useEffect(() => {
        if (idCate) {
            getFetch
            .then(resp => setProductos(resp.filter(prod => prod.categoria === idCate)))//caputuro las resp con then y con setProducto lo hago persistente
            .catch(err => console.log(err))
            .finally(()=> setLoading (false)) //ejecucion final despues de que carguen los productos
        } else {
            getFetch
            .then(resp => setProductos(resp))//caputuro las resp con then y con setProducto lo hago persistente
            .catch(err => console.log(err))
            .finally(()=> setLoading (false)) //ejecucion final despues de que carguen los productos
        }

    },[idCate])//cuando detecte un cambio en "idCate" se va a renderizar  /los corchetes SOLOS hace que se ejecute una sola vez

    console.log(idCate)//toma el parametro que tiene la ruta (lo que esta despues de la segunda barra)



    
    //MAP: recibe un array y con la funcion mostrada me retorna otro con las caracteriscas pedidas array,
    //uno por cada objeto que tengamos
    //KEY: esta propiedad es porque react necesita que marque la identidad del elemento
    return (
        <div>
            { greeting }{/* que hace el greeting? */}
            {loading ?
                <h2>Cargando</h2> : //si loading es true el cargando
                <ItemList listado={productos}/>//estado en el que guardo lo resuelto por la promesa
            }
        </div>
    )
}

export default ItemListContainer
