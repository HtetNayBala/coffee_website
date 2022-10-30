import Nav from "../Component/Nav";
import deli from '../img/deli.jpg'
import ComingEvent from "../Component/ComingEvent";
import NewsLetter from "../Component/NewsLetter";
import Footer from "../Component/Footer";

function NewsAndEvents(props) {
    return (
        <div>
            <Nav news='bg-white text-gray-800'/>
            <div className='min-h-[100vh] w-[80%] mx-auto'>
                <div className='mb-[60px] mt-[200px]'>
                    <div className='mb-[40px]'>
                        <p className='text-[#e4a650] text-[13px] font-bold text-center uppercase'>News & Events</p>
                        <h4 className='main-shop-name font-serif mb-3 w-[40%] mx-auto text-center font-bold' style={{lineHeight:'70px'}}>Now delivering to your door</h4>
                    </div>
                    <div className='w-[50%] mx-auto text-center'>
                        <p className='text-gray-400 tracking-wider'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione numquam eos perferendis itaque hic unde, ad, laudantium minima.
                        </p>
                    </div>
                </div>
                <div className='mb-[40px]'>
                    <img src={deli} alt=""/>
                </div>
                <div className='w-[50%] mx-auto mb-[30px]'>
                    <p className='text-gray-400'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis reprehenderit magni mollitia voluptatibus in. Debitis, laudantium possimus veritatis dignissimos adipisci deserunt numquam dolorem ullam, alias rem laborum facilis ducimus quis!
                    </p>
                </div>
                <div className='w-[50%] mx-auto mb-[50px]'>
                    <p className='text-gray-400'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis reprehenderit magni mollitia voluptatibus in. Debitis, laudantium possimus veritatis dignissimos adipisci deserunt numquam dolorem ullam, alias rem laborum facilis ducimus quis!
                    </p>
                </div>
                <div className=''>
                    <div className='w-[50%] mx-auto'>
                        <h4 className='second-title font-serif font-bold'>Ordering online is easy</h4>
                    </div>
                    <div className='w-[50%] mx-auto my-[20px]'>
                        <p className='text-gray-400'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae animi amet iste deserunt dolorem facilis exercitationem deleniti pariatur dolores magni, mollitia debitis non delectus provident a iusto fuga. Nisi, molestias!
                        </p>
                    </div>
                    <div className='w-[50%] mx-auto pb-[60px] border-b border-b-gray-200'>
                        <p className='text-gray-400'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus illum officiis, beatae quibusdam ex similique, nihil in facilis magni quisquam fuga. Quaerat quis provident qui quas voluptatem officiis!
                        </p>
                    </div>
                </div>
            </div>
            <ComingEvent/>
            <NewsLetter/>
            <Footer/>
        </div>
    );
}

export default NewsAndEvents;