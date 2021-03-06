import {Link} from 'react-router-dom'
import {Button, Card} from 'react-bootstrap' 
import { useCartContext } from "../context/CartContext"
import { useState } from 'react'
import Footer from './Footer'
import logo from "../assets/img/logo-punto.png"
import Form from './Form'
import NavBarr from '../NavBar/navBar2'

function Cart () {
    const [mostrar, setMostrar] = useState(true)
    const terminarCompra =()=>{
        setMostrar(false)
    }

    const { cartlist , borrarCarrito,eliminarItem,calculateTotalPrice } = useCartContext () /* saca todas estas funciones de useCartContext */





    return (
        <div className='fondoCarrito  footerBottom fuenteNavbar'>
            <div className='bgNegro centrarAling'>
                <NavBarr/>
            </div>
            <img className='centrarImg' src={logo} alt="" width={'200px'} />   


        <div>
        {  
            cartlist.length > 0 ?
                    (<div>
                        {cartlist.map(prod => 
                        <div key={prod.id} className='paddingB tamanioFuenteCarrito padding centrarCol '>
                        <Card className='tamanioCardCarrito'>
                        <Card.Img className='tamanioFotoCarrito' variant="top" src={prod.fotoID} />
                        <Card.Body className="centrarAling">
                            <Card.Title className='capitalize'>{prod.descripcion}</Card.Title>
                            <Card.Title className='capitalize' >Items: {prod.contador}</Card.Title>
                            <Card.Text>
                                <Button variant="success" onClick={()=> eliminarItem(prod.id)}>Eliminar item </Button>
                            </Card.Text>
                        </Card.Body>
                        </Card>
                        </div>)}
                            <div>
                                <div className='centrarCol'>
                                    <Button className='margin centrarCol btn-success-cart' variant="success" onClick={()=> borrarCarrito()}>Eliminar Carrito </Button>
                                </div>
                                <h2 className='bgTrans centrarAling bordeRadius margin bottom paddingMini'>Total : $ {calculateTotalPrice()}</h2>
                                <div className='fontBody'>
                                    {mostrar ? 
                                        <div className='centrarCol margin '>
                                            <Button className='btn-success-cart capitalize' variant="success" onClick={terminarCompra} >terminar compra</Button>            
                                        </div>
                                            :
                                        <div>
                                            <Form/>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    )

                  
          :
          <div className='centrarCol paddingB'>
              <h1 className='bgTrans centrarAling bordeRadius margin paddingMini'>??Ops, no hay productos en tu carito!</h1>
              <Link to={`/`}>
                  <Button className='centrarAling' variant="success">Ir a inicio</Button>
              </Link>
          </div>
        }
        </div>
            <Footer/>
        </div>
  )
} 

export default Cart