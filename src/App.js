import './App.css';
import UserData from './components/UserData'
import Nav from './utilities/Nav'
import Comments from './components/Comments'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import UserDetails from './components/UserDetails';
import { browserHistory } from 'react-router'

function App() {
  return (
    <Router>
    <Nav/>
    <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/users" exact component={UserData} />
    <Route path="/users/:id" component={UserDetails}/>
    <Route path="/comment" component={Comments}/>
    </Switch>
   </Router>
  );
}

export default App;
