import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

export default function Detalle(props) {

    //Selector de Redux que guarda la información del personaje que se le da clic
    const detallePersonaje = useSelector((state) => state.detallePersonaje.value)
    if (!detallePersonaje) {
        return <Redirect push to={{ pathname: '/404' }} />
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-4 text-center">
                    <img src={detallePersonaje.payload.image} className="imagen-detalle" />
                </div>
                <div className="col-8">
                    <p>
                        <b>Nombre:</b> {detallePersonaje.payload.name}
                    </p>
                    <p>
                        <b>Genero:</b> <span className="datos-mayusculas">{detallePersonaje.payload.gender}</span>
                    </p>
                    <>
                        {
                            [
                                detallePersonaje.payload.house && (
                                    <p key="1">
                                        <b>Casa:</b> {detallePersonaje.payload.house}
                                    </p>
                                ),
                                detallePersonaje.payload.dateOfBirth && (
                                    <p key="2">
                                        <b>Fecha de nacimiento:</b> {detallePersonaje.payload.dateOfBirth}
                                    </p>
                                ),
                                detallePersonaje.payload.eyeColour && (
                                    <p key="3">
                                        <b>Color de ojos:</b> <span className="datos-mayusculas">{detallePersonaje.payload.eyeColour}</span>
                                    </p>
                                ),
                                detallePersonaje.payload.hairColour && (
                                    <p key="4">
                                        <b>Color de cabello:</b> <span className="datos-mayusculas">{detallePersonaje.payload.hairColour}</span>
                                    </p>
                                ),
                                detallePersonaje.payload.alive && (
                                    <p key="5">
                                        <b>Vivo:</b> {detallePersonaje.payload.alive === true ? "Sí" : "No"}
                                    </p>
                                )
                            ]
                        }
                    </>
                    <p>
                        <b>Actor:</b> {detallePersonaje.payload.actor}
                    </p>
                </div>
            </div>
        </div>
    )
}
