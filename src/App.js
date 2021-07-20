import { BrowserRouter, Route, Switch } from "react-router-dom";
import ConnectFour from "./pages/ConnectFour";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/connect-four" exact component={ConnectFour} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
