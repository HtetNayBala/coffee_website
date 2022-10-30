import Menus from "./Menu/Menus";

function MenuOptions() {
    return (
        <div className='border-b border-gray-200 min-h-[40vh]'>
            <div className='w-[80%] mx-auto my-[100px]'>
                <div>
                    <div className='text-center'>
                        <h4 className='second-title font-serif mb-3'>Menu Options</h4>
                    </div>
                    <div className='w-[50%] mx-auto text-center'>
                        <p className='text-gray-400 tracking-wider'>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione numquam eos perferendis itaque hic unde, ad, laudantium minima.
                        </p>
                    </div>
                </div>
                <Menus className='mt-[70px]'/>
            </div>
        </div>
    );
}

export default MenuOptions;