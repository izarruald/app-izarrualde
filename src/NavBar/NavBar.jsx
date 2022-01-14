import {Link, NavLink} from 'react-router-dom'
import React from 'react'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import  CartWidget  from '../components/CartWidget';
import punto from '../assets/img/punto-saludable-agrupado.png'

const NavBar = () => {
    return (
            <Navbar className='bgPunto'  expand="lg">
            <Container >
                <Navbar.Brand href="/"><img src={punto} className="boxmodCentrar imgPunto" /></Navbar.Brand>
                <Navbar className="boxmodCentrar" id="basic-navbar-nav">
                <Nav className="me-auto ">
                    <Link className="fontMedia home paddingT" to='/' >Inicio</Link>
                    <NavDropdown className="fontMedia" title="Categorias" id="basic-nav-dropdown">
                        <Link className=" dropdown-item" to='/categoria/frutos-secos' >Frutos secos</Link>
                        <NavLink className=" dropdown-item"  to='/categoria/cereales'>Cereales</NavLink>
                        <NavDropdown.Divider/>
                        <NavLink className=" dropdown-item"  to='/cart'>Carrito</NavLink>
                    </NavDropdown>
                    <Nav.Link className="fontMedia" href="/cart"><CartWidget/></Nav.Link>
                </Nav>
                </Navbar>
            </Container>
            </Navbar>
    )
}

export default NavBar
