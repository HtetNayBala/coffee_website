function NewsLetter(props) {
    return (
        <div className='bg-[#eaecef] py-[80px]'>
            <div className='min-h-[30vh] w-[80%] mx-auto'>
                <div className='mb-[50px]'>
                    <div className='text-center'>
                        <h4 className='second-title font-serif mb-3'>Newsletter</h4>
                    </div>
                    <div className='w-[50%] mx-auto text-center'>
                        <p className='text-gray-600 tracking-wider'>
                            Lorem ipsum dolor sit adipisicing elit. Ratione numquam eos perferendis itaque hic unde, ad, laudantium minima.
                        </p>
                    </div>
                </div>
                <div className='flex w-[50%] mx-auto space-x-5'>
                    <input type="text" className='flex-1 shadow-md outline-[#e4a650] bg-white font-serif px-3 py-[15px]'/>
                    <button className='py-[15px] px-12 uppercase text-black text-[13px] leading-relaxed font-bold shadow shadow-[#e4a650] border border-[#e4a650] focus:outline-none hover:text-[#e4a650] duration-500'>Subscribe</button>
                </div>
            </div>
        </div>
    );
}

export default NewsLetter;