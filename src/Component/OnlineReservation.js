import {BsChevronDown,BsChevronUp} from 'react-icons/bs'
import {useState} from "react";

function OnlineReservation(props) {

    let h = new Date().getHours();
    let min = new Date().getMinutes();
    let time = `${h}:${min}`;

    const [dropdownState,setDropdownState] = useState(false);

    const showDropdown = () => {
        setDropdownState(pre=>!pre);
    }

    const [person,setPerson] = useState(2);

    const personCount = (no) => {
        setPerson(no)
        setDropdownState(pre=>!pre);
    }

    return (
        <div className='bg-[#eaecef] py-[80px]'>
            <div className='min-h-[50vh] w-[80%] mx-auto'>
                <div className='mb-[70px]'>
                    <div className='text-center'>
                        <h4 className='second-title font-serif mb-3'>Make online reservation</h4>
                    </div>
                    <div className='w-[50%] mx-auto text-center'>
                        <p className='text-gray-400 tracking-wider'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione numquam eos perferendis itaque hic unde, ad, laudantium minima.
                        </p>
                    </div>
                </div>
                <div>
                    <form action="#">
                        <div className='w-[60%] mx-auto flex items-center'>
                            <div className='w-[50%] mr-[20px]'>
                                <div className='mb-[20px]'>
                                    <input type="text" className='w-[100%] shadow outline-[#e4a650] bg-white font-serif px-3 py-[15px]' placeholder='Full name'/>
                                </div>
                                <div className='mb-[20px]'>
                                    <input type="text" className='w-[100%] shadow outline-[#e4a650] bg-white font-serif px-3 py-[15px]' placeholder='Phone number'/>
                                </div>
                                <div className='mb-[20px]'>
                                    <input type="text" className='w-[100%] shadow outline-[#e4a650] bg-white font-serif px-3 py-[15px]' placeholder='Email Address'/>
                                </div>
                            </div>
                            <div className='w-[50%]'>
                                <div className='mb-[20px]'>
                                    <div className="relative">
                                        <div className='flex justify-between shadow items-center bg-white px-3 py-[15px] cursor-pointer' onClick={showDropdown}>
                                            <p className=""><span>{person}</span> {person>1?'persons':'person'}</p>
                                            {dropdownState?<BsChevronUp/>:<BsChevronDown/>}
                                        </div>
                                        <ul className={dropdownState?'dropdown scale-y-[1] origin-top duration-500':'dropdown scale-y-0 origin-top duration-500'}>
                                            <li className='pl-3 cursor-pointer py-[3px] hover:text-[#e4a650]'><a onClick={()=>personCount(1)}>1 <span>person</span></a></li>
                                            <li className='pl-3 cursor-pointer py-[3px] hover:text-[#e4a650]'><a onClick={()=>personCount(3)}>3 <span>person</span>s</a></li>
                                            <li className='pl-3 cursor-pointer py-[3px] hover:text-[#e4a650]'><a onClick={()=>personCount(4)}>4 <span>person</span>s</a></li>
                                            <li className='pl-3 cursor-pointer py-[3px] hover:text-[#e4a650]'><a onClick={()=>personCount(5)}>5 <span>person</span>s</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='mb-[20px]'>
                                    <input type="date"  className='shadow w-[100%] outline-[#e4a650] bg-white font-serif px-3 py-[15px]'/>
                                </div>
                                <div className='mb-[20px]'>
                                    <input type="time" value={time} className='shadow w-[100%] outline-[#e4a650] bg-white font-serif px-3 py-[15px]'/>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='text-center my-[10px]'>
                    <button className='btn uppercase text-black'>reserve a table</button>
                </div>
            </div>
        </div>
    );
}

export default OnlineReservation;