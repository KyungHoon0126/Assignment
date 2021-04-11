import React, { useCallback, useState } from 'react';
import './Sections/TodoInsert.scss';
import { MdAdd } from 'react-icons/md';

const TodoInsert = ({ onInsert }) => {
    const [value, setValue] = useState('');

    const onChange = useCallback(e => {
        setValue(e.target.value);
    }, []);

    const onSubmit = useCallback(
        e => {
            onInsert(value);
            setValue('');
            e.preventDefault();
        },
        [onInsert, value],
    );

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input placeholder="Please enter your work"
                   value={value}
                   className="TodoInsert-Input"
                   onChange={onChange}/>

            <button type="submit" className="TodoInsert-Button">
                <MdAdd />
            </button>
        </form>
    );
}

export default TodoInsert;