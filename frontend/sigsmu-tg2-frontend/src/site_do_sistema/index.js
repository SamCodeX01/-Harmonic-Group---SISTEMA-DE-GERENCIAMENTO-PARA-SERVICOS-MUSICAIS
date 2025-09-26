import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import HOME from './views/home'
import Boto from './views/boto'
import Component1 from './views/component1'
import Componentes from './views/componentes'
import Logotipo300px2 from './views/logotipo300px2'
import Logotipopreto300px2 from './views/logotipopreto300px2'
import Logotipobranco300px1 from './views/logotipobranco300px1'
import SOBRE from './views/sobre'
import Footer from './views/footer'
import ORAMENTOS from './views/oramentos'
import SERVIOSREPERTRIOSABAABERTA from './views/serviosrepertriosabaaberta'
import CONTATO from './views/contato'
import PARCERIAS from './views/parcerias'
import BotoMobile from './views/boto-mobile'
import PARCERIASMENUABERTO from './views/parceriasmenuaberto'
import Auxiliarslide from './views/auxiliarslide'
import Boto1 from './views/boto1'
import Select from './views/select'
import Lista from './views/lista'
import Modalconfirmaooramento from './views/modalconfirmaooramento'
import ORAMENTOS1 from './views/oramentos1'
import Botodesabilitado from './views/botodesabilitado'
import Lista2 from './views/lista2'
import Modalconfirmaooramento1 from './views/modalconfirmaooramento1'
import QuetalfazerpartedoHarmonicGroup from './views/quetalfazerpartedo-harmonic-group'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={HOME} exact path="/" />
        <Route component={Boto} exact path="/boto" />
        <Route component={Component1} exact path="/component1" />
        <Route component={Componentes} exact path="/componentes" />
        <Route component={Logotipo300px2} exact path="/logotipo300px2" />
        <Route
          component={Logotipopreto300px2}
          exact
          path="/logotipopreto300px2"
        />
        <Route
          component={Logotipobranco300px1}
          exact
          path="/logotipobranco300px1"
        />
        <Route component={SOBRE} exact path="/sobre" />
        <Route component={Footer} exact path="/footer" />
        <Route component={ORAMENTOS} exact path="/oramentos" />
        <Route
          component={SERVIOSREPERTRIOSABAABERTA}
          exact
          path="/serviosrepertriosabaaberta"
        />
        <Route component={CONTATO} exact path="/contato" />
        <Route component={PARCERIAS} exact path="/parcerias" />
        <Route component={BotoMobile} exact path="/boto-mobile" />
        <Route
          component={PARCERIASMENUABERTO}
          exact
          path="/parceriasmenuaberto"
        />
        <Route component={Auxiliarslide} exact path="/auxiliarslide" />
        <Route component={Boto1} exact path="/boto1" />
        <Route component={Select} exact path="/select" />
        <Route component={Lista} exact path="/lista" />
        <Route
          component={Modalconfirmaooramento}
          exact
          path="/modalconfirmaooramento"
        />
        <Route component={ORAMENTOS1} exact path="/oramentos1" />
        <Route component={Botodesabilitado} exact path="/botodesabilitado" />
        <Route component={Lista2} exact path="/lista2" />
        <Route
          component={Modalconfirmaooramento1}
          exact
          path="/modalconfirmaooramento1"
        />
        <Route
          component={QuetalfazerpartedoHarmonicGroup}
          exact
          path="/quetalfazerpartedo-harmonic-group"
        />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
