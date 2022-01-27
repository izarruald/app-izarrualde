import {Link, NavLink} from 'react-router-dom'
import React from 'react'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import  CartWidget  from '../components/CartWidget';
import punto from '../assets/img/logo-punto.png'

const NavBarr = () => {
    return (
        <Navbar expand="lg">
        <Container>
            <Navbar.Brand href="/"><img src={punto} className=" centrarImg imgPunto" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link><div><Link className="fontMedia paddingRL paddingT home fuenteNavbar" to='/' > Inicio </Link></div></Nav.Link>
                <Nav.Link><div><Link className="fontMedia paddingRL paddingT home fuenteNavbar" to='/categoria/frutos-secos' >Frutos Secos</Link></div></Nav.Link>
                <Nav.Link><div><Link className="fontMedia paddingRL paddingT home fuenteNavbar capitalize" to='/categoria/cereales' >Cereales</Link></div></Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}

export default NavBarr
