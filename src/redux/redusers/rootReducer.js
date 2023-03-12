import { combineReducers } from "@reduxjs/toolkit";
import dataReduser from "./dataReduser";
import reposReduser from "./reposReduser";
import usersReduser from "./userReduser";

const rootReducer = combineReducers({
    dataReduser,
    reposReduser,
    usersReduser
})

export default rootReducer;