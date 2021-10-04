import './App.css';
// import bootstrap style css
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import NotFount from './Component/NotFount/NotFount';
import Header from './Component/Header/Header';
import Services from './Component/Services/Services';
import Footer from './Component/Footer/Footer';
import Teachers from './Component/Teachers/Teachers';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Header></Header>
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
        <Route path='/Services'>
          <Services></Services>
        </Route>
        <Route path='/Teachers'>
          <Teachers></Teachers>
        </Route>
        <Route path='*'>
          <NotFount></NotFount>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
