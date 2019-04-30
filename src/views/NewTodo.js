import React from 'react';

function NewTodo(props) {
    return (
        <form
            id="form" 
            onSubmit={
                (event) => {
                    event.preventDefault();
                    props.onFormSubmit(props.draft)
                }
            }
        >
            <input 
                value={props.draft} 
                onChange={
                    (event) => props.onInputChange(event.target.value)
                } 
            />
            <button
                id="form__button"
                type="submit">
                Add Todo
            </button>
        </form>
    );
}

export default NewTodo;