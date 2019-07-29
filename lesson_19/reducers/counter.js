import * as Constants from '../actions';

export default function counterReducer(state, payload) {

    switch(payload.type) {
        case Constants.INCREMENT: {
            state.count++;
            return  {count: state.count};
        }
        case Constants.DECREMENT: {
            state.count--;
            return  {count: state.count};
        }
    }

    if(state) {
        return state;
    }

    return { count: 0 };
}