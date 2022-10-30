import {configureStore} from "@reduxjs/toolkit";
import slicer from "./slicer/slicer";

const store = configureStore({
    reducer:{
        list : slicer,
    }
});

export default store;