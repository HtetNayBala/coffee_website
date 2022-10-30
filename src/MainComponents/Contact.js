import Nav from "../Component/Nav";
import Map from "../Component/map";
import Footer from "../Component/Footer";
import {BsFacebook, BsInstagram, BsTwitter} from "react-icons/bs";

function Contact(props) {
    return (
        <div>
            <Nav/>
            <div className='home bg-[url("./img/kitchen_bg.jpg")] bg-bottom bg-fixed bg-cover min-h-[70vh] flex items-center justify-center'>
                <h4 className='font-serif text-[50px] text-white z-[10]'>Contact Us</h4>
            </div>
            <div className='bg-[url("./img/last.png")] bg-no-repeat bg-cover bg-center'>
                <div className='w-[80%] mx-auto my-[100px]'>
                    <div className='mb-[70px]'>
                        <div className='text-center'>
                            <h4 className='second-title font-serif mb-3'>Get in touch with us</h4>
                        </div>
                        <div className='w-[50%] mx-auto text-center'>
                            <p className='text-gray-400 tracking-wider'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam illo praesentium sequi in cum, beatae maiores quae qui.
                            </p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='w-[70%]'>
                            <form action="#">
                                <div className='mb-[20px]'>
                                    <input type="text" className='py-4 pl-3 w-[100%] border border-gray-200 shadow outline-[#e4a650]' placeholder='Full Name'/>
                                </div>
                                <div className='mb-[20px]'>
                                    <input type="text" className='py-4 pl-3 w-[100%] border border-gray-200 shadow outline-[#e4a650]' placeholder='Email Address'/>
                                </div>
                                <div className='mb-[20px]'>
                                    <textarea name="" className='pl-3 py-4 w-[100%] border border-gray-200 shadow outline-[#e4a650]' id="" cols="30" rows="10" placeholder='Message'></textarea>
                                </div>
                            </form>
                            <div>
                                <button className="btn text-black">Send Message</button>
                            </div>
                        </div>
                        <div className='w-[25%] mx-auto'>
                            <div className='mb-[30px]'>
                                <h4 className='font-bold text-[12px] mb-[5px] uppercase'>write us</h4>
                                <p className='text-[#e4a650]'>admin@domain.com</p>
                            </div>
                            <div className='mb-[30px]'>
                                <h4 className='font-bold text-[12px] mb-[5px] uppercase'>contact us</h4>
                                <p className='text-[#e4a650]'>+1 987 654 3210</p>
                            </div>
                            <div className='mb-[30px]'>
                                <h4 className='font-bold text-[12px] mb-[5px] uppercase'>visit us</h4>
                                <p className='text-[#e4a650]'>1234 Altschul, New York, NY 10027-0000</p>
                            </div>
                            <div className='mb-[30px]'>
                                <h4 className='font-bold text-[12px] mb-[5px] uppercase'>Social Links</h4>
                                <div className='flex items-center space-x-3'>
                                    <BsFacebook className='text-[#e4a650]'/>
                                    <BsInstagram className='text-[#e4a650]'/>
                                    <BsTwitter className='text-[#e4a650]'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Map/>
            <Footer/>
        </div>
    );
}

export default Contact;