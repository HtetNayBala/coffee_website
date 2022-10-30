import client from '../img/client.jpg';
import client1 from '../img/client_1.jpg';
import client2 from '../img/client_2.jpg';
import Glider from "react-glider";
import {BsChevronLeft, BsChevronRight} from "react-icons/bs";


function Testimonies(props) {
    return (
        <div className='border-b border-gray-200 min-h-[50vh]'>
            <div className='w-[80%] mx-auto my-[80px]'>
                <div className='mb-[70px]'>
                    <div className='text-center'>
                        <h4 className='second-title font-serif mb-3'>What clients say about us</h4>
                    </div>
                    <div className='w-[50%] mx-auto text-center'>
                        <p className='text-gray-400 tracking-wider'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
                <Glider
                    draggable
                    hasArrows
                    hasDots
                    duration={1.5}
                    iconLeft={<BsChevronLeft className='text-[25px] hover:text-[#e4a650]  text-black rounded-full'/>}
                    iconRight={<BsChevronRight className='text-[25px] hover:text-[#e4a650]  text-black rounded-full'/>}
                >
                    <div className='flex items-center w-[70%] mx-auto'>
                        <div className='w-[60%]'>
                            <div className='w-[75%] mx-auto tracking-wider space-y-4'>
                                <q className='font-serif text-[20px]'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at exercitationem hic illum, mollitia nulla officia porro quas rem rerum? Atque consequatur eligendi, nostrum perferendis quas qui quia sed suscipit. </q>
                                <p className='text-gray-400 uppercase text-[12px] font-semibold'>- Liam Smith</p>
                            </div>
                        </div>
                        <div className='w-[30%]'>
                            <img src={client1} className='rounded-full w-[70%] mr-auto' alt=""/>
                        </div>
                    </div>
                    <div className='flex items-center w-[70%] mx-auto'>
                        <div className='w-[60%]'>
                            <div className='w-[75%] mx-auto tracking-wider space-y-4'>
                                <q className='font-serif text-[20px]'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at exercitationem hic illum, mollitia nulla officia porro quas rem rerum? Atque consequatur eligendi, nostrum perferendis quas qui quia sed suscipit. </q>
                                <p className='text-gray-400 uppercase text-[12px] font-semibold'>- Olivia Jhonson</p>
                            </div>
                        </div>
                        <div className='w-[30%]'>
                            <img src={client} className='rounded-full w-[70%] mr-auto' alt=""/>
                        </div>
                    </div>
                    <div className='flex items-center w-[70%] mx-auto'>
                        <div className='w-[60%]'>
                            <div className='w-[75%] mx-auto tracking-wider space-y-4'>
                                <q className='font-serif text-[20px]'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at exercitationem hic illum, mollitia nulla officia porro quas rem rerum? Atque consequatur eligendi, nostrum perferendis quas qui quia sed suscipit. </q>
                                <p className='text-gray-400 uppercase text-[12px] font-semibold'>- Emma Williams</p>
                            </div>
                        </div>
                        <div className='w-[30%]'>
                            <img src={client2} className='rounded-full w-[70%] mr-auto' alt=""/>
                        </div>
                    </div>
                </Glider>
            </div>
        </div>
    );
}

export default Testimonies;