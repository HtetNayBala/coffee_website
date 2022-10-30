import Nav from "../Component/Nav";
import MenuOptions from "../Component/MenuOptions";
import FeaturedDishes from "../Component/FeaturedDishes";
import OnlineReservation from "../Component/OnlineReservation";
import Footer from "../Component/Footer";

function Menu(props) {
    return (
        <div>
            <Nav/>
            <div className='home bg-[url("./img/menu_food_bg.jpg")] bg-bottom bg-fixed bg-cover min-h-[70vh] flex items-center justify-center'>
                <h4 className='font-serif text-[50px] text-white z-[10]'>Our Menu</h4>
            </div>
            <MenuOptions/>
            <FeaturedDishes/>
            <OnlineReservation/>
            <Footer/>
        </div>
    );
}

export default Menu;