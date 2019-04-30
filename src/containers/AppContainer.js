import AppView from '../views/AppView';
import { Container } from 'flux/utils';
import TodoStore from '../data/TodoStore';

// containers are what connects the state
// from the stores to views

function getStores() {
    return [
        TodoStore,
    ];
}

function getState() {
    return {
        todos: TodoStore.getState(),
    };
}

export default Container.createFunctional(
    AppView,
    getStores,
    getState
);