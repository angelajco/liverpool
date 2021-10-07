import { createSlice } from '@reduxjs/toolkit'

export const detallePersonaje = createSlice({
    name: 'detalle',
    initialState: {
        value: null,
    },
    reducers: {
        añade: (state, valor) => {
            // Esta funcion añade el personaje que contiene toda su información
            state.value = valor;
        },
    },
})

export const { añade } = detallePersonaje.actions

export default detallePersonaje.reducer