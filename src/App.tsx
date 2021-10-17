import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import "semantic-ui-css/semantic.min.css";
import LoginPage from "./pages/LoginPage";
import UserHomePage from "./pages/UserHomePage";
import EvenementPage from "./pages/EvenementPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/register">
          <RegisterPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route path="/my-home">
          <UserHomePage />
        </Route>
        <Route path="/evenements">
          <EvenementPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
