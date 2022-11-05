import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
import type { RootState } from '../../store';
import { useAppSelector } from '../../hooks';
import './TodoList.scss';

const TodoList: React.FC = () => {
  const todos = useAppSelector((state: RootState) => state.todos.list);

  return (
    <ul className="list">
      {todos.map((todo) => (
        <TodoListItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export default TodoList;
