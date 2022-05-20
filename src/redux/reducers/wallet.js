import { WALLET } from '../actions/index';

const INITIAL_STATE = {
  wallet: '',
};

function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case WALLET:
    return {
      ...state,
      wallet: action.payload,
    };
  default:
    return state;
  }
}

export default walletReducer;
