import React, { useState } from 'react';
import TodoInputForm from './components/TodoInput';
import TodoList, { TodoListItem } from './components/TodoList';

const App: React.FC = () => {
  const [items, setItems] = useState<TodoListItem[]>([]);

  const addNewTodoHandler = (title: string) => {
    const id = String(Math.random() * 100);
    setItems((prevTodos) => [...prevTodos, { id, title }]);
  };

  const removeTodoHandler = (todoId: string) => {
    setItems((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  return (
    <div className='App'>
      <TodoInputForm addNewTodo={addNewTodoHandler} />
      <TodoList items={items} onDelete={removeTodoHandler} />
    </div>
  );
};

export default App;
