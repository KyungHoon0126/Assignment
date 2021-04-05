import React from 'react';
import './Sections/TodoListItem.scss';
import { 
    MdCheckBoxOutlineBlank, 
    MdCheckBox, 
    MdRemoveCircleOutline 
} from 'react-icons/md';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
    const { id, text, checked } = todo;

    return (
        <div className="TodoListItem">
            <div className="checkbox" onClick={() => onToggle(id)}>
                {checked ? <MdCheckBox className="checkbox-mdcheckbox" /> 
                                : <MdCheckBoxOutlineBlank className="checkbox-mdcheckboxoutlineblank" /> })
                <div className="input"> {text} </div>
            </div>
            
            <div className="remove" onClick={() => onRemove(id)}>
                <MdRemoveCircleOutline className="remove-btn" />
            </div>
        </div>
    );
}

export default TodoListItem;