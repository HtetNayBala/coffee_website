
function ComingEventList({data:{title,status,id,para,month,date,img},update}) {

    const change = () => {
        update(id)
    }


    return (
        <div className='my-[30px] border-b border-gray-200'>
            <div className='w-[80%] mx-auto mb-[20px]'>
                <div>
                    <div>
                        {
                            status ? <div className='scale-y-0 h-0 cursor-pointer flex items-center' onClick={change}>
                                <div className=''>
                                    <h4 className='font-serif font-bold second-title'>{date}</h4>
                                    <p>{month}</p>
                                </div>
                                <div className='w-[70%] ml-auto'>
                                    <h4 className='mx-auto second-title font-serif'>Lorem amet, consectetur adipisicin Lorem ipsum dolor sit amet. g elit. At, sapiente?</h4>
                                </div>
                                <div className='w-[20%] ml-auto'>
                                    <button className='btn uppercase text-black'>reserve a table</button>
                                </div>
                            </div> : <div className='scale-y-[1] h-auto cursor-pointer flex items-center' onClick={change}>
                                <div className=''>
                                    <h4 className='font-serif font-bold second-title'>{date}</h4>
                                    <p>{month}</p>
                                </div>
                                <div className='w-[70%] ml-auto'>
                                    <h4 className='mx-auto second-title font-serif'>Lorem amet, consectetur adipisicin Lorem ipsum dolor sit amet. g elit. At, sapiente?</h4>
                                </div>
                                <div className='w-[20%] ml-auto'>
                                    <button className='btn uppercase text-black'>reserve a table</button>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
            {
                status ? <div style={{backgroundImage:`url(${img})`}} className={`event scale-y-1 h-auto origin-bottom duration-700`}>
                    <div className='w-[80%] mx-auto py-[100px] z-10'>
                        <div className='mb-[25px] text-white'>
                            <h4 className='uppercase text-[12px] mb-[10px] font-bold font-serif' style={{letterSpacing:'1px',color:'#e4a650'}}>SEPTEMBER {date}, 2017</h4>
                            <h1 style={{lineHeight:'35px'}} className='second-title font-serif w-[35%]'>
                                {title}
                            </h1>
                        </div>
                        <p className='w-[40%] mb-[40px] para tracking-widest leading-relaxed text-white'>
                            {para}
                        </p>
                        <div>
                            <button className='btn uppercase'>Reserve a table</button>
                        </div>
                    </div>
                </div> : <div style={{backgroundImage:`${img}`}} className={`event scale-y-0 h-0 origin-bottom duration-700`}>
                    <div className='w-[80%] mx-auto py-[100px] z-10'>
                        <div className='mb-[20px] text-white'>
                            <h4 className='uppercase text-[12px] mb-[10px] font-bold font-serif' style={{letterSpacing:'1px',color:'#e4a650'}}>SEPTEMBER {date}, 2017</h4>
                            <h1 className='second-title font-serif w-[35%]'>
                                {title}
                            </h1>
                        </div>
                        <p className='w-[40%] mb-[35px] para tracking-widest leading-relaxed text-white'>
                            {para}
                        </p>
                        <div>
                            <button className='btn uppercase'>Reserve a table</button>
                        </div>
                    </div>
                </div>

            }
        </div>
    );
}

export default ComingEventList;