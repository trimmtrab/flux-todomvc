import NewTodo from '../views/NewTodo';
import { Container } from 'flux/utils';
import TodoDraftStore from '../data/TodoDraftStore';
import TodoActions from '../data/TodoActions';

function getStores() {
    return [
        TodoDraftStore
    ];
}

function getState() {
    return {
        draft: TodoDraftStore.getState(),

        onInputChange: TodoActions.updateDraft,
        onFormSubmit: TodoActions.addTodo,
    };
}

export default Container.createFunctional(
    NewTodo,
    getStores,
    getState
);
