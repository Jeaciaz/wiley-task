import React from 'react';
import styled from 'styled-components';
import TodoList from './components/TodoList';

const StyledApp = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  min-height: 100vh;
  margin: auto;
  background-color: #eee8;
`;

const StyledHeader = styled.header`
  line-height: 1.5;
  margin: 0 10px;
  padding: 1rem;
  border-radius: 0 0 4px 4px;
  background: darkcyan;
  color: white;
`;

const StyledMain = styled.main`
  margin: 1.5rem 1rem;
`;

const StyledFooter = styled.footer`
  background-color: #ccc;
  padding: 1rem;
  margin-top: auto;
`;

function App() {
  return (
    <StyledApp>
      <StyledHeader>
        <h1>ToDos</h1>
      </StyledHeader>

      <StyledMain>
        <TodoList />
      </StyledMain>

      <StyledFooter>
        &#169; Kniazev Sergei as a test task for Wiley
      </StyledFooter>
    </StyledApp>
  );
}

export default App;
