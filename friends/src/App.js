import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'; 
import PrivateRoute from './components/PrivateRoute';

import Login from './components/Login';
import FriendsList from './components/FriendsList';

function App() {
  return (
    <div className="App">
      <Router>

        {/* add in navbar links here */}
        
        <Switch>
          <PrivateRoute exact path='/friendslist' component={FriendsList} />
          <Route path={'/login'} component={Login} />
          <Route component={Login} />
        </Switch>
      
      </Router>
    </div>
  );
}

export default App;
