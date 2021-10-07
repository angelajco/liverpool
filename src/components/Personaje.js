import { useEffect, useState, Fragment } from 'react'

import { Figure } from 'react-bootstrap'

import "../assets/styles/grid.scss"

import { useDispatch } from 'react-redux'
import { añade } from '../redux/reducer'

import { Link } from 'react-router-dom';

export default function Personaje(props) {
    //Para traer los datos del store
    const dispatch = useDispatch()
    //Estado para mostrar el modal
    const [muestraModal, setMuestraModal] = useState(false)

    //Estado para guardar los personajes que vengan del JSON SERVER
    const [informacion, setInformacion] = useState([])
    useEffect(() => {
        if (props.datos) {
            setInformacion(props.datos)
        } else {
            //Por defecto muestra a todos los personajes
            let url = "http://localhost:3001/hp-characters";
            //Se hace la petición
            fetch(url)
                .then(resp => resp.json())
                .then(
                    (data) => setInformacion(data),
                    (error) => console.log(error)
                )
        }
    }, [props.datos])

    //Añade al store la información del personaje
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
                    {informacion.length !== 0 ? (
                        informacion.map((dato, index) => (
                            <div key={index} className="col-3">
                                <Link onClick={() => detallePersonaje(dato)} to={`/detalle/${dato.name.replace(/\s/g, '')}`}>
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
                    ) : (
                        <div className="col-12">
                            <b>No se ha encontrado ningun resultado con esos parametros. Intenta otra búsqueda</b>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
