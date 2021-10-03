import logo from './logo.svg';
import './App.css';
// import bootstrap style css
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import NotFount from './Component/NotFount/NotFount';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/Home'>
          <Home></Home>
        </Route>
        <Route path='/About'>
          <About></About>
        </Route>
        <Route path='*'>
          <NotFount></NotFount>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
