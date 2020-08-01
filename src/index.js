import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import Home from './pages/home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/video';
import CadastroCategoria from './pages/cadastro/categoria';

const Pagina404 = () => (<div>Página 404. Página não encontrada.</div>)

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/cadastro/video' component={CadastroVideo} exact/>
      <Route path='/cadastro/categoria' component={CadastroCategoria} exact/>
      <Route component={Pagina404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

