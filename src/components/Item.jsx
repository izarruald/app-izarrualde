import { getFetch } from "../helpers/getFetch"
import React from 'react'
import {Card , Button} from 'react-bootstrap' 
import {Link} from 'react-router-dom'

function Item({producto}) {/* poner ver detalle, sacar de la pag de bootstrap */ 
    return (
        <div className="paddingBetwen boxmodCentrar">
            <Card style={{ width: '300px' }}>
            <Card.Img variant="top" src={producto.foto} />
            <Card.Body className="centrarAling">
                <Card.Title>{producto.nombre}</Card.Title>
                <Card.Title>{producto.categoria}</Card.Title>
                <Card.Text>
                $ {producto.precio}
                </Card.Text>
                <Link to = {`/detalle/${producto.id}`}>{/*  */}
                    <Button className='centrarAling' variant="primary">Ver detalle</Button>
                </Link>
            </Card.Body>
            </Card>
        </div>
    )
}

export default Item
