import React from 'react'

export default function IniciarSesion() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div class="d-flex justify-content-center">
                        <div class="card">
                            <div class="card-header">
                                <h3>Iniciar sesión</h3>
                            </div>
                            <div class="card-body">
                                <form>
                                    <div class="input-group form-group">
                                        <input type="text" class="form-control" placeholder="Correo electrónico" />
                                    </div>
                                    <div class="input-group form-group">
                                        <input type="password" class="form-control" placeholder="Contraseña" />
                                    </div>
                                    <div class="form-group">
                                        <input type="submit" value="Enviar" class="btn float-right" />
                                    </div>
                                </form>
                            </div>
                            <div class="card-footer">
                                <div class="d-flex justify-content-center">
                                    <a href="#">Crear cuenta</a>
                                </div>
                                <div class="d-flex justify-content-center">
                                    <a href="#">¿Olvidaste tu contraseña?</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
