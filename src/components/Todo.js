import React from 'react';
import styled from 'styled-components';

const StyledTodo = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border: 1px solid #bbb;
  border-radius: 0 8px 0 8px;
  box-shadow: 2px 2px 2px #bbbb;
  cursor: pointer;
  opacity: ${props => props.isCompleted ? '0.35' : '1'};

  & + & {
    margin-top: 10px;
  }
`;

const StyledTodoTitle = styled.h3`
  display: inline;
  padding-left: 1em;
`;

const StyledDisabledCheckbox = styled.input`
  pointer-events: none;
`;

const StyledDeleteBtn = styled.button`
  font-size: 1rem;
  padding: 0.25rem;
  background: none;
  border: none;
  cursor: pointer;
  margin-left: auto;
  border-radius: 4px;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  }
`;

export default function Todo({ title, isCompleted, setIsCompleted, deleteTodo }) {
  return (
    <StyledTodo isCompleted={isCompleted} onClick={() => setIsCompleted(!isCompleted)}>
      <StyledDisabledCheckbox type="checkbox" checked={isCompleted} onChange={(e) => setIsCompleted(e.currentTarget.checked)} />
      <StyledTodoTitle>{title}</StyledTodoTitle>
      <StyledDeleteBtn title="Delete ToDo" onClick={(e) => {deleteTodo(); e.stopPropagation()}}>❌</StyledDeleteBtn>
    </StyledTodo>
  )
}
