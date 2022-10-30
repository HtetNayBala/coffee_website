import food_1 from '../img/food_1.jpg'
import food_2 from '../img/food_2.jpg'
import food_3 from '../img/food_3.jpg'
import food_4 from '../img/food_4.jpg'
import food_5 from '../img/food_5.jpg'
import food_6 from '../img/food_6.jpg'
import Glider from 'react-glider';
import {FiArrowLeftCircle,FiArrowRightCircle} from 'react-icons/fi'


function FeaturedDishes(props) {

    return (
        <div className='min-h-[50vh] w-[80%] mx-auto my-[110px]'>
            <div className='mb-[70px]'>
                <div className='text-center'>
                    <h4 className='second-title font-serif mb-3'>Our <span className='italic'>Featured Dishes</span></h4>
                </div>
                <div className='w-[50%] mx-auto text-center'>
                    <p className='text-gray-400 tracking-wider'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione numquam eos perferendis itaque hic unde, ad, laudantium minima.
                    </p>
                </div>
            </div>
            <Glider
            draggable
            hasArrows
            slidesToShow={4}
            slidesToScroll={1}
            duration={1.5}
            iconLeft={<FiArrowLeftCircle className='text-[50px] bg-white rounded-full hover:text-white hover:bg-[#e4a650]'/>}
            iconRight={<FiArrowRightCircle className='text-[50px] bg-white rounded-full hover:text-white hover:bg-[#e4a650]'/>}
            >
                <div className='px-3'>
                    <div className='mb-[10px]'>
                        <img src={food_6} className='' alt=""/>
                    </div>
                    <div className='w-[85%] mx-auto'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <h4 className='text-[20px] font-serif'>Lorem ipsum dolor</h4>
                                <h4 className='text-[20px] font-serif'>sit amet</h4>
                            </div>
                            <p className='text-xl'>$25</p>
                        </div>
                        <p className='text-gray-400 tracking-widest text-[15px] mt-[5px]'>
                            Lorem ipsum do Sapiente laudantium.
                        </p>
                    </div>
                </div>
                <div className='px-3'>
                    <div className='mb-[10px]'>
                        <img src={food_5} className='' alt=""/>
                    </div>
                    <div className='w-[85%] mx-auto'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <h4 className='text-[20px] font-serif'>Lorem ipsum dolor</h4>
                                <h4 className='text-[20px] font-serif'>sit amet</h4>
                            </div>
                            <p className='text-xl'>$25</p>
                        </div>
                        <p className='text-gray-400 tracking-widest text-[15px] mt-[5px]'>
                            Lorem ipsum do Sapiente laudantium.
                        </p>
                    </div>
                </div>
                <div className='px-3'>
                    <div className='mb-[10px]'>
                        <img src={food_2} className='' alt=""/>
                    </div>
                    <div className='w-[85%] mx-auto'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <h4 className='text-[20px] font-serif'>Lorem ipsum dolor</h4>
                                <h4 className='text-[20px] font-serif'>sit amet</h4>
                            </div>
                            <p className='text-xl'>$25</p>
                        </div>
                        <p className='text-gray-400 tracking-widest text-[15px] mt-[5px]'>
                            Lorem ipsum do Sapiente laudantium.
                        </p>
                    </div>
                </div>
                <div className='px-3'>
                    <div className='mb-[10px]'>
                        <img src={food_1} className='' alt=""/>
                    </div>
                    <div className='w-[85%] mx-auto'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <h4 className='text-[20px] font-serif'>Lorem ipsum dolor</h4>
                                <h4 className='text-[20px] font-serif'>sit amet</h4>
                            </div>
                            <p className='text-xl'>$25</p>
                        </div>
                        <p className='text-gray-400 tracking-widest text-[15px] mt-[5px]'>
                            Lorem ipsum do Sapiente laudantium.
                        </p>
                    </div>
                </div>
                <div className='px-3'>
                    <div className='mb-[10px]'>
                        <img src={food_3} className='' alt=""/>
                    </div>
                    <div className='w-[85%] mx-auto'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <h4 className='text-[20px] font-serif'>Lorem ipsum dolor</h4>
                                <h4 className='text-[20px] font-serif'>sit amet</h4>
                            </div>
                            <p className='text-xl'>$25</p>
                        </div>
                        <p className='text-gray-400 tracking-widest text-[15px] mt-[5px]'>
                            Lorem ipsum do Sapiente laudantium.
                        </p>
                    </div>
                </div>
                <div className='px-3'>
                    <div className='mb-[10px]'>
                        <img src={food_5} className='' alt=""/>
                    </div>
                    <div className='w-[85%] mx-auto'>
                        <div className='flex items-center justify-between'>
                            <div>
                                <h4 className='text-[20px] font-serif'>Lorem ipsum dolor</h4>
                                <h4 className='text-[20px] font-serif'>sit amet</h4>
                            </div>
                            <p className='text-xl'>$25</p>
                        </div>
                        <p className='text-gray-400 tracking-widest text-[15px] mt-[5px]'>
                            Lorem ipsum do Sapiente laudantium.
                        </p>
                    </div>
                </div>
            </Glider>
        </div>
    );
}

export default FeaturedDishes;