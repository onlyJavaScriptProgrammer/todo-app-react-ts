import React from 'react';
import TodoPanel from '../TodoPanel/TodoPanel';
import TodoList from '../TodoList/TodoList';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="container">
      <TodoPanel />
      <hr className="line" />
      <TodoList />
    </div>
  );
};

export default App;
