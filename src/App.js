import './App.css';
import 'glider-js/glider.min.css';
import Touche from "./MainComponents/Touche";
import AboutUs from "./MainComponents/AboutUs";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Menu from './MainComponents/Menu'
import Reservation from "./MainComponents/Reservation";
import NewsAndEvents from "./MainComponents/NewsAndEvents";
import Gallery from "./MainComponents/Gallery";
import Contact from "./MainComponents/Contact";
import Nav from "./Component/Nav";

function App(props) {


  return (
          <Router>
              <Nav/>
              <Routes>
                  <Route path='/' element={<Touche/>}>Touche</Route>
                  <Route path='/about' element={<AboutUs/>}>About</Route>
                  <Route path='/menu' element={<Menu/>}>Menu</Route>
                  <Route path='/reserve' element={<Reservation/>}>Reservation</Route>
                  <Route path='/news' element={<NewsAndEvents/>}>News And Events</Route>
                  <Route path='/gallery' element={<Gallery/>}>Gallery</Route>
                  <Route path='/contact' element={<Contact/>}>Contact</Route>
              </Routes>
          </Router>
  );
};

export default App;