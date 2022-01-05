import React from 'react'
import { FaCartPlus } from 'react-icons/fa';
import { useCartContext } from "../context/CartContext"

const CartWidget = () => {
    const {cartlist, calcularCantidad} = useCartContext()
    console.log(cartlist)
    return (
        <div>
            <FaCartPlus/> 
            <span>{cartlist.length > 0 && calcularCantidad()}</span>
        </div>
    )
}

export default CartWidget





/* import React from 'react'


export const CartWidget = () => {
    const {cartlist, totalItem, calcularCantidad,agregarAlCarrito} = useCartContext() 
    console.log(cartlist)
    return (
        <div>
            <FaCartPlus/> 
        </div>
    )
}
 */