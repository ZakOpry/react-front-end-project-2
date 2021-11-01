import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Favorites from './components/Favorites';
import Home from './components/Home';
import Recipes from './components/Recipes';
import TopNavBar from './components/TopNavBar';
import About from './components/About';


function App() {
  return (

    <Router>
      <Switch>
    <>
     <TopNavBar/>

     <Route exact path='/react-front-end-project-2'>
     <Home/>
     </Route>

     <Route path = '/recipes'>
     <Recipes/>
     </Route>

     <Route path = '/favorites'>
     <Favorites/>
     </Route>

     <Route path = '/about'>
     <About/>
     </Route>

    </>
    </Switch>
    </Router>
  );
}

export default App;
