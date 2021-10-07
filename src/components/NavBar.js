import { Navbar, Container, Form, Button, Nav, FormControl } from "react-bootstrap"
import { Redirect } from 'react-router-dom'

import "../assets/styles/navbar.scss"
import imagen from '../assets/images/harry-potter-logo.png'

import { Link } from 'react-router-dom';
import { useState } from "react";

export default function NavBar(props) {
    const [cambio, setCambio] = useState(false)
    //Busca al personaje por el nombre
    const buscaPersonaje = (e) => {
        e.preventDefault();
        let valorBuscar = e.target[0].value;
        let url = `http://localhost:3001/hp-characters?name_like=${valorBuscar}`;
        //Se hace la petición de nuevo para renderizar el nuevo valor
        fetch(url)
            .then(resp => resp.json())
            .then(
                (data) => props.setDatos(data),
                (error) => console.log(error)
            )
    }

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
                            <Form className="d-flex" onSubmit={buscaPersonaje}>
                                <FormControl
                                    type="search"
                                    placeholder="Buscar"
                                    className="mr-2"
                                />
                                <Button variant="outline-success" type="submit">Buscar</Button>
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
