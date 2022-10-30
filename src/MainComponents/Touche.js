import Nav from "../Component/Nav";
import Home from "../Component/Home";
import CoffeeBreak from "../Component/CoffeeBreak";
import OutdoorSeating from "../Component/OutdoorSeating";
import WinningAward from "../Component/WinningAward";
import MenuOptions from "../Component/MenuOptions";
import FeaturedDishes from "../Component/FeaturedDishes";
import OnlineReservation from "../Component/OnlineReservation";
import Testimonies from "../Component/Testimonies";
import ComingEvent from "../Component/ComingEvent";
import NewsLetter from "../Component/NewsLetter";
import OurGallery from "../Component/OurGallery";
import Footer from "../Component/Footer";
import Map from "../Component/map";

function Touche(props) {
    return (
        <div>
            <Nav className='z-10'/>
            <Home/>
            <CoffeeBreak/>
            <OutdoorSeating/>
            <WinningAward/>
            <MenuOptions/>
            <FeaturedDishes/>
            <OnlineReservation/>
            <Testimonies/>
            <ComingEvent/>
            <NewsLetter/>
            <OurGallery/>
                <Map/>
            <Footer/>
        </div>
    );
}

export default Touche;