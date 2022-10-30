import {useSelector,useDispatch} from "react-redux";
import ComingEventList from "./ComingEventList";
import {Change} from "../store/slicer/slicer";

function ComingEvent(props) {

    const dispatch = useDispatch();
    const {list} = useSelector(state=>state);

    const update = (id) => {
        dispatch(Change(id))
    }

    return (
        <div className='min-h-[50vh] my-[80px]'>
            <div className='w-[80%] mx-auto'>
                <div className='mb-[50px]'>
                    <div className='text-center'>
                        <h4 className='second-title font-serif mb-3'>Upcoming events</h4>
                    </div>
                    <div className='w-[50%] mx-auto text-center'>
                        <p className='text-gray-400 tracking-wider'>
                            Commodi rem veritatis quis eaque mollitia.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                {
                    list.map(el=> <ComingEventList key={el.id} data={el} update={update}/>)
                }
            </div>

        </div>
    );
}

export default ComingEvent;