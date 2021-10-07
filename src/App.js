import {useState} from 'react'

import Personaje from './components/Personaje'
import NavBar from './components/NavBar'
import IniciarSesion from './components/IniciarSesion'
import Detalle from './components/Detalle'
import NoEncontrado from './components/NoEncontrado'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import '../src/assets/styles/global.scss'

function App() {
  //Para guardar los datos cuando se hace una busqueda
  const [datos, setDatos] = useState(null)
  return (
    <>
      <Router>
        <NavBar setDatos={setDatos}/>
        <Switch>
          <Route exact path="/">
            <Personaje datos={datos}/>
          </Route>
          <Route path="/inicio-sesion">
            <IniciarSesion />
          </Route>
          <Route strict path="/detalle/:filter">
            <Detalle datos={datos} setDatos={setDatos}/>
          </Route>
          <Route path="" component={NoEncontrado} />
          <Route path="/404" component={NoEncontrado} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
