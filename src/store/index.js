const redux = require('redux');

const store = redux.createStore(counterReducer);

const counterReducer = (state = {
    counter: 0
}, action) => {
    if ( action.type === 'increment') {
        counter: state.counter + 1;
    };
    if ( action.type === 'decrement') {
        counter: state.counter - 1;
    };
    return {
        counter: 0
    }
}



console.log(store.dispatch({
    type: 'increment'
}));