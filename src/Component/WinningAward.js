
function WinningAward(props) {
    return (
        <div>
            <div className='bg-[url("./img/coffee_bg.jpg")] min-h-[100vh] bg-center relative bg-fixed bg-cover bg-no-repeat
            after:bg-black after:w-full after:h-full after:absolute after:top-0 after:opacity-[5%]' id='winning'>
                <div className='w-[80%] mx-auto p-[100px] z-[10]'>
                    <div className='w-[30px] h-[2px] bg-[#e4a650] mb-3'></div>
                    <h4 className='text-[20px] text-white'>Enjoy our specialty coffees and award</h4>
                    <h4 className='text-[20px] text-white'>winning doughnuts in a friendly atmosphere.</h4>
                </div>
            </div>
        </div>
    );
}

export default WinningAward;