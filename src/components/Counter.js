import store from '../store';
import classes from './Counter.module.css';
import {useSelector, useDispatch} from 'react-redux';
import { counterActions } from '../store/index';

const Counter = () => {
    const dispatch = useDispatch();

    const counter = useSelector(state => state.counter
        );
    
    const showCounter = useSelector(state => state.showCounter
            );

    const incrementHandler = () => {
        dispatch(counterActions.increment())
    }
    const increaseHandler = () => {
        dispatch(counterActions.increase(5))
    }
    const decrementHandler = () => {
        dispatch(counterActions.decrement())
    }
  const toggleCounterHandler = () => {
        dispatch(counterActions.toggle())
  };

  return (
    <main className={classes.counter}>
         {showCounter && <div>
            <h1>Redux Counter</h1>
            <div className={classes.value}>{counter}</div>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={increaseHandler}>Increase by 5</button>
            <button onClick={decrementHandler}>Decrement</button>
        </div> }
        <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
     );
};

export default Counter;
