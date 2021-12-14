import { useState, useEffect } from "react"
import { getFetch } from "../helpers/getFetch"
import ItemList from "./ItemList";


function ItemListContainer ( {greeting} ) {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)



    useEffect(() => {
        getFetch
        .then(resp => setProductos(resp))//caputuro las resp con then y con setProducto lo hago persistente
        .catch(err => console.log(err))
        .finally(()=> setLoading (false)) //ejecucion final despues de que carguen los productos
    },[])//los corchetes SOLOS hace que se ejecute una sola vez

    function handlerClick(){
        setBool(!bool)//hace que cambie el valor de bool cada vez que se haga click (cambio de evento)
    }


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
