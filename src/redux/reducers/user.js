import { USER } from '../actions/index';

const INITIAL_STATE = {
  user: '',
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case USER:
    return {
      ...state,
      user: action.payload,
    };
  default:
    return state;
  }
}

export default userReducer;
