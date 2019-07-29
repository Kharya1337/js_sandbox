import {ADD, REMOVE, SET, GET} from '../actions'

export default (store) => (next) => {
    return (payload) =>  {
        next(payload);
        if(payload.type === ADD || payload.type === REMOVE) {
            const students = JSON.stringify(store.getState().students);
            localStorage.setItem('students', students);
        }
        if(payload.type === GET) {
            try {
                const rawData = JSON.parse(localStorage.getItem('students'));
                if(Array.isArray(rawData)) {
                    next({ type: SET, list: JSON.parse(rawData) });
                }
            } catch (err) {}
        }
    }
}