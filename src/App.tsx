import React from 'react';
import TodoList, { TodoListItem } from './components/TodoList';

const App: React.FC = () => {
  const items: TodoListItem[] = [{ id: 'task1', title: 'First item to do' }];

  return (
    <div className='App'>
      <TodoList items={items} />
    </div>
  );
};

export default App;
