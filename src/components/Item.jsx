import { getFetch } from "../helpers/getFetch"
import React from 'react'

function Item({producto}) {
    return (
        <>
            {<li key ={producto.id}>{producto.nombre} '$' {producto.precio}</li>}
        </>
    )
}

export default Item
