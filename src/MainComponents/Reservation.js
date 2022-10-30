import Nav from "../Component/Nav";
import OnlineReservation from "../Component/OnlineReservation";
import Footer from "../Component/Footer";
import Map from "../Component/map";

function Reservation(props) {
    return (
        <div>
            <Nav/>
            <div className='home bg-[url("./img/meeting_bg.jpg")] bg-bottom bg-fixed bg-cover min-h-[70vh] flex items-center justify-center'>
                <h4 className='font-serif text-[50px] text-white z-[10]'>Reservation</h4>
            </div>
            <OnlineReservation/>
            <div className='bg-[#eaecef] pb-[70px]'>
                <div className='mx-auto text-center py-[30px] w-[500px] relative call-us'>
                    <h4 className='text-gray-400 uppercase para'>Or Call us:</h4>
                    <h4 className='font-bold second-title'>+1 987 654 3210</h4>
                </div>
            </div>
            <Map/>
            <Footer/>
        </div>
    );
}

export default Reservation;