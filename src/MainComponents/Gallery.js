import Nav from "../Component/Nav";
import img2 from '../img/coffee_making.jpg'
import img1 from '../img/g_6.jpg'
import img3 from '../img/menu_food_bg.jpg'
import Glider from "react-glider";
import {FiArrowLeftCircle, FiArrowRightCircle} from "react-icons/fi";
import OurGallery from "../Component/OurGallery";
import NewsLetter from "../Component/NewsLetter";
import Footer from "../Component/Footer";


function Gallery(props) {
    return (
        <div>
            <Nav/>
            <div className='home bg-[url("./img/glass_bg.jpg")] bg-bottom bg-fixed bg-cover min-h-[70vh] flex items-center justify-center'>
                <h4 className='font-serif text-[50px] text-white z-[10]'>Our Gallery</h4>
            </div>
            <div className='w-[80%] mx-auto my-[100px]'>
                <div className='mb-[70px]'>
                    <div className='text-center'>
                        <h4 className='second-title font-serif mb-3'>Take a sneak peek</h4>
                    </div>
                    <div className='w-[50%] mx-auto text-center'>
                        <p className='text-gray-400 tracking-wider'>
                            Asperiores temporibus fuga possimus labore ex porro pariatur sed, nisi dolor, nobis architecto. Placeat facilis voluptas alias ducimus.
                        </p>
                    </div>
                </div>
                <div>
                    <Glider
                        draggable
                        hasDots
                        hasArrows
                        iconLeft={<FiArrowLeftCircle className='text-[50px] bg-white rounded-full hover:text-white hover:bg-[#e4a650]'/>}
                        iconRight={<FiArrowRightCircle className='text-[50px] bg-white rounded-full hover:text-white hover:bg-[#e4a650]'/>}
                    >
                        <div>
                            <div className='mb-[10px]'>
                                <img src={img1} alt=""/>
                            </div>
                            <div className='text-center'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div>
                            <div className='mb-[10px]'>
                                <img src={img2} alt=""/>
                            </div>
                            <div className='text-center'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div>
                            <div className='mb-[10px]'>
                                <img src={img3} alt=""/>
                            </div>
                            <div className='text-center'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </Glider>
                </div>
            </div>
            <OurGallery/>
            <NewsLetter/>
            <Footer/>
        </div>
    );
}

export default Gallery;