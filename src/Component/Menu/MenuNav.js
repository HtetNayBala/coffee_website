import {NavLink} from "react-router-dom";

function MenuNav(props) {
    return (
        <div className='w-[50%] mx-auto'>
            <ul className='flex items-center justify-around'>
                <li>
                    <NavLink to='./' end className='para text-gray-600 font-semibold'>Mains</NavLink>
                </li>
                <li>
                    <NavLink to='./lunch' className='para text-gray-600 font-semibold'>Lunch</NavLink>
                </li>
                <li>
                    <NavLink to='./dinner' className='para text-gray-600 font-semibold'>Dinner</NavLink>
                </li>
                <li>
                    <NavLink to='./drink' className='para text-gray-600 font-semibold'>Drinks</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default MenuNav;