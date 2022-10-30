import Wrapper from "./Wrapper";
import coffee from '../img/coffee_2.jpg'

function CoffeeBreak(props) {
    return (
        <div>
            <Wrapper>
                <div className='flex items-center my-[200px] h-auto relative'>
                    <div className='w-[50%] flex items-start justify-evenly'>
                        <div className=''>
                            <div className='w-[30px] h-[2px] bg-[#e4a650] mb-3'></div>
                            <h4 className='text-[20px]'>Take a coffee break</h4>
                            <h4 className='text-[20px]'>or enjoy a meal</h4>
                        </div>
                        <div className='relative'>
                            <img src={coffee} className='w-[250px] h-[400px] absolute right-[15%] top-[-10%]' alt=""/>
                            <div className='border border-gray-200 w-[250px] h-[400px]'>
                            </div>
                        </div>
                    </div>
                    <div className='w-[50%]'>
                        <div className='mb-3'>
                            <h4 className='font-serif italic second-title'>Always <span className='not-italic'>Amazing Experience</span></h4>
                        </div>
                        <div className='w-[75%]'>
                            <p className='text-gray-400 para tracking-wider leading-relaxed'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias veritatis nisi, consequatur, laborum libero a neque ducimus. Porro rem illum quo nostrum quisquam asperiores. Possimus facilis velit, voluptatibus!
                            </p>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
}

export default CoffeeBreak;