import Button from '../components/Button';
import useCounter from '../hooks/useCounter';

function CounterPage({ initialCount }) {
    
    return (
        <div>
            <Button onClick={increment} primary rounded>counter</Button>
            <h2>{count} clicked times</h2>
        </div>
    )
}

export default CounterPage;