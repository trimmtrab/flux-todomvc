import { ReduceStore } from 'flux/utils';
import TodoActionTypes from './TodoActionTypes';
import TodoDispatcher from './TodoDispatcher';

class TodoDraftStore extends ReduceStore {
    constructor() {
        super(TodoDispatcher);
    }

    getInitialState() {
        return '';
    }

    reduce(state, action) {
        switch(action.type) {
            case TodoActionTypes.UPDATE_DRAFT:
                return action.text;
            case TodoActionTypes.ADD_TODO:
                return '';
            default:
                return state;
        }
    }
}

export default new TodoDraftStore();