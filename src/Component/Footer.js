import {BsFillGeoAltFill,BsFillTelephoneFill} from 'react-icons/bs'
import {MdOutlineLocalPostOffice} from 'react-icons/md'

function Footer(props) {
    return (
        <div className='mt-auto'>
            <div className='bg-black text-white py-[150px]'>
                <div className='grid grid-cols-3 w-[80%] mx-auto mb-[40px]'>
                    <div>
                        <h4 className='uppercase text-[#e4a650] mb-[20px] para font-bold'>About us</h4>
                        <p className='w-[75%] text-gray-400 para'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab architecto atque eaque eos ex exercitationem illo in magnam minus necessitatibus.
                        </p>
                    </div>
                    <div>
                        <h4 className='uppercase text-[#e4a650] mb-[20px] para font-bold'>Contact info</h4>
                        <ul>
                            <li className='flex items-center w-[75%] text-gray-400 mb-[10px]'>
                                <BsFillGeoAltFill className='mr-[10px]'/> 1234 Altschul, Los Angeles, CA 10027-0000
                            </li>
                            <li className='flex items-center text-gray-400 mb-[10px]'>
                                <BsFillTelephoneFill className='mr-[10px]'/> +1 987 654 3210
                            </li>
                            <li className='flex items-center text-gray-400 mb-[10px]'>
                                <MdOutlineLocalPostOffice className='mr-[10px] '/> <p className=' text-[#e4a650]'>admin@domain.com</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className='uppercase text-[#e4a650] mb-[20px] para font-bold'>opening hours</h4>
                        <div className='mb-[20px]'>
                            <h4 className='mb-[5px] text-gray-400 uppercase'>Monday - Thursday</h4>
                            <h4 className='text-gray-400'>10:00AM - 11:00PM</h4>
                        </div>
                        <div>
                            <h4 className='mb-[5px] text-gray-400 uppercase'>Friday - Sunday</h4>
                            <h4 className='text-gray-400'>12:00AM - 3:00AM</h4>
                        </div>
                    </div>
                </div>
                <div className='flex items-center w-[80%] mx-auto'>
                    <div className='w-[40px] bg-gray-400 h-[2px] mr-[10px]'></div>
                    <p className='text-gray-400'>© 2021 Touché. All rights reserved.</p>
                </div>

            </div>
        </div>
    );
}

export default Footer;