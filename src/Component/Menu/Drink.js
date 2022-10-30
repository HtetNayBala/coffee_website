import food_1 from '../../img/food_1.jpg'
import food_2 from '../../img/food_2.jpg'
import food_3 from '../../img/food_3.jpg'
import food_4 from '../../img/food_4.jpg'
import food_5 from '../../img/food_5.jpg'
import food_6 from '../../img/food_6.jpg'


function Mains(props) {
    return (
        <div className='flex items-center justify-between'>
            <div className='w-[50%] mt-[50px]'>
                <div className='flex space-x-3 pb-[20px] border-b border-gray-200 w-[90%]'>
                    <div className='mr-[20px]'>
                        <img src={food_1} alt="" className='w-[220px] h-[120px] object-center object-cover'/>
                    </div>
                    <div>
                        <div className='flex items-center justify-between mb-[10px]'>
                            <h4 className='text-[20px] font-serif font-semibold'>Lorem ipsum dolor sit amet</h4>
                            <p className='tracking-wide'>$ 25</p>
                        </div>
                        <p className='text-gray-400 tracking-widest w-[75%]'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, obcaecati! Sapiente laudantium.
                        </p>
                    </div>
                </div>
                <div className='flex space-x-3 pb-[20px] pt-[20px] border-b w-[90%] border-gray-200'>
                    <div className='mr-[20px]'>
                        <img src={food_5} alt="" className='w-[220px] h-[120px] object-center object-cover'/>
                    </div>
                    <div>
                        <div className='flex items-center justify-between mb-[10px]'>
                            <h4 className='text-[20px] font-serif font-semibold'>Lorem ipsum dolor sit amet</h4>
                            <p className='tracking-wide'>$ 25</p>
                        </div>
                        <p className='text-gray-400 tracking-widest w-[75%]'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, obcaecati! Sapiente laudantium.
                        </p>
                    </div>
                </div>
                <div className='flex space-x-3 pb-[20px] pt-[20px] border-b w-[90%] border-gray-200'>
                    <div className='mr-[20px]'>
                        <img src={food_3} alt="" className='w-[220px] h-[120px] object-center object-cover'/>
                    </div>
                    <div>
                        <div className='flex items-center justify-between mb-[10px]'>
                            <h4 className='text-[20px] font-serif font-semibold'>Lorem ipsum dolor sit amet</h4>
                            <p className='tracking-wide'>$ 25</p>
                        </div>
                        <p className='text-gray-400 tracking-widest w-[75%]'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, obcaecati! Sapiente laudantium.
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-[50%] mt-[50px]'>
                <div className='flex space-x-3 pb-[20px] border-b border-gray-200 w-[90%]'>
                    <div className='mr-[20px]'>
                        <img src={food_4} alt="" className='w-[220px] h-[120px] object-center object-cover'/>
                    </div>
                    <div>
                        <div className='flex items-center justify-between mb-[10px]'>
                            <h4 className='text-[20px] font-serif font-semibold'>Lorem ipsum dolor sit amet</h4>
                            <p className='tracking-wide'>$ 25</p>
                        </div>
                        <p className='text-gray-400 tracking-widest w-[75%]'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, obcaecati! Sapiente laudantium.
                        </p>
                    </div>
                </div>
                <div className='flex space-x-3 pb-[20px] pt-[20px] border-b w-[90%] border-gray-200'>
                    <div className='mr-[20px]'>
                        <img src={food_2} alt="" className='w-[220px] h-[120px] object-center object-cover'/>
                    </div>
                    <div>
                        <div className='flex items-center justify-between mb-[10px]'>
                            <h4 className='text-[20px] font-serif font-semibold'>Lorem ipsum dolor sit amet</h4>
                            <p className='tracking-wide'>$ 25</p>
                        </div>
                        <p className='text-gray-400 tracking-widest w-[75%]'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, obcaecati! Sapiente laudantium.
                        </p>
                    </div>
                </div>
                <div className='flex space-x-3 pb-[20px] pt-[20px] border-b w-[90%] border-gray-200'>
                    <div className='mr-[20px]'>
                        <img src={food_6} alt="" className='w-[220px] h-[120px] object-center object-cover'/>
                    </div>
                    <div>
                        <div className='flex items-center justify-between mb-[10px]'>
                            <h4 className='text-[20px] font-serif font-semibold'>Lorem ipsum dolor sit amet</h4>
                            <p className='tracking-wide'>$ 25</p>
                        </div>
                        <p className='text-gray-400 tracking-widest w-[75%]'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, obcaecati! Sapiente laudantium.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Mains;