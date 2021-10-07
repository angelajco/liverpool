import React from 'react'
import { useSelector } from 'react-redux'
import {Redirect} from 'react-router-dom'

export default function Detalle() {
    //Selector de Redux que guarda la información del personaje que se le da clic
    const detallePersonaje = useSelector((state) => state.detallePersonaje.value)

    if (!detallePersonaje) {
        // not logged in so redirect to login page with the return url
        return <Redirect push to={{ pathname: '/404' }} />
    }
    return (
        <div>
            Este es el detalle
        </div>
    )
}
