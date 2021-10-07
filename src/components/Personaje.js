import { useEffect, useState, Fragment } from 'react'

import { Figure } from 'react-bootstrap'

import "../assets/styles/grid.scss"

import { useDispatch } from 'react-redux'
import { añade } from '../redux/reducer'

import { Link } from 'react-router-dom';

export default function Personaje(props) {
    const dispatch = useDispatch()
    //Estado para mostrar el modal
    const [muestraModal, setMuestraModal] = useState(false)

    //Estado para guardar los personajes que vengan del JSON SERVER
    const [informacion, setInformacion] = useState([])

    const [urlDato, setUrlDatos] = useState("")
    //Se ejecuta cada vez que el filtro que se pasa por props cambia, si se da clic en los botones de filtro
    useEffect(() => {
        //Por defecto muestra a los estudiantes
        let url = "http://localhost:3001/hp-characters";
        setUrlDatos(url)
        //Se hace la petición
        fetch(url)
            .then(resp => resp.json())
            .then(
                (data) => setInformacion(data),
                (error) => console.log(error)
            )
    }, [])

    const detallePersonaje = (personaje) => {
        dispatch(añade(personaje))
    }

    return (
        <>
            {
                muestraModal && (
                    <div className="modal">

                    </div >
                )
            }

            <div className="container">
                <div className="row">
                    {informacion.length !== 0 && (
                        informacion.map((dato, index) => (
                            <div key={index} className="col-3">
                                <Link onClick={() => detallePersonaje(dato)} to={`/detalle/${dato.name.replace( /\s/g, '')}`}>
                                    <Figure>
                                        <Figure.Image
                                            width={200}
                                            height={225}
                                            alt={dato.name}
                                            src={dato.image}
                                            fluid={false}
                                            className="imagen-foto"
                                        />
                                        {/* <img src={dato.image} className="imagen-foto" alt="foto" /> */}
                                        <Figure.Caption className="caption">
                                            <p><b>Nombre:</b><br /><span>{dato.name}</span></p>
                                            <p><b>Actor:</b><br /><span>{dato.actor}</span></p>
                                        </Figure.Caption>
                                    </Figure>
                                </Link>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    )
}
