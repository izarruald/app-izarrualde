
/* import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons'; */
import React from 'react'
import {Navbar, Container, Nav, NavDropdown  } from 'react-bootstrap';
/* import CartWidget from '../../clases/clase4/CartWidget'; */
import prato from './1939.png'
const NavBar = () => {
    return (
            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home"><img src={prato} width='15%' className="boxmodCentrar" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar className="boxmodCentrar" id="basic-navbar-nav">
                <Nav className="me-auto ">
                    <Nav.Link className="fontMedia" href="#home">Home</Nav.Link>
                    <Nav.Link className="fontMedia" href="#link">Link</Nav.Link>
                    {/* <CartWidget/> */}
                    <NavDropdown className="fontMedia" title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar>
            </Container>
            </Navbar>
    )
}

export default NavBar
