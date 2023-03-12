import { NEW_DATA } from "../actions/repos"


const InitialState = null;

const reposReduser = (state=InitialState, action) => {
switch(action.type) {
    case NEW_DATA:
        return action.payload
    default: return state
}
}

export default reposReduser;