import {Waypoint} from "react-waypoint";
import {useState} from "react";
import {NavLink} from "react-router-dom";

function Nav({className,news}) {

    const [nav,setNav] = useState(false);

    const handleNav = () => {
        setNav(pre=>!pre)
    };

    window.addEventListener('scroll',()=>{
        const windowHeight = window.scrollY;
        if(windowHeight==0){
            setNav(false)
        }
    })

    const navs = document.querySelectorAll('.nav');

    navs.forEach(el=>el.addEventListener('click',()=>{
        window.scrollTo(0,0)
    }))


    return (
        <div>
                <Waypoint onLeave={handleNav}>
                    <div className={nav ? `fixed bg-white text-black top-0 w-[100%] z-[100] duration-700 shadow py-3` : `${news} duration-500 absolute top-0 text-white w-[100%] z-[100] pt-2`}>
                        <div className={`w-[80%] mx-auto flex items-center justify-between ${className}`}>
                            <ul className='flex items-center space-x-6'>
                                <li className='hover:text-[#e4a650] duration-500'>
                                    <NavLink to='/about' className='uppercase nav'>About us</NavLink>
                                </li>
                                <li className='hover:text-[#e4a650] duration-500'>
                                    <NavLink to='/menu' className='uppercase nav'>Menu</NavLink>
                                </li>
                                <li className='hover:text-[#e4a650] duration-500'>
                                    <NavLink to='/reserve' className='uppercase nav'>Reservation</NavLink>
                                </li>
                            </ul>
                            <div className='touche'>
                                <NavLink to='/' className='shop-name italic hover:text-[#e4a650] duration-500'>Touche</NavLink>
                            </div>
                            <ul className='flex items-center space-x-5'>
                                <li className='hover:text-[#e4a650] duration-500'>
                                    <NavLink to='/news' className='uppercase nav'>news and events</NavLink>
                                </li>
                                <li className='hover:text-[#e4a650] duration-500'>
                                    <NavLink to='/gallery' className='uppercase nav'>gallery</NavLink>
                                </li>
                                <li className='hover:text-[#e4a650] duration-500'>
                                    <NavLink to='/contact' className='uppercase nav'>contact</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Waypoint>
        </div>
    );
}

export default Nav;