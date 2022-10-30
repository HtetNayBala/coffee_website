import Wrapper from "./Wrapper";
import coffee from '../img/coffee_1.jpg'
import gray from '../img/gray.png'

function CoffeeBreak(props) {
    return (
        <div>
            <Wrapper>
                <div className='flex items-center my-[200px] h-auto relative'>
                    <div className='w-[50%]'>
                        <div className='ml-[110px]'>
                            <div className='mb-3'>
                                <h4 className='font-serif italic second-title'>Beautiful <span className='not-italic'>outdoor seating</span></h4>
                            </div>
                            <div className='w-[90%]'>
                                <p className='text-gray-400 para tracking-wider leading-relaxed'>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias veritatis nisi, consequatur, laborum libero a neque ducimus. Porro rem illum quo nostrum quisquam asperiores. Possimus facilis velit, voluptatibus!
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='w-[50%] flex items-end justify-evenly'>
                        <div className=''>
                            <div className='w-[30px] h-[2px] bg-[#e4a650] mb-3'></div>
                            <h4 className='text-[20px]'>Great variety of</h4>
                            <h4 className='text-[20px]'>foods you will enjoy.</h4>
                        </div>
                        <div className='relative'>
                            <img src={coffee} className='w-[250px] h-[400px]' alt=""/>
                            <div className='absolute top-[-10%] z-[-1] left-[-15%] w-[250px] h-[400px] gray bg-[url("./img/gray.png")]'></div>
                            <div className='border border-gray-200 w-[250px] h-[400px] absolute right-[-15%] top-[10%] z-[-1]'>
                            </div>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
}

export default CoffeeBreak;