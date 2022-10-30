import {createSlice} from "@reduxjs/toolkit";
import eventBg from '../../img/event_bg.jpg'
import rockBg from '../../img/rock_bg.jpg'
import girlBg from '../../img/woman_guitar_bg.jpg'


const initialState = [{
    id:1,
    date:'30',
    month:'Sep',
    title:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum voluptas, aut ea quae!',
    para:'Alias earum, labore doloremque iusto a modi et, dolorem veritatis iste quis ab. Facere est optio, voluptate molestias aspernatur impedit perferendis odit?',
    status:true,
    img:eventBg,
},{
    id:2,
    date:'29',
    month:'Sep',
    title:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum voluptas, aut ea quae!',
    para:'Alias earum, labore doloremque iusto a modi et, dolorem veritatis iste quis ab. Facere est optio, voluptate molestias aspernatur impedit perferendis odit?',
    status:false,
    img:rockBg,
},{
    id:3,
    date:'28',
    month:'Sep',
    title:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum voluptas, aut ea quae!',
    para:'Alias earum, labore doloremque iusto a modi et, dolorem veritatis iste quis ab. Facere est optio, voluptate molestias aspernatur impedit perferendis odit?',
    status:false,
    img:girlBg,
}];

const CounterSlicer = createSlice({
    name:'list',
    initialState,
    reducers:{
        Change:(state,action)=>{
            return state.map(i=>
                i.id===action.payload ?
                    {name:i.name,date:i.date,month:i.month,title:i.title,para:i.para,id:i.id,status:true,img:i.img}:
                    {name:i.name,date:i.date,month:i.month,title:i.title,para:i.para,id:i.id,status:false,img:i.img}
        )}
    }
});

export default CounterSlicer.reducer;
export const {Change} = CounterSlicer.actions;