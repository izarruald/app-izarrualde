//import {useContext} from 'react'
//import { CartContext } from '../context/CartContext'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap' 
import { useCartContext } from "../context/CartContext"

function Cart () {

    const { cartlist , borrarCarrito,eliminarItem,calculateTotalPrice } = useCartContext () /* ¿PORQUE? */


    console.log(cartlist)
    return (
        <div>
        {  
          cartlist.length > 0 ?
                  (
                      cartlist.map(prod => <li key={prod.id} className='paddingTB'>{prod.nombre}<img src={prod.foto} style={{ width: '65px', height: '40px' }} />  {prod.contador} <button onClick={()=> eliminarItem(prod.id)}>eliminar item </button></li>)
                  )
          :
          <div>
              <h1>No hay productos en el carrito</h1>
              <Link to={`/`}>
                  <Button className='centrarAling' variant="primary">Ir a inicio</Button>
              </Link>
          </div>
        }
        <button onClick={()=> borrarCarrito()}>eliminar carrito </button>
        <h2>Total de la compra <br /> $ {calculateTotalPrice()}</h2>
        
      </div>
  )
}

export default Cart