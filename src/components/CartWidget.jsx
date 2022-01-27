import React from 'react'
import { FaCartPlus } from 'react-icons/fa';
import { useCartContext } from "../context/CartContext"

const CartWidget = () => {
    const {cartlist, calcularCantidad} = useCartContext()
    return (
        <div className="fontMedia paddingRL paddingB colorBlanco">
            <FaCartPlus/> 
            <span>{cartlist.length > 0 && calcularCantidad()}</span>
        </div>
    )
}

export default CartWidget
