import { DATA_USERS, DATA_PAGES } from '../actions/user';

const InitialState = null;


const usersReduser = (state = InitialState, action) => {
  switch (action.type) {
    case DATA_USERS:
      console.log(action.payload)
      return  +action.payload.page === 1 ? action.payload : {...action.payload, arrUser:[...state?.arrUser, ...action.payload.arrUser]} ;
    
    default:
      return state;
  }
}

export default usersReduser;

