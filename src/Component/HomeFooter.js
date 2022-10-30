import {BsFacebook,BsInstagram,BsTwitter,BsFillGeoAltFill} from 'react-icons/bs';

function HomeFooter(props) {
    return (
        <div className='text-white flex items-center justify-between absolute my-8 bottom-0 w-[80%] z-[10]'>
            <div className='flex items-center space-x-10'>
                <BsFacebook/>
                <BsInstagram/>
                <BsTwitter/>
            </div>
            <div className='flex space-x-4 items-center'>
                <BsFillGeoAltFill className='text-[#e4a650]'/>
                <p>
                    1234 Dining Str., Los Angeles, CA 12345-0000
                </p>
            </div>
        </div>
    );
}

export default HomeFooter;