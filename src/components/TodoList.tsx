import React from 'react';

export type TodoListItem = {
  id: string;
  title: string;
};

interface TodoListProps {
  items: TodoListItem[];
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};

export default TodoList;
