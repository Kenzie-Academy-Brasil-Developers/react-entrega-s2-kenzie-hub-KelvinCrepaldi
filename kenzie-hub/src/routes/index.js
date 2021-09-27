import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import { useEffect, useState } from "react";
import DashBoard from "../pages/DashBoard";

const Routes = () => {
  const [autenticated, setAutenticated] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@kenziehub:token"));

    if (token) {
      return setAutenticated(true);
    }
  }, [autenticated]);

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home autenticated={autenticated} />
        </Route>
        <Route path="/login">
          <Login
            autenticated={autenticated}
            setAutenticated={setAutenticated}
          />
        </Route>
        <Route path="/cadastro">
          <Cadastro autenticated={autenticated} />
        </Route>
        <Route path="/dashboard">
          <DashBoard
            autenticated={autenticated}
            setAutenticated={setAutenticated}
          />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
