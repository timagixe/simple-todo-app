import React from 'react';
import './TodoList.css';

export type TodoListItem = {
  id: string;
  title: string;
};

interface TodoListProps {
  items: TodoListItem[];
  onDelete: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>
          <span>{item.title}</span>
          <button onClick={props.onDelete.bind(null, item.id)}>DELETE ITEM</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
