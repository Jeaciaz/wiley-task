import React, { useState } from 'react';
import styled from 'styled-components';
import Todo from './Todo';
import Img from './base/Img';
import TextInput from './base/TextInput';
import { saveTodosToLS, loadTodosFromLS } from '../localStorage';
import iconAdd from '../assets/icon-add.png';

const StyledAddTodoForm = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const StyledAddTodoBtn = styled.button`
  width: 32px;
  height: 32px;
  padding: 0.25rem;
  background: none;
  border: none;
  cursor: pointer;
`;

export function sortTodos(todos) {
  return Object.assign([], todos).sort((a, b) => {
    return a.title.toLowerCase() < b.title.toLowerCase() ? 1 : -1;
  });
}

export default function TodoList() {
  const [todos, setTodos] = useState(loadTodosFromLS());
  const [todoTitle, setTodoTitle] = useState('');
  const todoTitleInput = React.useRef();

  const setTodoIsCompleted = (id, isCompleted) => {
    const todoList = todos.map((todo) => todo.id !== id ? todo : {
      ...todo,
      isCompleted
    });

    setTodos(todoList);
    saveTodosToLS(todoList);
  }

  const deleteTodo = (id) => {
    const todoList = todos.filter((todo) => todo.id !== id);

    setTodos(todoList);
    saveTodosToLS(todoList);
  }

  const addTodo = (title) => {
    todoTitleInput.current.focus();
    if (title === '') {
      return;
    }

    const todoList = sortTodos([...todos, {
      title,
      id: Date.now(),
      isCompleted: false
    }]);

    setTodoTitle('');
    setTodos(todoList);
    saveTodosToLS(todoList);
  }

  return (
    <div>
      <StyledAddTodoForm onSubmit={(e) => { addTodo(todoTitle); e.preventDefault(); }}>
        <StyledAddTodoBtn title="Add ToDo">
          <Img src={iconAdd} alt="Add ToDo"/>
        </StyledAddTodoBtn>
        <TextInput ref={todoTitleInput} type="text" value={todoTitle} onChange={(e) => setTodoTitle(e.currentTarget.value)} />
      </StyledAddTodoForm>
      {
        todos.map(todo => (
          <Todo 
            key={todo.id} 
            title={todo.title} 
            isCompleted={todo.isCompleted} 
            setIsCompleted={(isCompleted) => setTodoIsCompleted(todo.id, isCompleted)}
            deleteTodo={() => deleteTodo(todo.id)}
          />
        ))
      }
    </div>
  )
}
