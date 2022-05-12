import { Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Todo from './pages/Todo';

function App() {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/todo" component={Todo} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
