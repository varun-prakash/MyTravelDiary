import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Setting from "./Pages/Settings/Setting";
import Single from "./Pages/Single/Single";
import Write from "./Pages/Write/Write";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function App() {
  const user = true;
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            {user ? <Home /> : <Register />}
          </Route>
          <Route path="/Write">{user ? <Write /> : <Register />}</Route>
          <Route path="/Login">{user ? <Home /> : <Login />}</Route>
          <Route path="/Register">{user ? <Home /> : <Register />}</Route>
          <Route path="/Settings">{user ? <Setting /> : <Register />}</Route>
          <Route path="/Post/:Id">
            <Single />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
