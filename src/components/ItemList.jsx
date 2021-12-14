import React from 'react'
import Item from './Item'


function ItemList({listado}) {
    return (
        <div className='listadoFlex boxmodCentrar'>
            {listado.map((producto) => <Item producto={producto} key ={producto.id}/>)}
            {/* recorre el listado de productos devolviendo los productos individuale en la forma del componente Item 
                 */}
        </div>
    )
}
            {{/* este parametro porque? */ /* que significa esto? */}}

export default ItemList
