import React from 'react';

function AppView(props) {
    return (
        <div>
            <Header {...props} />
            <Main {...props} />
            <Footer {...props} />
        </div>
    );
}

function Header(props) {
    return (
        <header id="header">
            <h1>todos</h1>
        </header>
    );
}

function Main(props) {
    if (props.todos && props.todos.size === 0) {
        return null;
    }
    
    return (
        <section id="main">
            <ul id="todo-list">
                {[...props.todos.values()].reverse().map(todo => (
                    <li key={todo.id}>
                        <div className="view">
                            <input
                                className="toggle"
                                type="checkbox"
                                checked={todo.complete}
                                onChange={
                                    // Empty function for now
                                    () => {}
                                }
                            />
                            <label>{todo.text}</label>
                            <button
                                className="destroy"
                                onClick={
                                    // Empty function for now
                                    () => {}
                                }
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}

function Footer(props) {
    if (props.todos.size === 0) {
        return null;
    }
    
    return (
        <footer id="footer">
            <span id="todo-count">
                <strong>
                    {props.todos.size}
                </strong>
                {' items left'};
            </span>
        </footer>
    )
}

export default AppView;
