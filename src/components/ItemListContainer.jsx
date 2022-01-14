import { useState, useEffect } from "react"
import {useParams} from 'react-router-dom'
import ItemList from "./ItemList";
import { collection, getFirestore,getDocs, query, where } from 'firebase/firestore' 


function ItemListContainer () {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {idCate} = useParams () //capuramos el valor, extraemos el parametro

    useEffect(() => {
        const db = getFirestore()
        const queryCollection = idCate ?
        query(
            collection(db, 'items') , where ('categoria', '==', idCate))
        :
        query(collection(db, 'items') )

        getDocs(queryCollection)
        .then(resp => setProductos( resp.docs.map(prod => ({ id: prod.id, ...prod.data() }) ) ) )
        .catch(err =>console.log(err))
        .finally( ()=> setLoading(false) )
    },[idCate])                     

    return (
        <div>
            {loading ?
                <h2>Cargando</h2> : //si loading es true el cargando
                <ItemList listado={productos}/>//estado en el que guardo lo resuelto por la promesa
            }
        </div>
    )
}

export default ItemListContainer
