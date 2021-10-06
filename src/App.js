import Main from "./pages/Main";
import Result from "./pages/Result";
import Github from "./components/Github";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Route exact path="/" component={Main} />
        <Route path="/result" component={Result} />
      </Router>
      <Github />
    </div>
  );
}

export default App;
