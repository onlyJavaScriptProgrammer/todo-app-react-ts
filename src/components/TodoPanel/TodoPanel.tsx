import React, { useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { addTodo } from '../../store/slices/TodoSlice';
import './TodoPanel.scss';

const TodoPanel: React.FC = () => {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();

  const handleClickValue = () => {
    if (value.trim().length) {
      dispatch(addTodo(value));
      setValue('');
    }
  };

  const handleValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="panel">
      <label htmlFor="field" className="panel__label">
        Todo App
      </label>
      <input
        type="text"
        className="panel__input"
        name="field"
        value={value}
        onChange={handleValue}
        placeholder="Enter Todo"
      />
      <button className="panel__btn" onClick={handleClickValue}>
        Add Todo
      </button>
    </div>
  );
};

export default TodoPanel;
