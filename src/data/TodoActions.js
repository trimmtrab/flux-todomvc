import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';

const Actions = {
    // each function dispatches an action
    addTodo(text) {        
        TodoDispatcher.dispatch({
            type: TodoActionTypes.ADD_TODO,
            text,
        });
    },
};

export default Actions;
