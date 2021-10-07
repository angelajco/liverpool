import { Navbar, Container, Form, Button, Nav, FormControl } from "react-bootstrap"

import "../assets/styles/navbar.scss"
import imagen from '../assets/images/harry-potter-logo.png'

import { Link } from 'react-router-dom';

export default function NavBar(props) {

    return (
        <>
            <Navbar bg="dark" expand="lg" className="navbar-general">
                <Container>
                    <Link to="/">
                        <Navbar.Brand>
                            <img
                                alt="logo"
                                src={imagen}
                                width={150}
                            />
                        </Navbar.Brand>
                    </Link>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Buscar"
                                    className="mr-2"
                                />
                                <Button variant="outline-success">Buscar</Button>
                            </Form>
                        </Nav>
                        <Nav className="ml-auto">
                            <Link to="/inicio-sesion" className="link-navegacion">
                                Iniciar sesión
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
