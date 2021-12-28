import {useContext} from 'react'
import { CartContext } from '../context/CartContext'
function Cart () {

    const { cartlist , borrarCarrito } = useContext(CartContext) /* ¿PORQUE? */


    
    return ( 
        <div>
            {/* mientras cartlist sea mayor a 0 mostra el nombre y cantidad de productos que se puso en el contador */} 
            {cartlist.length > 0 ? cartlist.map(prod=><li>{prod.item.nombre}  {prod.contador}</li>)
            
            /* : = sino mostra esto */
            : <h1>No hay productos en el carrito</h1>}
            <button onClick={borrarCarrito} >Vaciar Carrito</button>

            
        </div>
    )
}

export default Cart