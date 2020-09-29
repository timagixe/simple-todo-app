import React, { useRef } from 'react';
import './TodoInput.css';

interface TodoInputForm {
  addNewTodo: (title: string) => void;
}

const TodoInputForm: React.FC<TodoInputForm> = (props) => {
  const inputTitle = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if (inputTitle.current!.value.trim().length) {
      const enteredTitle = inputTitle.current!.value;
      props.addNewTodo(enteredTitle);
      inputTitle.current!.value = '';
    } else {
      alert('Title cannot be empty');
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='form-control'>
        <label htmlFor='title-text'>What to do?</label>
        <input type='text' id='title-text' placeholder='Enter title here' ref={inputTitle} />
      </div>
      <button>CREATE ITEM</button>
    </form>
  );
};

export default TodoInputForm;
