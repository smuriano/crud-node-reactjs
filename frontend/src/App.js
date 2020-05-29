import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import NavbarLayout from './components/layouts/navbar.layout';
import HomePage from "./components/pages/home.page";
import ProdutoPage from "./components/pages/produto.page";
import AboutPage from "./components/pages/about.page";
import NotFoundPage from "./components/pages/notfound.page";
import ProdutoAdd from "./components/produtos/produto.add";
import ProdutoEdit from "./components/produtos/produto.edit";

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarLayout />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/produtos" component={ProdutoPage} />
          <Route exact path="/produtos/novo" component={ProdutoAdd} />
          <Route exact path="/produtos/:id" component={ProdutoEdit} />
          <Route exact path="/sobre" component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;