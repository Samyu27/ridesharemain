import React ,{ Component} from 'react';
import {Router,Switch,Route} from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';
import history from './history'
import Driver from './Driver';
import Pooler from './Pooler';



class App extends Component {
  
    render() {
      return (
        <Router history={history}>
    <div className="App">
      <Switch>
      
        <Route exact path="/" component={Signup}/>
        <Route path="/login" component={Login}/>
        <Route path="/Home" component={Home}/>
        <Route path="/Driver" component={Driver}/>
        <Route path="/Pooler" component={Pooler}/>
      </Switch>
    </div>
  </Router>
      );
    }
  }
  
  export default App;
  