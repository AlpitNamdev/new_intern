
import './App.css';
import Counter from './counter';
import ResForm from "./ResForm";
import {BrowserRouter as Router ,Route , Link} from 'react-router-dom';
import Home from './home';

function App() {
  return (
    <div className="page">
    <div className="nav">

    <Router>
      <Link to="/counter">Counter</Link>
      <Link to="/login">Login</Link>
    <Route path="/counter" component={Counter}></Route>
    <Route path="/login" component={ResForm}></Route>
    <Route path="/Home" component={Home}></Route>
    </Router>
    </div>
    {/* <Counter></Counter>
    <ResForm></ResForm> */}
    </div>
  );
}

export default App;
