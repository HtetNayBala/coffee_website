import HomeFooter from "./HomeFooter";

function Home(props) {

    return (
        <div>
                <div className='home'>
                    <div className='z-10 text-white text-center'>
                        <div>
                            <div className='mb-[10px]'>
                                <h4 className='uppercase text-[12px] font-serif' style={{letterSpacing:'1px',color:'#e4a650'}}>cafe / <span className='text-white'>restaurant</span></h4>
                                <h1 className='main-shop-name italic'>Touche</h1>
                            </div>
                            <p className='w-[75%] mx-auto para'>
                                Consectetur adipisicing elit. Commodi dolores temporibus totam? Cum, inventore, itaque. Magni quos, vero.
                            </p>
                            <div className='mt-[50px]'>
                                <button className='btn'>Make Reservation</button>
                            </div>
                        </div>
                    </div>
                    <HomeFooter/>
                </div>
        </div>
    );
}

export default Home;