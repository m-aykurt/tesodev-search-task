import Main from "./pages/Main";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Main} />
    </Router>
  );
}

export default App;
