import React from 'react';
import { useAppDispatch } from '../../hooks';
import { removeTodo, toggleTodo } from '../../store/slices/TodoSlice';
import ITodo from '../../types/ITodo';
import './TodoListItem.scss';

const TodoListItem: React.FC<ITodo> = ({ id, name, complete }) => {
  const dispatch = useAppDispatch();

  return (
    <li className="item">
      <div className="item__wrapper">
        <input
          type="checkbox"
          name="complete"
          className="item__input"
          onChange={() => dispatch(toggleTodo(id))}
          checked={complete}
        />
        <div className="item__content">{name}</div>
      </div>
      <button className="item__del" onClick={() => dispatch(removeTodo(id))}>
        Delete
      </button>
    </li>
  );
};

export default TodoListItem;
