import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/cadastro">
          <Cadastro />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
