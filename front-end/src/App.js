import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Favorites from './components/Favorites';
import Home from './components/Home';
import Recipes from './components/Recipes';
import TopNavBar from './components/TopNavBar';
import About from './components/About';
import MobileNavBar from './components/MobileNavBar';
import Media from 'react-media'


function App() {
  return (

    <Router>
      <Switch>
    <>

    <Media query="(min-width: 639px)">
      {matches => {
        return matches ? <TopNavBar/> : <MobileNavBar/>
      }}
      </Media>
    <Switch> 
     <Route exact path='/'>
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

     <Route path = "*">
       <h1>Error</h1>
     </Route>
      </Switch>

    </>
    </Switch>
    </Router>
  );
}

export default App;
