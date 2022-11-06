import React from 'react';
import TodoPanel from '../TodoPanel/TodoPanel';
import TodoList from '../TodoList/TodoList';
import NotFound from '../NotFound/NotFound';
import { useAppSelector } from '../../hooks';
import type { RootState } from '../../store';
import './App.scss';

const App: React.FC = () => {
  const isTodos = useAppSelector((state: RootState) => state.todos.list.length);

  return (
    <div className="container">
      <TodoPanel />
      <hr className="line" />
      {isTodos ? <TodoList /> : <NotFound />}
    </div>
  );
};

export default App;
