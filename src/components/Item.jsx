import { getFetch } from "../helpers/getFetch"
import React from 'react'
import {Card , Button} from 'react-bootstrap' 
import ComponenteUseEffect from "./ComponenteUseEffect"

function Item({producto}) {/* que llama por parametro? */
    return (
        <div className="paddingBetwen boxmodCentrar">
            <Card style={{ width: '300px' }}>
            <Card.Img variant="top" src={producto.foto} />
            <Card.Body className="centrarAling">
                <Card.Title>{producto.nombre}</Card.Title>
                <Card.Text>
                $ {producto.precio}
                </Card.Text>
                <ComponenteUseEffect/>
            </Card.Body>
            </Card>
        </div>
    )
}

export default Item
