import { useState, useEffect } from "react"
import {useParams} from 'react-router-dom'
import { getFetch } from "../helpers/getFetch"
import ItemList from "./ItemList";
import Titulo from "./Titulo";

import { collection, doc, getDoc, getFirestore,getDocs, query, where } from 'firebase/firestore' 


function ItemListContainer ( {greeting} ) {
    const [productos, setProductos] = useState([])
    const [producto, setProducto] = useState({})//llaves xq es un objeto
    const [loading, setLoading] = useState(true)

    const {idCate} = useParams () //capuramos el valor, extraemos el parametro


    useEffect(() => {
        const db = getFirestore() //conexion a base de datos
        if(idCate){
            const queryCollection = query(collection(db, 'items') ,where ('categoria', '==', idCate) )
            getDocs(queryCollection)
            .then(resp => setProductos( resp.docs.map(prod => ({ id: prod.id, ...prod.data() }) ) ) )
            .catch(err =>console.log(err))
            .finally( ()=> setLoading(false) )
    }  else{
        const queryCollection = query(collection(db, 'items') )
        getDocs(queryCollection)
        .then(resp => setProductos( resp.docs.map(prod => ({ id: prod.id, ...prod.data() }) ) ) )
        .catch(err =>console.log(err))
        .finally( ()=> setLoading(false) )
    }
    },[idCate])                     

    console.log(productos)

    /*  ESTE SE USA EN ITEM DETAIL 1:24'

     useEffect(() => {
        const db = getFirestore() //conexion a base de datos
        const queryDb = doc(db, 'items', '8y8jtkEo23bsjxyT4utk') //crea la coleccion accede a item y me trae tal porducto
        getDoc(queryDb) //promesa
        .then( resp => setProducto( { id: resp.id, ...resp.data() } )) //setea el producto 1:18' con el data extraemos todos lo campos del Id
    },[idCate])                     /*dentro de llaves creo un objeto 

    console.log(producto) */



    
    //MAP: recibe un array y con la funcion mostrada me retorna otro con las caracteriscas pedidas array,
    //uno por cada objeto que tengamos
    //KEY: esta propiedad es porque react necesita que marque la identidad del elemento
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

/*     useEffect(() => {
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

    console.log(idCate)//toma el parametro que tiene la ruta (lo que esta despues de la segunda barra) */