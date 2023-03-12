import { INFO_USER } from "../actions/data"


const InitialState = null;

const dataReduser = (state=InitialState, action) => {
switch(action.type) {
    case INFO_USER:
        return action.payload
    default: return state
}
}

export default dataReduser;