
import Navbar from './components/Navbar.js';
import AllPlayers from './components/Allusers.js';
import AddPlayer from './components/Adduser.js';
import Notfound from './components/Notfound.js';
import EditPlayer from './components/Edituser.js';
import Home from './components/Home.js';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Switch>
    <Route exact path= "/" component={Home}/>
    <Route exact path= "/all" component={AllPlayers}/>
    <Route exact path= "/add" component={AddPlayer}/>
    <Route exact path= "/edit/:id" component={EditPlayer}/>
    <Route component={Notfound}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
