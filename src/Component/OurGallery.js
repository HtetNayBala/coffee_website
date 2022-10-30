import g1 from '../img/g_1.jpg';
import g2 from '../img/g_2.jpg';
import g3 from '../img/g_3.jpg';
import g4 from '../img/g_4.jpg';
import g5 from '../img/g_5.jpg';
import g6 from '../img/g_6.jpg';
import g7 from '../img/g_7.jpg';
import g8 from '../img/g_8.jpg';


function OurGallery(props) {
    return (
        <div>
            <div className='min-h-[100vh] my-[80px] w-[80%] mx-auto'>
                <div className='mb-[70px]'>
                    <div className='text-center'>
                        <h4 className='second-title font-serif mb-3'>Our gallery</h4>
                    </div>
                    <div className='w-[50%] mx-auto text-center'>
                        <p className='text-gray-400 tracking-wider'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
                <div>
                    <div>
                        <div className='gallery-box space-y-4'>
                            <div className=''>
                                <img src={g1} alt=""/>
                            </div>
                            <div className=''>
                                <img src={g3} alt=""/>
                            </div>
                            <div className=''>
                                <img src={g2} alt=""/>
                            </div>
                            <div className=''>
                                <img src={g4} alt=""/>
                            </div>
                            <div className=''>
                                <img src={g5} alt=""/>
                            </div>
                            <div className=''>
                                <img src={g6} alt=""/>
                            </div>
                            <div className=''>
                                <img src={g7} alt=""/>
                            </div>
                            <div className=''>
                                <img src={g8} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurGallery;