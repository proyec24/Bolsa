import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "./theme";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Registro from "./Pages/RegistroUser";
import RegistroEmpresa from "./Pages/RegistroEmpresa";
import Perfil from "./Pages/Perfil";
import RegistroVacante from "./Pages/RegistroVacante";
import SubirCV from "./Pages/subirCV";
import DatosPerfil from "./Pages/DatosPerfil";
import Footer from "./Components/Footer/Footer";
import Dashboard from "./Pages/Dashboard";
import PerfilTalento from "./Components/Perfil/PerfilTalento";
import PerfilEmpresa from "./Components/Perfil/PerfilEmpresa";

const App = () => {
  const [conectado, setConectado] = useState(false);

  const acceder = (estado) => {
    setConectado(estado);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Router>
          <div>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/iniciar-sesion">
                <Login acceder={acceder} />
              </Route>
              <Route path="/perfil">
                <Perfil />
              </Route>
              <Route path="/registro">
                <Registro />
              </Route>
              <Route path="/registro-empresas">
                <RegistroEmpresa />
              </Route>
              <Route path="/registerVacante">
                <RegistroVacante />
              </Route>
              <Route path="/subirCV">
                <SubirCV />
              </Route>
              <Route path="/perfilTalento">
                <PerfilTalento />
              </Route>
              <Route path="/perfilEmpresa" component={PerfilEmpresa} />
              <Route path="/datosPerfil">
                <DatosPerfil />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
      <Footer />
    </ThemeProvider>
  );
};
export default App;
