import { configureStore } from '@reduxjs/toolkit'
import detalle from './reducer'

export default configureStore({
  // Se crea el reducer
    reducer: {
        detallePersonaje: detalle,
      },
})