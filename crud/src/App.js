import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbaar from './components/Navbaar';
import Home from './components/Home';
import Register from './components/Register';
import Edit from './components/Edit';
import Details from './components/Details';
import {Switch,Route} from "react-router-dom"
import Show from './components/Show';
import Booking from './components/Booking';



function App() {
  return (
   <>
    <Navbaar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/show" component={Show} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/booking" component={Booking} />
      <Route exact path="/edit/:id" component={Edit} />
      <Route exact path="/view/:id" component={Details} />
    </Switch>
   
   </>
  );
}

export default App;






