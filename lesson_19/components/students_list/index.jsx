import React from 'react';
import { connect } from 'react-redux';
import * as Constants from '../../actions';

class List extends React.Component {

    componentDidMount() {
        this.props.getList();
    }
// 
    render() {
        let _name = '';
        let props = this.props;
        return (
            <div>
                <div>{props.count}</div>
                <button onClick={() => props.increment()}>Increment</button>
                {props.list.map((student) => 
                    <div key={student.name} 
                        onClick={props.remove.bind(null, student.name)}
                    >
                        {student.name}
                    </div>)}
                <input type="text" onChange={(e) => {
                        _name = e.target.value;
                        return _name;
                    }}/>
                <button id="add" onClick={() => props.add(_name)}>ADD</button>
            </div>
        )
    }
}

export default connect(
    (state) => ({ 
        list: state.students, 
        count: state.counter.count 
    }),
    (dispatch) => ({
         remove: (name) => dispatch({type: Constants.REMOVE, name}),
         add: (name) => dispatch({type: Constants.ADD, name}),
         increment: () => dispatch({type: Constants.INCREMENT}),
         decrement: () => dispatch({type: Constants.DECREMENT}),
         getList: () => dispatch({ type: Constants.GET})
    })
)(List);