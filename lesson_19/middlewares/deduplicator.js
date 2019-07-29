import {ADD} from '../actions';

export default (store) => (next) => (payload) => {
    if(payload.type === ADD) {
        const students = store.getState().students;
        if( !students.some( ({name}) => name === payload.name) ) {
            next(payload);
        }

    }
}