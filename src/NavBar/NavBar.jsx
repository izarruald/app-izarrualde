import {Link, NavLink} from 'react-router-dom'
import React from 'react'
import {Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import  CartWidget  from '../components/CartWidget';
import punto from '../assets/img/punto-saludable-agrupado.png'

const NavBar = () => {
    return (
            <Navbar className='bgPunto container-fluid'  expand="lg">
            <Container >
                <Navbar.Brand href="/"><img src={punto} style={{width:'65px' , height:'65px'}} className="boxmodCentrar" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar className="boxmodCentrar" id="basic-navbar-nav">
                <Nav className="me-auto ">
                    <Link className="fontMedia home paddingT" to='/' >Home</Link>
                    <NavDropdown className="fontMedia" title="Dropdown" id="basic-nav-dropdown">
                        <Link className=" dropdown-item" to='/categoria/frutos-secos' >Frutos secos</Link>
                        <NavLink className=" dropdown-item"  to='/categoria/cereales'>Cereales</NavLink>
                        <NavLink className=" dropdown-item"  to='/cart'>Carrito</NavLink>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className="fontMedia" href="#link"><CartWidget/></Nav.Link>
                </Nav>
                </Navbar>
            </Container>
            </Navbar>
    )
}

export default NavBar
