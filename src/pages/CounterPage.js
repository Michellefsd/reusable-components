import Panel from '../components/Panel';
import Button from '../components/Button';
import { useReducer } from 'react';
 
const INCREMENT_COUNT = 'increment-count'; 
const DECREMENT_COUNT = 'decrement-count'; 
const VALUE_TO_ADD = 'value-to-add'; 
const ADD_VALUE_TO_COUNT = 'add-value-to-count'; 

const reducer = (state, action) => {
    switch(action.type) {
        case INCREMENT_COUNT:
            return {
                ...state,
                count: state.count + 1,
            }     
        case DECREMENT_COUNT:
            return {
                ...state,
                count: state.count - 1,
            }  
        case VALUE_TO_ADD:
            return {
                ...state,
                valueToAdd: action.payload,
            };   
        case ADD_VALUE_TO_COUNT:
            return {
                ...state,
                count: state.count + state.valueToAdd,
                valueToAdd: 0,
            }  
        default: 
        // throw new Error('Unexpected Action' + action.type);
        return state;
        
    }
}
function CounterPage({ initialCount }) {
    // const [count, setCount] = useState(initialCount);
    // const [valueToAdd, setValueToAdd] = useState(0)

    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        valueToAdd: 0,
    })

    const increment = () => {
        dispatch({
            type: INCREMENT_COUNT
        })
    }
    const decrement = () => {
        dispatch({
            type: DECREMENT_COUNT
        })
     
    }
    const handleChange = (e) => {
        const valueUsable = parseInt(e.target.value) || 0;
        // console.log(typeof e.target.value );
        // console.log(typeof valueUsable );
        dispatch({
            type: VALUE_TO_ADD,
            payload: valueUsable
        })
    }
    const handleSubmit = (e) => {
        // this keeps the Value onscreen
        e.preventDefault();
        dispatch({
            type: ADD_VALUE_TO_COUNT,
        })
        // setCount(parseInt(valueToAdd) + count)
        // setValueToAdd(0);
    }
    return (
        <Panel className="m-3">
            <h2 className='text-lg mt-3'>{state.count} clicked times</h2>
            <div className="flex flex-row">
                <Button onClick={increment} primary rounded >Increment</Button>
                <Button onClick={decrement} primary rounded >Decrement</Button>
            </div>
            <form  onSubmit={handleSubmit}>
                <label>Add a lot!</label>
                <input 
                    type="number" 
                    className='p-1 m-3 bg-gray-50 border border-gray-300'  
                    onChange={handleChange} 
                    value={state.valueToAdd || ""}
                    autoFocus
                />
                <Button primary>Add it!</Button>
            </form>
        </Panel>
    );
}

export default CounterPage;