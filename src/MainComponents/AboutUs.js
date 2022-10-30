import Nav from "../Component/Nav";
import CoffeeBreak from "../Component/CoffeeBreak";
import {ImQuotesRight} from 'react-icons/im'
import bts from '../img/about_bts.jpg'
import Footer from "../Component/Footer";

function AboutUs(props) {
    return (
        <div>
            <Nav/>
            <div className='home bg-[url("./img/coffee_making.jpg")] bg-bottom bg-fixed bg-cover min-h-[70vh] flex items-center justify-center'>
                <h4 className='font-serif text-[50px] text-white z-[10]'>About Us</h4>
            </div>
            <CoffeeBreak/>
            <div className='py-[80px] bg-gray-200'>
                <div className='mb-[32px]'>
                    <ImQuotesRight className='mx-auto text-[#e4a650] second-title'/>
                </div>
                <div className='text-center'>
                    <div className='w-[50%] mx-auto text-[20px] mb-[20px]'>
                        <q className='w-[50%]'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos at veritatis vitae modi ex quis quibusdam error repudiandae adipisci dolore perspiciatis iste, vel fuga a, libero architecto ratione deleniti sequi. </q>
                    </div>
                    <p className='text-gray-600'>- Liam Smith</p>
                </div>
            </div>
            <div className='py-[100px]'>
                <div className='w-[50%] mx-auto text-center mb-[60px]'>
                    <div className='ml-[110px]'>
                        <div className='mb-3'>
                            <h4 className='font-serif italic second-title'>Behind the scenes</h4>
                        </div>
                        <div className='w-[90%]'>
                            <p className='text-gray-400 para tracking-wider leading-relaxed'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia obcaecati sit odio velit culpa aspernatur consectetur natus quidem minima veritatis.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-[80%] mx-auto'>
                    <div className='flex items-center'>
                        <div className=''>
                            <div className='w-[75%]'>
                                <h4 className='text-[20px] mb-[20px]' style={{lineHeight:'30px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident sequi ratione, accusamus quo mollitia architecto, explicabo obcaecati.</h4>
                                <p className='tracking-wider mb-[35px]' style={{lineHeight:'30px'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum enim saepe aperiam eius, quam blanditiis necessitatibus dolorem dignissimos pariatur quas velit nihil tempora, libero unde molestiae! Illum, inventore. Iusto, autem!</p>
                                <div>
                                    <button className="btn text-black">contact us</button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src={bts} className='bts' alt=""/>
                        </div>

                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default AboutUs;