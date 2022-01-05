/* import {memo} from 'react' */
import Item from './Item'


/* const ItemList = memo(
    ({listado}) =>{
        console.log('itemList')
        return (
            <div className='listadoFlex boxmodCentrar'>
                {listado.map((producto) => <Item producto={producto} key ={producto.id}/>)}
                {/* recorre el listado de productos devolviendo los productos individuales en la forma del componente Item 
                    }
            </div>
        )
    }
, (oldProps, newProps) => oldProps.listado.lenght === newProps.listado.lenght )

export default ItemList */


const ItemList = ({listado}) =>{
    return (
        <div className='listadoFlex boxmodCentrar'>
            {listado.map((producto) => <Item producto={producto} key ={producto.id}/>)}
        </div>
    )
}

export default ItemList