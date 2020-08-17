export const LS_TODO_LIST = 'LS_TODO_LIST';

export function saveTodosToLS(todos) {
  localStorage.setItem(LS_TODO_LIST, JSON.stringify(todos));
}

export function loadTodosFromLS() {
  return JSON.parse(localStorage.getItem(LS_TODO_LIST) || '[]');
}
