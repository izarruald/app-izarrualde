import React from 'react'
import {Card , Button} from 'react-bootstrap' 
import {Link} from 'react-router-dom'


function Item({producto}) {
    return (
        <div>
            <div className="paddingBetwen marginCard boxmodCentrar">
                <Card className='tamanioCard'>
                <Card.Img className='tamanioFoto' variant="top" src={producto.fotoID} />
                <Card.Body className="centrarAling">
                    <Card.Title className='capitalize fuente' >{producto.nombre}</Card.Title>
                    <Card.Title className='capitalize fuente' >{producto.categoria}</Card.Title>
                    <Card.Title className='capitalize fuente' >$ {producto.precio}</Card.Title>
                    <Link to = {`/detalle/${producto.id}`}>
                        <Button className='centrarAling' variant="success">Ver detalle</Button>
                    </Link>
                </Card.Body>
                </Card>
            </div>
        </div>
    )
}




export default Item
