import Main from "./Main";
import Lunch from "./Lunch";
import Dinner from "./Dinner";
import Drink from "./Drink";
import {useState} from "react";

function Menus({className}) {

    const [mains,setMains] = useState(true);
    const [lunch,setLunch] = useState(false);
    const [dinner,setDinner] = useState(false);
    const [drink,setDrink] = useState(false);

    const handleMains = () => {
        setMains(true)
        setLunch(false)
        setDinner(false)
        setDrink(false)
    }

    const handleLunch = () => {
        setMains(false)
        setLunch(pre=>!pre)
        setDinner(false)
        setDrink(false)
    }

    const handleDinner = () => {
        setMains(false)
        setLunch(false)
        setDinner(pre=>!pre)
        setDrink(false)
    }

    const handleDrink = () => {
        setMains(false)
        setLunch(false)
        setDinner(false)
        setDrink(pre=>!pre)
    }



    return (
        <div className={className}>
            <div>
                <div className='flex items-center justify-around'>
                    <h4 onClick={handleMains} className={ mains ? 'cursor-pointer border-b border-b-[#ea5460]':'cursor-pointer'}>Mains</h4>
                    <h4 onClick={handleLunch} className={ lunch ? 'cursor-pointer border-b border-b-[#ea5460]':'cursor-pointer'}>Lunch</h4>
                    <h4 onClick={handleDinner} className={ dinner ? 'cursor-pointer border-b border-b-[#ea5460]':'cursor-pointer'}>Dinner</h4>
                    <h4 onClick={handleDrink} className={ drink ? 'cursor-pointer border-b border-b-[#ea5460]':'cursor-pointer'}>Drink</h4>
                </div>
            </div>
            <div>
                {
                    mains && <Main/>
                }
                {
                    lunch && <Lunch/>
                }
                {
                    dinner && <Dinner/>
                }
                {
                    drink && <Drink/>
                }
            </div>
        </div>
    );
}

export default Menus;