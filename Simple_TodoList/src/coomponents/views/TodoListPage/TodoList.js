import React from 'react';
import TodoListItem from '../TodoListItemPage/TodoListItem';
import './Sections/TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {
    return (
        <div className="TodoList">
            {todos.map(todo => (
                <TodoListItem todo={todo} 
                            key={todo.id} 
                            onRemove={onRemove}
                            onToggle={onToggle} />
            ))}

            {/* <TodoListItem />
            <TodoListItem />
            <TodoListItem /> */}
        </div>
    )
}

export default React.memo(TodoList);