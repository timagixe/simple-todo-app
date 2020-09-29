import React, { useRef } from 'react';

interface TodoInputForm {
  addNewTodo: (title: string) => void;
}

const TodoInputForm: React.FC<TodoInputForm> = (props) => {
  const inputTitle = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredTitle = inputTitle.current!.value;
    console.log(enteredTitle);
    props.addNewTodo(enteredTitle);
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor='title-text'>What to do?</label>
        <input type='text' id='title-text' placeholder='Enter title here' ref={inputTitle} />
      </div>
    </form>
  );
};

export default TodoInputForm;
