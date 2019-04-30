import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';
import Counter from './Counter';
import Todo from './Todo';

class TodoStore extends ReduceStore {
    constructor() {
        // registers an instance of this store
        // with the given dispatcher
        super(TodoDispatcher);
    }

    getInitialState() {
        return Immutable.OrderedMap();
    }

    reduce(state, action) {
        switch (action.type) {
            case TodoActionTypes.ADD_TODO:            
                // don't add todos with no text
                if (!action.text) {
                    return state;
                }
                const id = Counter.increment();
                
                // set(key, value)
                // returns a copy of the collection
                // with the value at key set to the
                // provided value
                // (https://immutable-js.github.io/immutable-js/docs/#/set)
                return state.set(id, new Todo({
                    id,
                    text: action.text,
                    complete: false,
                }));
                
            default:
                return state;
        }
    }
}

export default new TodoStore();
